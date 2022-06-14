async function users(fastify) {
	fastify.get('/users', async () => {
		return [{username: "Jamie"}, {username: "Ivan"}, {username: "Joseph"}]
	})
}

export default users;
