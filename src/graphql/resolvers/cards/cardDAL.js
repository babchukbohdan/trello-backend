const { Card, CardItem } = require('../../../infrastructure/database')

const getCardsByBoardId = async ({ boardId }) => {
  const cards = Card.findAll({
    where: {
      boardId,
    },
    include: CardItem,
  })
  return cards
}
const createCard = async (props) => {
  const { title, boardId } = props
  const newCard = await Card.create({
    title,
    boardId,
  })
  return newCard
}

module.exports = { getCardsByBoardId, createCard }
