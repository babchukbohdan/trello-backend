const { DataTypes, Model } = require('sequelize')

class Board extends Model {}

module.exports = (sequelize) => {
  Board.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          key: 'id',
          model: sequelize.models.user,
        },
      },
      title: {
        type: DataTypes.STRING,
      },
      isVisible: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'board',
    }
  )

  return Board
}
