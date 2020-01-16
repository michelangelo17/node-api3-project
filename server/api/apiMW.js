const validateId = db => (req, res, next) =>
  db.getById(req.params.id).then(obj => {
    obj
      ? obj.name
        ? (req.user = obj)
        : obj.text && (req.post = obj)
      : res.status(400).json({ message: 'invalid id' })
    next()
  })

const validatePost = (req, res, next) =>
  JSON.stringify(req.body) !== '{}'
    ? req.body.text
      ? next()
      : res.status(400).json({ message: 'missing required text field' })
    : res.status(400).json({ message: 'missing user data' })

module.exports = { validateId, validatePost }
