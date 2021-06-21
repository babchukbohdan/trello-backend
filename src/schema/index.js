const schema = `
  type User {
    user_id: String!
    username: String!
    password: String!
  }

  type Query {
    getUsers: [User!]
  }
`;

module.exports = schema
