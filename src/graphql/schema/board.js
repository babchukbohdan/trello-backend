module.exports = `
  type Board {
    id: Int!
    title: String!
    isVisible: Boolean!
    userId: Int!
  }

  input BoardInput {
    userId: Int!
    title: String!
    isVisible: Boolean!
  }
`
