const {
  user: { User },
} = require('../../model')

const { Unauthorized } = require('http-errors')

const jwt = require('jsonwebtoken')

const current = async (req, res) => {
  const { SECRET_KEY } = process.env

  const [_, token] = req.headers.authorization.split(' ')

  const { id } = jwt.verify(token, SECRET_KEY)

  const user = await User.findById(id)

  if (!user) {
    throw new Unauthorized()
  }

  res.status(200).json({ result: user })
}

module.exports = current
