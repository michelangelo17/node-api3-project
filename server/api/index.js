const router = require('express').Router()
const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')

module.exports = [
  router.use('/posts', postRouter),
  router.use('/users', userRouter),
]
