const db = require('./cardItemsDAL')

const getCardItems = async (parent, args, context, info) => {
  const boardCards = await db.getCardItemsByCardId(args.input)
  return boardCards
}

const createCardItem = async (parent, args, context, info) => {
  const newCard = await db.createCardItem(args.input)
  return newCard
}

module.exports = { getCardItems, createCardItem }
