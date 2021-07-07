const { User } = require('../../../infrastructure/database')

const getUsers = async () => {
  let users = await User.findAll()
  users = users.map((user) => user.dataValues)
  return users
}

const createUser = async (username, password) => {
  const newUser = await User.create({
    username,
    password,
  })
  return newUser.dataValues
}

module.exports = { getUsers, createUser }
