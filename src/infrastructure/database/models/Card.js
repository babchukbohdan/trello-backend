const { DataTypes, Model } = require('sequelize')

class Card extends Model {}

module.exports = (sequelize) => {
  Card.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      boardId: {
        type: DataTypes.INTEGER,
        references: {
          key: 'id',
          model: sequelize.models.board,
        },
      },
      title: {
        type: DataTypes.STRING,
      },
      order: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'card',
    }
  )

  return Card
}
