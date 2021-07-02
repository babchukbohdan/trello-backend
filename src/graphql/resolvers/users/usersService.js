const db = require('./usersDAL')

const getUsers = async () => {
  let users = await db.getUsers()

  return users
}

// move to each file

const createUser = async (username, password) => {
  // const password = bcrypt.hashSync(input.password, SALT_ROUNDS)
  const newUser = await db.createUser(username, password)

  return newUser
}

module.exports = { getUsers, createUser }
