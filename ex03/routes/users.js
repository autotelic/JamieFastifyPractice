async function users(fastify) {
  fastift.get('/users', async (req) => {
    req.log.info('Users route called')
    
    return [{username: "Jamie"}, {username: "Ivan"}, {username: "Joseph"}]
  })
}

export default users;
