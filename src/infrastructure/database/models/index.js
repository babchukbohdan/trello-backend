module.exports = (sequelize) => ({
  User: require('./User')(sequelize),
  Board: require('./Board')(sequelize),
  Card: require('./Card')(sequelize),
  CardItem: require('./CardItem')(sequelize),
})
