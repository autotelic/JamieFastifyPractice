import type { FastifyRequest, FastifyReply } from 'fasitfy';

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<void>
  }
}
