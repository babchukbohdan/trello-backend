module.exports = `
  type Card {
    id: Int!
    title: String!
    boardId: Int!
    order: Int!
    cardItems: [CardItem]
  }

  input GetCardsInput {
    boardId: Int!
  }

  input CreateCardInput {
    boardId: Int!
    title: String!
    order: Int!
  }
`
