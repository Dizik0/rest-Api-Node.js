const {
  contact: { Contact },
} = require('../../model')

const add = async (req, res) => {
  const contact = { ...req.body, owner: req.user._id }

  const contacts = await Contact.create(contact)

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: contacts,
    },
  })
}

module.exports = add
