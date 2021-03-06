import startServer from "./index.js";

const fastify = startServer()

const start = async function() {
	try {
		await fastify.listen(3000)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

start()
