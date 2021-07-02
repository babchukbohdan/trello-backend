const service = require('./cardItemsService')

const getCardItems = async (parent, args, context, info) => {
  const { cardId } = args.input
  const boardCards = await service.getCardItems(cardId)
  return boardCards
}

const createCardItem = async (parent, args, context, info) => {
  const newCard = await service.createCardItem(args.input)
  return newCard
}

module.exports = { getCardItems, createCardItem }
