const { NotFound } = require('http-errors')

const {
  contact: { Contact },
} = require('../../model')

const getById = async (req, res) => {
  const { contactId } = req.params

  const contacts = await Contact.findById(contactId)

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

module.exports = getById
