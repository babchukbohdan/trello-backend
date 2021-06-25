const db = require('./usersDAL')

const getUsers = async (parent, args, context, info) => {
  let users = await db.getAllUsers()

  return users
}

// move to each file

const createUser = async (parent, args, context, info) => {
  // const password = bcrypt.hashSync(input.password, SALT_ROUNDS)
  const { input } = args
  const newUser = await db.createUser(input)

  return newUser
}

module.exports = { getUsers, createUser }
