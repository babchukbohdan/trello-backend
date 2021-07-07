const { CardItem } = require('../../../infrastructure/database')

const getCardItems = async (cardId) => {
  const cardItems = CardItem.findAll({
    where: {
      cardId,
    },
    // include: Users
  })
  return cardItems
}
const createCardItem = async (props) => {
  const { title, cardId, description } = props
  const newCardItem = await CardItem.create({
    title,
    cardId,
    description,
  })
  return newCardItem
}

module.exports = { getCardItems, createCardItem }
