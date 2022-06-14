import Fastify from 'fastify';
import usersRoute from './routes/users.js'

function startServer() {
	const fastify = Fastify({
		logger: true
	})

  fastify.register(usersRoute)

  return fastify
}

export default startServer;
