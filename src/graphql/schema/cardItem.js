module.exports = `
  type CardItem {
    id: Int!
    cardId: Int!
    title: String!
    description: String
    order: Int!
  }

  input CreateCardItemInput {
    cardId: Int!
    title: String!
    description: String
  }

  input GetCardItemsInput {
    cardId: Int!
    order: Int!
  }
`
