import Fastify from 'fastify';
import usersRoute from './routes/users.js'
import loginRoute from './routes/login.js'
import jwt from '@fastify/jwt'

function startServer(config) {

	const fastifyOptions = {
    ...config,
    logger: {
      level: config.LOG_LEVEL,
      transport: {
        target: config.PINO_PRETTY
      }
    }
  };

	const fastify = Fastify({fastifyOptions});

  fastify.register(import('./plugins/authenticate.js'), fastifyOptions)
  fastify.register(usersRoute)
  fastify.register(loginRoute)

	fastify.log.info('start Fastify')

  return fastify
}

export default startServer;
