import Fastify from 'fastify';
const fastify = Fastify({
	logger:true
});

// fastify.get('/', function (req, res) {
//   res.send({ hello: 'world' })
// });

// fastify.listen({ port:3000 }, function (err, address) {
//   if(err) {
//     fastify.log.error(err)
//     process.exit(1);
//   }
// });

// async variant
fastify.get('/', async (req,res) => {
  return { hello:'world' }
})

const start = async () => {
	try {
		await fastify.listen(3000)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

start()
