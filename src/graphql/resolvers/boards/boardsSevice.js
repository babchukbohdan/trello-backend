const db = require('./boardsDAL')

// these methods should be moved into index.js files -> methods from index.js should call methods from service file -> service file methods should cal DAL methods
const getBoards = async (parent, args, context, info) => {
  const userBoards = await db.getBoardsByUserId(args.input)
  return userBoards
}

// replace unused parameters with underscores. Do it in all files
const createBoard = async (parent, args, context, info) => {
  const newBoard = await db.createBoard(args.input)
  return newBoard
}

module.exports = { getBoards, createBoard }
