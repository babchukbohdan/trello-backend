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
      cardId: {
        type: DataTypes.INTEGER,
        references: {
          key: 'id',
          model: sequelize.models.card,
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      order: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'cardItem',
    }
  )

  return CardItem
}

// add foreigh key to all models
// add order to draggable components
