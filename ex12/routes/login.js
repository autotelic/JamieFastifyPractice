import S from 'fluent-json-schema';
import errors from 'http-errors';
import SQL from '@nearform/sql';

const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required()),
  response: {
    200: S.object()
      .prop('token', S.string().required())
  },
}

async function login(fastify) {
  fastify.post('/login', { schema },async (req) => {

    req.log.info('Login post called')

    const { username, password } = req.body

    if (username !== password) {
      throw errors.Unauthorized()
    }

    const {rows: [user]} = await fastify.pg.query(
      SQL`
      SELECT id, username
      FROM users
      WHERE username = ${username}
      `
    )

    if (!user) {
      throw errors.Unauthorized()
    }

    return {token: fastify.jwt.sign({ username })}
  })
}

export default login;
