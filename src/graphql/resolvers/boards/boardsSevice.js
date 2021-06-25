const db = require('./boardsDAL')

const getBoards = async (parent, args, context, info) => {
  const userBoards = await db.getBoardsByUserId(args.input)
  return userBoards
}

const createBoard = async (parent, args, context, info) => {
  const newBoard = await db.createBoard(args.input)
  return newBoard
}

module.exports = { getBoards, createBoard }
