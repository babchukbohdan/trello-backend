const db = require('./cardDAL')

const getCards = async (parent, args, context, info) => {
  const boardCards = await db.getCardsByBoardId(args.input)
  return boardCards
}

const createCard = async (parent, args, context, info) => {
  const newCard = await db.createCard(args.input)
  return newCard
}

module.exports = { getCards, createCard }
