'use strict';

const path = require('path')

const Hapi = require('@hapi/hapi')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const Basic = require('@hapi/basic')
const Cookie = require('@hapi/cookie')
const Boom = require('@hapi/boom')

const Connection = require('./dbconfig')
const Users = require('./models/users')

const users = {
  Bohdan: {
    username: 'Bohdan',
    password: 'soccer',
    id: 0,
    name: 'Bohdan B'
  },
  Greg: {
    username: 'Greg',
    password: 'soadsccer',
    id: 0,
    name: 'Greg B'
  },
}

const init = async () => {
  const server = Hapi.Server({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 1234,
    routes: {
      files: {
        relativeTo: path.join(__dirname, 'static')
      }
    }
  })

  // cookies
  server.state('data', {
    ttl: null,
    isSecure: true, // https?
    isHttpOnly: true
  });

  await server.register([
    {
      plugin: require("hapi-geo-locate"),
      options: {
        enabledByDefault: true
      }
    },
    {
      plugin: Inert
    },
    {
      plugin: Cookie
    },
    {
      plugin: Vision
    }
  ])

  server.auth.strategy('login', 'cookie', {
    cookie: {
      name: 'session',
      password: 'C=q-Pp38MY%U^?=W-Ls4Seju4SL&EPwa',
      isSecure: false,
      ttl: 30000
    },
    redirectTo: '/login',
    validateFunc: async (req, session) => {
      if (session.username === 'Bohdan', session.password === 'soccer') {
        return { valid: true, credentials: { username: "Bohdan" } }
      } else {
        return { valid: false }

      }
    }
  })

  server.auth.default('login')

  server.views({
    engines: {
      hbs: require('handlebars')
    },
    path: path.join(__dirname, 'views'),
    layout: "default"
  })

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        if (request.auth.isAuthenticated) {
          return h.redirect('/welcome')
        }
        return h.file('welcome.html')
      },
      options: {
        auth: {
          mode: 'try'
        }
      }
    },
    {
      method: 'GET',
      path: '/loginBasic',
      handler: (request, h) => {
        const name = request.auth.credentials.name
        return `Welcom ${name} to my restricted page! `
      }

    },
    {
      method: "POST",
      path: '/login',
      handler: (request, h) => {
        console.log(request.payload.username);
        console.log(request.payload.password);

        if (
          request.payload.username === 'Bohdan' &&
          request.payload.password === 'soccer'
        ) {
          request.cookieAuth.set(
            {
              username: request.payload.username,
              password: request.payload.password
            })

          return h.redirect('/welcome')
        } else {

          return h.redirect('/')

        }
      },
      options: {
        auth: {
          mode: 'try'
        }
      }
    },
    {
      method: 'GET',
      path: '/getUsers',
      handler: async (request, h) => {
        const dbConnection = await Connection.connect
        return h.view('index', { users })
      }
    },
    {
      method: 'GET',
      path: '/welcome',
      handler: async (request, h) => {
        return `Hello ${request.auth.credentials.username}`
      }
    },
    {
      method: 'GET',
      path: '/logoutBasic',
      handler: async (request, h) => {
        return Boom.unauthorized("You have been logout successfully")
      },
      options: {
        auth: {
          mode: 'try'
        }
      }
    },
    {
      method: 'GET',
      path: '/logout',
      handler: async (request, h) => {
        request.cookieAuth.clear()
        return h.redirect('/')
      }
    },
    {
      method: 'GET',
      path: '/{any}',
      handler: (request, h) => {
        return "<h1>HELLO YOU MUST BE LOST</h1>"
      }
    }
  ])


  await server.start();
  console.log(`Server start on: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1)
})

init()
