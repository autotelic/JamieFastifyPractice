import jwt from '@fastify/jwt';
import fp from 'fastify-plugin';
import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify'

async function authenticate(
  fasitfy: FastifyInstance,
  opts: FastifyPluginOptions
) : Promise<void> {
  fasitfy.register(jwt, { secret: opts.JWT_SECRET })
  fasitfy.decorate(
    'authenticate',
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        await req.jwtVerify()
      } catch (err) {
        reply.send(err)
      }
    }
  )
}

export default fp(authenticate)
