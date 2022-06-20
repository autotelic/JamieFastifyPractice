import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.object().prop('username', S.string().required())
  }
}

async function user(fastify) {
  fastify.get('/', {
    schema,
    onRequest: [fastify.authenticate],
  },
    async (req) => req.user
  )
}

export default users;
