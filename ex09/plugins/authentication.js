import jwt from '@fastify/jwt';
import fp from 'fastify-plugin';

// without fp
// async function authenticate(fastify, config) {
//   fastify.register(jwt, {
//     secret: config.JWT_SECRET,
//   })

//   fastify.decorate('authenticate', async (req, res) => {
//     try {
//       await req.jwtVerify()
//     } catch (err) {
//       res.send(err)
//     }
//   })
// }

// authenticate[Symbol.for('skip-override')] = true
// This stops fastify from creating a new scope. If not done
// users will be unable to access the changes
// The alternative is skip override is the fastify plugin module
// If the plugin is not used, when the fastify api changes
// we as developers need to come back to fix it.

export default authenticate

// with fp

module.exports = fp(async function (fastify, opts) {
  fastify.register(import('@fastify/jwt'), {
    secret: opts.JWT_SECRET
  })

  fastify.decorate('authenticate', async (req, res) => {
    try {
      await req.jwtVerify()
    } catch (err) {
      res.send(err)
    }
  })
})
