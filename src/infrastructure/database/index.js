const Sequelize = require('sequelize')
const {
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_USERNAME,
  DB_DIALECT,
} = require('../../../config')
const registerAssociations = require('./associations')

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  define: {
    freezeTableName: true,
    timestamps: false,
  },
})

const models = require('./models')(sequelize)
registerAssociations(models)
console.log(`models`, models)
console.log('Models are created')

const options = {
  // force: true,
  alter: true,
}

sequelize.sync(options).then(() => {
  console.log('Tables are created!')
})
module.exports = {
  ...models,
  sequelize,
}
