const server = require('express')()
const { middleware } = require('./globalMW')
const apiRouter = require('./api')

server.use('/api', middleware, apiRouter)

module.exports = server
