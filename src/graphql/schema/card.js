module.exports = `
  type Card {
    id: Int!
    title: String!
    boardId: Int!
  }

  input GetCardsInput {
    boardId: Int!
  }

  input CreateCardInput {
    boardId: Int!
    title: String!
  }
`
