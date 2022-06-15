import Fastify from 'fastify';
import usersRoute from './routes/users.js'
import loginRoute from './routes/login.js'
import jwt from '@fastify/jwt'

function startServer() {
	const fastify = Fastify({
		logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
	})

  fastify.register(jwt, {
    secret: 'supersecret'
  })
  
  fastify.register(usersRoute)
  fastify.register(loginRoute)

	fastify.log.info('start Fastify')

  return fastify
}

export default startServer;
