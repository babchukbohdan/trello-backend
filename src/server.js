'use strict';

const dotenv = require('dotenv')
const Graphi = require('graphi')

const Hapi = require('@hapi/hapi')
const Boom = require('@hapi/boom')

const schema = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')

const { sequelize } = require('./db/dbconfig')

dotenv.config()
console.log(process.argv);

const init = async () => {
  const server = Hapi.Server({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 1234,
  })

  await server.register({ plugin: Graphi, options: { schema, resolvers } });

  // await server.register([
  //   {
  //     plugin: Boom
  //   },
  // ])


  server.route([
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
    await server.start();
    console.log(`Server start on: ${server.info.uri}`);

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const options = {
      force: true,
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
