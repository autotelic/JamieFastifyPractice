import S from 'fluent-json-schema';

const schema = {
  body: S.object()
    .prop('username', S.string().required())
    .prop('password', S.string().required())
}

async function login(fastify) {
  fastify.post('/login', async (req) => {
    req.log.info('Login post called')
    const { username, password } = req.body
    return { username, password }
  })
}
