const service = require('./cardService')

const getCards = async (parent, args, context, info) => {
  const { boardId } = args.input
  const boardCards = await service.getCards(boardId)
  return boardCards
}

const createCard = async (parent, args, context, info) => {
  const newCard = await service.createCard(args.input)
  return newCard
}

module.exports = { getCards, createCard }
