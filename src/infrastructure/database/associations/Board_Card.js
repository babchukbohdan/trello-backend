module.exports = (models) => {
  const { Board, Card, CardItem } = models
  Board.hasMany(Card)
  Card.belongsTo(Board)
}
