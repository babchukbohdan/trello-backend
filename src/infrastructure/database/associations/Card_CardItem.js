module.exports = (models) => {
  const { Card, CardItem } = models
  Card.hasMany(CardItem)
  CardItem.belongsTo(Card)
}
