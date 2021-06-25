const { Card } = require('../../../infrastructure/database')

const getCardsByBoardId = async ({ id }) => {
  const cards = Card.findAll({
    where: {
      boardId: id,
    },
    // include: Users
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
