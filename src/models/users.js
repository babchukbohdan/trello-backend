const { sequelize } = require('../dbconfig')
const { DataTypes } = require('sequelize')

const Users = sequelize.define(
  'users',
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
)

module.exports = {
  createUser: (username, password) => {
    Users.create({
      username,
      password
    }).then(data => {
      console.log(data.toJSON());
    })
  },
  getAllUsers: async () => {
    let users = await Users.findAll()
    users = users.map(user => user.dataValues)
    return users
  },
  Users
}
