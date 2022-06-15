'use strict'
import t from 'tap';
import startServer from '../index.js';

const { test } = t;

// Overall test
test('GET /users route', async t  => {
  // individual test for the overall test
  t.test('returns users', async t => {
    const fastify = startServer()
  
    const res = await fastify.inject({
      method: 'GET',
      url: '/users'
    })
    t.equal(res.statusCode, 200, 'returns status code 200')
    //deeply equal
    t.same(await res.json(), [
      {username: "Jamie"}, {username: "Ivan"}, {username: "Joseph"}
    ])
  })
})
