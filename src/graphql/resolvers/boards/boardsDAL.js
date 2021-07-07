const { Board, Card, CardItem } = require('../../../infrastructure/database')

const getBoards = async (userId) => {
  const boards = await Board.findAll({
    where: {
      userId,
    },
    include: {
      model: Card,
      include: CardItem,
    },
    // include: { all: true, nested: true },
  })
  return boards
}
const createBoard = async (props) => {
  const { title, isVisible, userId } = props
  const newBoard = await Board.create({
    title,
    isVisible,
    userId,
  })
  return newBoard
}

module.exports = { getBoards, createBoard }
