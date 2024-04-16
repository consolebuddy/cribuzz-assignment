module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('Match', {
      match_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      team_1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      team_2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      venue: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Match;
  };
  