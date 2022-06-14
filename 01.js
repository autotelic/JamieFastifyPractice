// tasks
// Exposes a GET / route
// Listens on port 3000
// Responds with the JSON object
// {
//   "hello": "world"
// }
// 🏆 use ES modules!

import Fastify from 'fastify';
const fastify = Fastify({
    logger:true
});

fastify.get('/', function (req, res) {
    reply.send({hello: 'world'})
})

fastify.listen({port:3000}, function (err, address) {
    if(err) {
        fastify.log.error(err)
        process.exit(1)
    }
})