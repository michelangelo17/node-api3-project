const server = require('./server')

server.listen(8888, () =>
  console.log(`\n*** Running along on http://localhost:8888 ***\n`)
)
