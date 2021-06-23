const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../../constants/crypt');

const { createBoardInDb } = require('../../db/models/boards');
const { createCardInDb, getCardsByBoardId } = require('../../db/models/cards');
const { createCardItemInDb, getCardItemsByCardId } = require('../../db/models/cardItems');
const { getAllUsers, createUserInDB } = require('../../db/models/users')

const getUsers = async (args, request) => {
  console.log(`args`, args)
  let users = await getAllUsers()

  return users;
};

const createUser = async (props) => {
  console.log(`props`, props);
  const { input } = props
  const password = bcrypt.hashSync(input.password, SALT_ROUNDS)
  const newUser = await createUserInDB({ ...input, password })
  return newUser
}

const getBoards = async ({ userId }) => {
  const userBoards = await getBoardsByUserId(userId)
  return userBoards
}

const createBoard = async ({ input }) => {
  const newBoard = await createBoardInDb(input)
  return newBoard
}


const getCards = async ({ boardId }) => {
  const boardCards = await getCardsByBoardId(boardId)
  return boardCards
}

const createCard = async ({ input }) => {
  const newCard = await createCardInDb(input)
  return newCard
}

const getCardItems = async ({ cardId }) => {
  const boardCards = await getCardItemsByCardId(cardId)
  return boardCards
}

const createCardItem = async ({ input }) => {
  const newCard = await createCardItemInDb(input)
  return newCard
}



module.exports = {
  getUsers,
  createUser,
  getBoards,
  createBoard,
  getCards,
  createCard,
  getCardItems,
  createCardItem
}
