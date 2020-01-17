const { handle500 } = require('../globalMW')
const router = require('express').Router()
const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')

module.exports = [
  router.use('/posts', postRouter),
  router.use('/users', userRouter),
]

const allPaths = [
  '/',
  '/:misc',
  '/:misc/:misc',
  '/:misc/:misc/:misc',
  '/:misc/:misc/:misc/:misc',
  '/:misc/:misc/:misc/:misc/:misc',
  '/misc/:misc/:misc/:misc/:misc/:misc',
]

router.use(
  allPaths,
  () => {
    throw new Error(
      `Make sure you're using a valid path: /api/users OR /api/posts`
    )
  },
  handle500
)
