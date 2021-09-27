const { NotFound } = require('http-errors')

const {
  user: { User },
} = require('../../model')

const patchSubscription = async (req, res) => {
  const { _id } = req.user

  const { subscription } = req.body

  const allSubscription = ['starter', 'pro', 'business']

  const verifySubscription = allSubscription.includes(subscription)

  if (!verifySubscription) {
    throw new NotFound('no such subscription exists ')
  }

  const refreshSubscription = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  )
  res.status(200).json({
    code: 200,
    message: 'success',
    response: refreshSubscription,
  })
}

module.exports = patchSubscription
