module.exports = (sequelize, DataTypes) => {
    const PlayerStatistics = sequelize.define('PlayerStatistics', {
      stats_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      matches_played: {
        type: DataTypes.INTEGER
      },
      runs: {
        type: DataTypes.INTEGER
      },
      wickets: {
        type: DataTypes.INTEGER
      }
    });
  
    return PlayerStatistics;
  };
  