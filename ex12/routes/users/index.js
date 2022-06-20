import S from 'fluent-json-schema';

const schema = {
  response: {
    200: S.array.items(
      S.object()
      .prop('id', S.integer().required())
      .prop('username', S.string().required())
    )
  }
}

async function users(fastify) {

  fastify.get('/', {
      onRequest: [fastify.authenticate],
      schema
    }, async () => {
      const { rows: users } = await fastify.pg.query(
        SQL`
        SELECT id, username
        FROM users
        `
      )

      return users;
  })
}

export default users;
