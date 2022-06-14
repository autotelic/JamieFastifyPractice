import Fastify from 'fastify';
import usersRoute from './routes/users.js'

function startServer() {
	const fastify = Fastify({
		logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
	})

  fastify.register(usersRoute)

	fastify.log.info('start Fastify')

  return fastify
}

export default startServer;
