const { Users, getAllUsers } = require('../models/users')

const getUsers = async function (args, request) {
  let users = await getAllUsers()

  return users;
};

module.exports = {
  getUsers
}
