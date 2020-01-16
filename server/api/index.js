const { handle500 } = require('../globalMW')
const router = require('express').Router()
const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')

module.exports = [
  router.use('/posts', postRouter),
  router.use('/users', userRouter),
]

router.get(['/', '/:misc', '/:misc/:misc', '/:misc/:misc/:misc'], () => {
  throw new Error(
    `Make sure you're using a valid path: /api/users OR /api/posts`
  )
})

router.use(handle500)
