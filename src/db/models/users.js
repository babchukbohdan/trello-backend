const { DataTypes } = require('sequelize')

const { sequelize } = require('../dbconfig')
const { USERS } = require('../../constants/tableNames');
const { Boards } = require('./boards');
console.log('INIT USERS');
console.log('Boards', Boards);
const Users = sequelize.define(
  USERS,
  {
    id: {
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
    timestamps: false,
    underscored: true
  }
)

Users.hasMany(Boards, {
  foreignKey: 'user_id'
});
Boards.belongsTo(Users, {
  foreignKey: 'user_id'
});

module.exports = {
  createUserInDB: async ({ username, password }) => {
    const newUser = await Users.create({
      username,
      password
    })
    console.log('newUser', newUser.dataValues);
    return newUser.dataValues;
  },
  getAllUsers: async () => {
    let users = await Users.findAll()
    users = users.map(user => user.dataValues)
    return users
  },
  Users
}
