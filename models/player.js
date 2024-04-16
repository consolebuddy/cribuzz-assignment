module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Player;
  };
  