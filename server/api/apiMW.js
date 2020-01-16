const validateUserId = (db) => (req, res, next) =>
  db.getById(req.params.id).then(user => {
    user
      ? (req.body.user = user)
      : res.status(400).json({ message: 'invalid user id' })
    next()
  })

module.exports = {
  validateUserId: validateUserId,
}