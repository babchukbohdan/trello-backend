module.exports = (models) => {
  const { User, Board } = models
  User.hasMany(Board)
  Board.belongsTo(User)
}
