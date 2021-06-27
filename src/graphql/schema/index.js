const User = require('./user')
const Board = require('./board')
const Card = require('./card')
const CardItem = require('./cardItem')

const Query = `
  type Query {
    getUsers: [UserResponse!]
    getBoards(input: GetBoardInput): [Board!]
    getCards(input: GetCardsInput): [Card!]
    getCardItems(input: GetCardItemsInput): [CardItem!]
  }

`
const Mutation = `
  type Mutation {
    createUser(input: UserInput): User
    createBoard(input: BoardInput): Board
    createCard(input: CreateCardInput): Card
    createCardItem(input: CreateCardItemInput): CardItem
  }
`
module.exports = [Query, Mutation, User, Board, Card, CardItem]
