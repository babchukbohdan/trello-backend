const { Board } = require('../../../infrastructure/database')

const getBoardsByUserId = async ({ id }) => {
  const boards = Board.findAll({
    where: {
      userId: id,
    },
    // include: Users
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

module.exports = { getBoardsByUserId, createBoard }
