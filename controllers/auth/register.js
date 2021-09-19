const { Conflict } = require('http-errors')
const fs = require('fs/promises')
const path = require('path')

const {
  user: { User },
} = require('../../model')

const register = async (req, res) => {
  const { password, email } = req.body

  const user = await User.findOne({ email })

  if (user) {
    throw new Conflict('Already register')
  }

  const newUser = new User({ email })

  newUser.setPassword(password)

  const respons = await newUser.save()

  const userDir = path.join(__dirname, '../../', '/public/avatars')

  await fs.mkdir(path.join(userDir, respons.id))

  res.status(201).json({
    status: 'Registration success',
    code: 201,
    respons,
  })
}
module.exports = register
