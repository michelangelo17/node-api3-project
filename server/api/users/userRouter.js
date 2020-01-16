const db = require('./userDb')
const { handle500 } = require('../../globalMW')
const { validateUserId } = require('../apiMW')
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  // do your magic!
})

router.post('/:id/posts', (req, res) => {
  // do your magic!
})

router.get('/', (req, res) =>
  db
    .get()
    .then(userArray => res.status(200).json(userArray))
    .catch(() => res.status(500).json({ error: 'Could not get users!' }))
)

router.get('/:id', validateUserId(db), (req, res) =>
  res.status(200).json(req.body.user)
)

router.get('/:id/posts', (req, res) => {
  // do your magic!
})

router.delete('/:id', (req, res) => {
  // do your magic!
})

router.put('/:id', (req, res) => {
  // do your magic!
})

//custom middleware

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

router.use(handle500)

module.exports = router
