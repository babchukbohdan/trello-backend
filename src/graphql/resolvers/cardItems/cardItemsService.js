const db = require('./cardItemsDAL')

const getCardItems = async (cardId) => {
  const boardCards = await db.getCardItems(cardId)
  return boardCards
}

const createCardItem = async (props) => {
  const newCard = await db.createCardItem(props)
  return newCard
}

module.exports = { getCardItems, createCardItem }
