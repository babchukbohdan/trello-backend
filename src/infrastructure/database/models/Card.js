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
      title: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'card',
    }
  )

  return Card
}
