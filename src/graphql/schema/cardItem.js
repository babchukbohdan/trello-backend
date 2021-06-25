module.exports = `
  type CardItem {
    id: Int!
    title: String!
    description: String
    cardId: Int!
  }

  input CreateCardItemInput {
    cardId: Int!
    title: String!
    description: String
  }

  input GetCardItemsInput {
    cardId: Int!
  }
`
