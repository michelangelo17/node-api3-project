const db = require('./userDb')

const validateUser = (req, res, next) =>
  JSON.stringify(req.body) !== '{}'
    ? req.body.name
      ? next()
      : res.status(400).json({ message: 'missing required name field' })
    : res.status(400).json({ message: 'missing user data' })

module.exports = { validateUser }
