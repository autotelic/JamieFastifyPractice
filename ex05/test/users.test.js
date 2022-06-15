'use strict'

import t from 'tap';
import startServer from '../index.js';

const { test } = t;

test('GET /users route', async t  => {
  const fastify = startServer()

  const res = await fastify.inject({
    method: 'GET',
    url: '/users'
  })
  t.equal(res.statusCode, 200, 'returns status code 200')
  t.same(await res.json(), [
    {username: "Jamie"}, {username: "Ivan"}, {username: "Joseph"}
  ])
})
