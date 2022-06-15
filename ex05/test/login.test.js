'use strict'
import t from 'tap';

import startServer from '../index.js';

const { test } = t;

test('POST /login', async t => {

  t.test('returns 400 with invalid username in payload', async t => {
    const fastify = startServer();
    const res = await fastify.inject({
      method: 'POST',
      url: '/login',
      body: {
        name: 'Jamie',
        password: 'Jamie'
      }
    })

    t.equal(res.statusCode, 400, 'returns status code 400')
  })

  t.test('returns 400 with invalid password in payload', async t => {
    const fastify = startServer();
    const res = await fastify.inject({
      method: 'POST',
      url: '/login',
      body: {
        username: 'Jamie',
        pass: 'Jamie'
      }
    })

    t.equal(res.statusCode, 400, 'returns status code 400')
  })

  t.test.apply('returns data with valid payload',  async t => {
    const fastify = startServer();
    const res = await fastify.inject({
      method: 'POST',
      urls: '/login',
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
