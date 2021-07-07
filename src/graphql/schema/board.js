module.exports = `
  type Board {
    id: Int!
    title: String!
    isVisible: Boolean!
    userId: Int!
    cards: [Card]
  }

  input BoardInput {
    userId: Int!
    title: String!
    isVisible: Boolean!
  }

  input GetBoardInput {
    userId: Int!
  }
`
