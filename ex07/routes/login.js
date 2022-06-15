import S from 'fluent-json-schema';
import errors from 'http-errors'

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

    if (username === password) {
      return {token: fastify.jwt.sign({ username })}
    }
    
    throw errors.Unauthorized()
  })
}

export default login;
