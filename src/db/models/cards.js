const { DataTypes } = require("sequelize");

const { sequelize } = require("../dbconfig");
const { CARDS } = require("../../constants/tableNames");
const { CardItems } = require("./cardItems");

console.log('INIT CARDS');
const Cards = sequelize.define(
  CARDS,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    underscored: true
  }
);

Cards.hasMany(CardItems, {
  foreignKey: 'card_id'
})
CardItems.belongsTo(Cards, {
  foreignKey: 'card_id'
})

module.exports = {
  getCardsByBoardId: async ({ id }) => {
    const cards = Cards.findAll({
      where: {
        board_id: id
      },
      // include: Users
    })
    return cards
  },
  createCardInDb: async (props) => {
    console.log(`props`, props)
    const { title, board_id } = props
    const newCard = await Cards.create({
      title, board_id
    })
    // console.log(`newBoard`, newBoard)
    return newCard
  },
  Cards
}
