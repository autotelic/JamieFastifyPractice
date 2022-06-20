import Fastify from 'fastify';
import autoLoad from '@fastify/autoload';
import { join } from 'desm';

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

  fastify.register(import('@fastify/postgres'), {
    connectionString: fastifyOptions.PG_CONNECTION_STRING
  })

  fastify.register(autoLoad, {
    dir: join(import.meta.url, 'plugins'),
    options: fastifyOptions,
  })

  fastify.register(autoLoad, {
    dir: join(import.meta.url, 'routes'),
    options: fastifyOptions
  })

	fastify.log.info('starting Fastify')

  return fastify
}

export default startServer;
