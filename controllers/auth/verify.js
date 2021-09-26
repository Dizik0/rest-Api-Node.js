const { NotFound } = require('http-errors')

const {
  user: { User },
} = require('../../model')

const verify = async (req, res) => {
  const { verificationToken } = req.params

  const user = await User.findOne({
    verifyToken: verificationToken,
  })

  if (!user) {
    throw new NotFound('User not found')
  }
  await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true })
  res.status(200).json({
    code: 200,
    message: 'Verification successful',
  })
}

module.exports = verify
