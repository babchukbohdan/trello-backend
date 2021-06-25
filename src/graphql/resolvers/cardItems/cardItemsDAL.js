const { CardItem } = require('../../../infrastructure/database')

const getCardItemsByCardId = async ({ id }) => {
  const cardItems = CardItem.findAll({
    where: {
      cardId: id,
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

module.exports = { getCardItemsByCardId, createCardItem }
