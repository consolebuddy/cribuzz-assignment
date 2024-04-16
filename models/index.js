const Sequelize = require('sequelize');
const config = require('../config/config').database;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user')(sequelize, Sequelize);
db.matches = require('./match')(sequelize, Sequelize);
db.players = require('./player')(sequelize, Sequelize);
db.playerStatistics = require('./playerStatistics')(sequelize, Sequelize);

// Associations can be defined here
db.players.hasOne(db.playerStatistics, { foreignKey: 'player_id', as: 'statistics' });
db.playerStatistics.belongsTo(db.players, { foreignKey: 'player_id', as: 'player' });

db.matches.belongsToMany(db.players, { through: 'MatchPlayers', as: 'players' });
db.players.belongsToMany(db.matches, { through: 'MatchPlayers', as: 'matches' });

module.exports = db;
