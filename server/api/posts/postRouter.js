const { handle500 } = require('../../globalMW')
const db = require('./postDb')
const express = require('express')
const { validateId, validatePost } = require('../apiMW')

const router = express.Router()

router.get('/', (req, res) =>
  db
    .get()
    .then(userArray => res.status(200).json(userArray))
    .catch(e => res.status(500).json({ message: e.message }))
)

router.get('/:id', validateId(db), (req, res) => res.status(200).json(req.post))

router.delete('/:id', validateId(db), (req, res) =>
  db
    .remove(req.params.id)
    .then(numRemoved =>
      res.status(200).json({
        message: `Successfully removed ${numRemoved} post`,
      })
    )
    .catch(e => res.status(500).json({ message: e.message }))
)

router.put('/:id', validateId(db), validatePost, (req, res) =>
  db
    .update(req.params.id, req.body)
    .then(newPost => res.status(201).json(newPost))
    .catch(e => res.status(500).json({ message: e.message }))
)

router.use(handle500)

module.exports = router
