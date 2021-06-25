const associations = [
  require('./User_Board'),
  require('./Board_Card'),
  require('./Card_CardItem'),
]

module.exports = (models) => {
  for (const association of associations) {
    association(models)
  }
}
