const {
  contact: { Contact },
} = require('../../model')

const { NotFound } = require('http-errors')

const getAll = async (req, res) => {
  const contacts = await Contact.find({ owner: req.user._id })

  if (!contacts) {
    throw new NotFound()
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  })
}

module.exports = getAll
