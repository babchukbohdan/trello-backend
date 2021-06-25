const { createUser, getUsers } = require('./users/usersService')
const { createBoard, getBoards } = require('./boards/boardsSevice')
const { createCard, getCards } = require('./cards/cardServices')
const { createCardItem, getCardItems } = require('./cardItems/cardItemsService')

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
