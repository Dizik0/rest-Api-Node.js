const { Conflict } = require('http-errors')
const fs = require('fs/promises')
const path = require('path')
const gravatar = require('gravatar')

const {
  user: { User },
} = require('../../model')
const sendMessageVerify = require('../../utils')

const register = async (req, res) => {
  const { password, email } = req.body

  const user = await User.findOne({ email })

  if (user) {
    throw new Conflict('Already register')
  }

  const avatarURL = gravatar.url(email, { protocol: 'https', s: '200' })

  const newUser = new User({ email, avatarURL })

  newUser.setPassword(password)
  newUser.setVerifyToken()

  const userDir = path.join(__dirname, '../../', '/public/avatars')

  sendMessageVerify({
    from: 'dizik-@ukr.net',
    subject: 'verification email',
    html: `<a href='http://localhost:4000/api/users/verify/${newUser.verifyToken}'>please confirm account verification</a>`,
  })

  const respons = await newUser.save()

  await fs.mkdir(path.join(userDir, respons.id))

  res.status(200).json({
    status: 'success',
    code: 200,
    message: `Please confirm email`,
  })
}
module.exports = register
