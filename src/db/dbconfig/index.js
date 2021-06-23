const Sequelize = require('sequelize')

const dbName = process.env.DB_NAME || 'trello'
const dbUserName = process.env.DB_USERNAME || 'root'
const dbPassword = process.env.DB_PASSWORD || '1111'

const sequelizeOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  dialect: process.env.DB_DIALECT || 'mysql',
  define: {
    freezeTableName: true
  }
}

// console.log({
//   dbName,
//   dbUserName,
//   dbPassword,
//   sequelizeOptions
// });

const sequelize = new Sequelize(dbName, dbUserName, dbPassword, sequelizeOptions)

module.exports.sequelize = sequelize
