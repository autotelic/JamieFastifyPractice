'use strict'
import t from 'tap';
import startServer from '../index.js';

const { test } = t;

test('POST /login', async t => {
  t.test('returns 400 with invalid payload', async t => {
    const fastify = startServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        name: 'Jamie',
        passcode: 'Jamie'
      }
    })

    t.equal(res.statusCode, 400, 'returns status code 400')
  })

  t.test('returns data with valid payload',  async t => {
    const fastify = startServer()

    const res = await fastify.inject({
      url: '/login',
      method: 'POST',
      body: {
        username: 'Jamie',
        password: 'Jamie'
      }
    })

    t.equal(res.statusCode, 200, 'returns status code 200')
    t.same(await res.json(), {
      username: 'Jamie',
      password: 'Jamie'
    })

  })
})
