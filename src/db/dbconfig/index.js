const Sequelize = require('sequelize')
const {
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_USERNAME,
  DB_DIALECT,
} = require('../../config')

const sequelizeOptions = {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  define: {
    freezeTableName: true,
  },
}

const sequelize = new Sequelize(
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  sequelizeOptions
)

module.exports.sequelize = sequelize
