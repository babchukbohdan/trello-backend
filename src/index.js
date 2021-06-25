'use strict';

const Graphi = require('graphi')
const { ApolloServer, gql } = require('apollo-server-hapi')
const Hapi = require('@hapi/hapi')
const Boom = require('@hapi/boom')

const schema = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

const { sequelize } = require('./db/dbconfig')

const { HOST, PORT } = require('./config')

console.log(process.argv);
console.log(`process.cwd`, process.cwd())

const init = async () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers
  })
  await server.start()

  const app = Hapi.Server({
    host: HOST || 'localhost',
    port: PORT || 1234,
  })

  await server.applyMiddleware({
    app
  })

  await server.installSubscriptionHandlers(app.listener)

  // await server.register({
  //   plugin: gql,
  //   options: {
  //     path: '/graphql',
  //     graphqlOptions: {
  //       schema,
  //       // resolvers
  //     },
  //     route: {
  //       cors: true,
  //     },
  //   },
  // });


  // await server.register({ plugin: Graphi, options: { schema, resolvers } });
  // await server.register([
  //   {
  //     plugin: Boom
  //   },
  // ])


  app.route([
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        return 'Hello World'
      },
      options: {

      }
    }
  ])

  try {
    await app.start();
    console.log(`Server start on: ${app.info.uri}`);

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');



    const options = {
      // force: true,
      // alter: true,
    };
    await sequelize.sync(options);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }



}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1)
})

init()
