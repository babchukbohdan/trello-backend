const schema = `
  type User {
    id: Int!
    username: String!
    password: String!
  }

  type Board {
    id: Int!
    title: String!
    is_visible: Boolean!
    user_id: Int!
  }

  type Card {
    id: Int!
    title: String!
    board_id: Int!
  }

  type CardItem {
    id: Int!
    title: String!
    description: String
    card_id: Int!
  }

  input CreateCardItemInput {
    card_id: Int!
    title: String!
    description: String
  }

  input GetCardItemsInput {
    card_id: Int!
  }

  input GetCardsInput {
    board_id: Int!
  }

  input CreateCardInput {
    board_id: Int!
    title: String!
  }

  type UserResponse {
    id: Int
    username: String
  }

  input UserInput {
    username: String!
    password: String!
  }

  input BoardInput {
    user_id: Int!
    title: String!
    is_visible: Boolean!
  }

  type Query {
    getUsers: [UserResponse!]
    getBoards(input: BoardInput): [Board!]
    getCards(input: GetCardsInput): [Card!]
    getCardItems(input: GetCardItemsInput): [CardItem!]
  }

  type Mutation {
    createUser(input: UserInput): User
    createBoard(input: BoardInput): Board
    createCard(input: CreateCardInput): Card
    createCardItem(input: CreateCardItemInput): CardItem
  }
`;

module.exports = schema
