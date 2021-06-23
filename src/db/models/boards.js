const { DataTypes } = require("sequelize");

const { sequelize } = require("../dbconfig");
const { BOARDS } = require("../../constants/tableNames");
const { Cards } = require("./cards");

console.log('INIT BOARDS');
const Boards = sequelize.define(
  BOARDS,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
    },
    is_visible: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    timestamps: false,
    underscored: true
  }
);

Boards.hasMany(Cards, {
  foreignKey: 'board_id'
})
Cards.belongsTo(Boards, {
  foreignKey: 'board_id'
})

module.exports = {
  getBoardsByUserId: async ({ id }) => {
    const boards = Boards.findAll({
      where: {
        user_id: id
      },
      // include: Users
    })
    return boards
  },
  createBoardInDb: async (props) => {
    console.log(`props`, props)
    const { title, is_visible, user_id } = props
    const newBoard = await Boards.create({
      title, is_visible, user_id
    })
    // console.log(`newBoard`, newBoard)
    return newBoard
  },
  Boards
}
