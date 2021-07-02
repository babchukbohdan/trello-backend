const service = require('./usersService')

const getUsers = async (parent, args, context, info) => {
  let users = await service.getUsers()

  return users
}

// move to each file

const createUser = async (parent, args, context, info) => {
  // const password = bcrypt.hashSync(input.password, SALT_ROUNDS)
  const { username, password } = args.input
  const newUser = await service.createUser(username, password)

  return newUser
}

module.exports = { getUsers, createUser }
