const request = require('supertest')
const server = require('../src/server')

request(server)
    .get('/property')
    .expect('Content-Type', '/json/')
    .expect('Content-Length', '15')
    .expect(200)

