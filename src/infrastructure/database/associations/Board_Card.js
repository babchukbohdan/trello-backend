module.exports = (models) => {
  const { Board, Card } = models
  Board.hasMany(Card)
  Card.belongsTo(Board)
}
