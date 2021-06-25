const { User } = require('../../../infrastructure/database')

const createUser = async ({ username, password }) => {
  const newUser = await User.create({
    username,
    password,
  })
  return newUser.dataValues
}
const getAllUsers = async () => {
  let users = await User.findAll()
  users = users.map((user) => user.dataValues)
  return users
}

module.exports = { createUser, getAllUsers }
