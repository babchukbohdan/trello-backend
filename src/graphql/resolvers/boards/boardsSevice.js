const db = require('./boardsDAL')

const getBoards = async (userId) => {
  const userBoards = await db.getBoards(userId)
  return userBoards
}

const createBoard = async (props) => {
  const newBoard = await db.createBoard(props)
  return newBoard
}

module.exports = { getBoards, createBoard }
