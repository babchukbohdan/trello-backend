const Sequelize = require('sequelize')

const dbName = process.env.DB_NAME || 'trello'
const dbUserName = process.env.DB_USERNAME || 'root'
const dbPassword = process.env.DB_PASSWORD || '1111'

const sequelizeOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  dialect: process.env.DB_DIALECT || 'mysql'
}

const sequelize = new Sequelize(dbName, dbUserName, dbPassword, sequelizeOptions)

module.exports.connect = sequelize
// module.exports.getUsers = async () => {
//   try {
//     await sequelize.authenticate()
//     console.log('Connected to database');
//     const [results, metadata] = await sequelize.query('SELECT * FROM users')
//     return results

//   } catch (error) {
//     console.log('Could not connect');
//   }
// }
