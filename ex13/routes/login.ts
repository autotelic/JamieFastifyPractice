import { FastifyInstance, FastifyRequest } from 'fastify';
import { Type, Static } from '@sinclair/typebox';
// typebox is a replacement for fluent-json-schema
import errors from 'http-errors';

// const schema = {
//   body: S.object()
//     .prop('username', S.string().required())
//     .prop('password', S.string().required()),
//   response: {
//     200: S.object()
//       .prop('token', S.string().required())
//   },
// }
// The block above gets split into 2 schemas
// 1 for the Body and 1 for the Response
// Use Type and Static from typebox

const BodySchema = Type.Strict(
  Type.Object({
    username: Type.String(),
    password: Type.String(),
  })
)

type BodySchema = Static<typeof BodySchema>

const ResponseSchema = Type.Strict(
  Type.Object({
    token: Type.String(),
  })
)
type ResponseSchema = Static<typeof ResponseSchema>

// format the body and response schema format/structure for Fastify
const schema = {
  body: BodySchema,
  response: { 200: ResponseSchema },
}

// async function login(fastify) {
//   fastify.post('/login', { schema },async (req) => {
//     req.log.info('Login post called')
//     const { username, password } = req.body

//     if (username === password) {
//       return {token: fastify.jwt.sign({ username })}
//     }

//     throw errors.Unauthorized()
//   })
// }

// export default login;

export default async function login(fasitfy: FastifyInstance) {
  fasitfy.post(
    '/login',
    { schema },
   async (req: FastifyRequest<{ Body: BodySchema }>) : Promise<ResponseSchema> => {
    const {username, password} = req.body

    if(username !== password) {
      throw new errors.Unauthorized()
    }

    return { token: fasitfy.jwt.sign({ username }) }
   }
  )
}
