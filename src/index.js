'use strict'

const { ApolloServer } = require('apollo-server-hapi')
const Hapi = require('@hapi/hapi')
// remove unused variables
const Boom = require('@hapi/boom')
const { sequelize } = require('./infrastructure/database')

const schema = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

const { HOST, PORT } = require('../config')

console.log(process.argv)
console.log(`process.cwd`, process.cwd())

const init = async () => {
  // remove apolloserver, register graphql as here: https://www.apollographql.com/docs/apollo-server/v1/servers/hapi/ 
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  })
  await server.start()

  // remove 
  const app = Hapi.Server({
    host: HOST || 'localhost',
    port: PORT || 1234,
  })

  // remove this
  await server.applyMiddleware({
    app,
  })

  await server.installSubscriptionHandlers(app.listener)

  // create src/routes folder, and move all route register into separate files in this folder
  app.route([
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        return 'Hello World'
      },
      options: {},
    },
  ])

  await app.start()
  console.log(`Server start on: ${app.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
