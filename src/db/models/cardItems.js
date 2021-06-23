const { DataTypes } = require("sequelize");

const { sequelize } = require("../dbconfig");
const { CARD_ITEMS } = require("../../constants/tableNames");

console.log('INIT CardItems');
const CardItems = sequelize.define(
  CARD_ITEMS,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
    underscored: true
  }
);

module.exports = {
  getCardItemsByCardId: async ({ id }) => {
    const cardItems = CardItems.findAll({
      where: {
        card_id: id
      },
      // include: Users
    })
    return cardItems
  },
  createCardItemInDb: async (props) => {
    console.log(`props`, props)
    const { title, card_id, description } = props
    const newCardItem = await CardItems.create({
      title, card_id, description
    })
    // console.log(`newBoard`, newBoard)
    return newCardItem
  },
  CardItems
}
