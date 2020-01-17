const { handle500 } = require('../../globalMW')
const db = require('./userDb')
const postDb = require('../posts/postDb')
const { validateId, validatePost } = require('../apiMW')
const { validateUser } = require('./userMW')
const router = require('express').Router()

router.post('/', validateUser, (req, res) =>
  db
    .insert(req.body)
    .then(newUser => res.status(201).json(newUser))
    .catch(e => res.status(500).json({ message: e.message }))
)

router.post('/:id/posts', validateId(db), validatePost, (req, res) =>
  postDb
    .insert({ ...req.body, user_id: req.params.id })
    .then(newPost => res.status(201).json(newPost))
    .catch(e => res.status(500).json({ message: e.message }))
)

router.get('/', (req, res) =>
  db
    .get()
    .then(userArray => res.status(200).json(userArray))
    .catch(e => res.status(500).json({ message: e.message }))
)

router.get('/:id', validateId(db), (req, res) => res.status(200).json(req.user))

router.get('/:id/posts', validateId(db), (req, res) =>
  db
    .getUserPosts(req.params.id)
    .then(userPosts => res.status(200).json(userPosts))
    .catch(e => res.status(500).json({ message: e.message }))
)

router.delete('/:id', validateId(db), (req, res) =>
  db
    .remove(req.params.id)
    .then(numRemoved =>
      res.status(200).json({
        message: `Successfully removed ${numRemoved} users`,
      })
    )
    .catch(e => res.status(500).json({ message: e.message }))
)

router.put('/:id', validateId(db), validateUser, (req, res) =>
  db
    .update(req.params.id, req.body)
    .then(numUpdated =>
      res.status(200).json({
        message: `Successfully updated ${numUpdated} users`,
      })
    )
    .catch(e => res.status(500).json({ message: e.message }))
)

router.use(handle500)

module.exports = router
