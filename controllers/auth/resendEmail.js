const { BadRequest } = require('http-errors')

const {
  user: { User },
} = require('../../model')
const sendMessageVerify = require('../../utils')

const resendEmail = async (req, res) => {
  const { email } = req.body
  if (!email) {
    throw new BadRequest('missing required field email')
  }
  const user = await User.findOne({ email })

  if (!user) {
    throw new BadRequest('missing required field email')
  }

  if (user.verify) {
    throw new BadRequest('Verification has already been passed')
  }
  await sendMessageVerify({
    from: 'dizik-@ukr.net',
    subject: 'verification email',
    html: `<a href='http://localhost:4000/api/auth/verify/${user.verifyToken}'>please confirm account verification</a>`,
  })
  res.status(200).json({
    code: 200,
    message: 'Verification email sent',
  })
}

module.exports = resendEmail
