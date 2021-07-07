const { createUser, getUsers } = require('./users')
const { createBoard, getBoards } = require('./boards')
const { createCard, getCards } = require('./cards')
const { createCardItem, getCardItems } = require('./cardItems')

module.exports = {
  Query: {
    getUsers,
    getBoards,
    getCards,
    getCardItems,
  },
  Mutation: {
    createUser,
    createBoard,
    createCard,
    createCardItem,
  },
}
