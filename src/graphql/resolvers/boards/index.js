const service = require('./boardsSevice')

const getBoards = async (parent, args, context, info) => {
  const { userId } = args.input
  const userBoards = await service.getBoards(userId)
  return userBoards
}

const createBoard = async (parent, args, context, info) => {
  const newBoard = await service.createBoard(args.input)
  return newBoard
}

module.exports = {
  getBoards,
  createBoard,
}
