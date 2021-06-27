module.exports = `
  type Card {
    id: Int!
    title: String!
    boardId: Int!
    cardItems: [CardItem]
  }

  input GetCardsInput {
    boardId: Int!
  }

  input CreateCardInput {
    boardId: Int!
    title: String!
  }
`
