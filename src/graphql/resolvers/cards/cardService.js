const db = require('./cardDAL')

const getCards = async (boardId) => {
  const boardCards = await db.getCards(boardId)
  return boardCards
}

const createCard = async (props) => {
  const newCard = await db.createCard(props)
  return newCard
}

module.exports = { getCards, createCard }
