const { DataTypes, Model } = require('sequelize')

class CardItem extends Model {}

module.exports = (sequelize) => {
  CardItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'cardItem',
    }
  )

  return CardItem
}
