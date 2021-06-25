const dotenv = require('dotenv')
dotenv.config()

const env = process.env
const secretKeys = [
  "HOST",
  "PORT",
  "DB_NAME",
  "DB_USERNAME",
  "DB_PASSWORD",
  "DB_HOST",
  "DB_PORT",
  "DB_DIALECT",
]

const config = secretKeys.reduce((acc, key) => {
  acc[key] = env[key]
  return acc
}, {})

module.exports = config
