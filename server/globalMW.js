const express = require('express')
const cors = require('cors')

const logger = (req, res, next) => {
  console.log(
    `\n*** Server Request Information ***\n 
    Request Method: ${req.method}\n 
    Request URL: ${req.originalUrl}\n
    TimeStamp: ${new Date(Number(new Date()))}`
  )
  next()
}

const handle500 = (err, req, res, next) =>
  res
    .status(500)
    .json({
      message: '500: Internal Server Error',
      location: req.originalUrl,
      error: err.message,
    })
const middleware = [logger, express.json(), cors()]

module.exports = {
  middleware,
  handle500,
}
