module.exports = `
  type User {
    id: Int!
    username: String!
    password: String!
  }

  type UserResponse {
    id: Int
    username: String
  }

  input UserInput {
    username: String!
    password: String!
  }
`
