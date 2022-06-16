import S from 'fluent-json-schema'

const schema = {
  response: {
    200: S.array.items(
      S.object().prop('username', S.string().required())
    )
  }
}

async function users(fastify) {
  fastify.get('/users', { schema }, async (req) => {
    req.log.info('Users route called')
    
    // valid response
    return [{username: 'Jamie'}, {username: 'Ivan'}, {username: 'Joseph'}]
    // invalid response
    // return [{name: 'Jamie'}, {name: 'Ivan'}, {name: 'Joseph'}]
  })
}

export default users;
