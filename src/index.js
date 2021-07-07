'use strict'

const { ApolloServer } = require('apollo-server-hapi')
const Hapi = require('@hapi/hapi')

const schema = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

const { HOST, PORT } = require('../config')

console.log(process.argv)
console.log(`process.cwd`, process.cwd())

const init = async () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  })
  await server.start()

  const app = Hapi.Server({
    host: HOST || 'localhost',
    port: PORT || 1234,
  })

  await server.applyMiddleware({
    app,
  })

  await server.installSubscriptionHandlers(app.listener)

  // array in routes/index.js
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
