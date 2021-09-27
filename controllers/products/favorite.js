const {
  contact: { Contact },
} = require('../../model')

const favorite = async (req, res) => {
  const { contactId } = req.params

  const contacts = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  })

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  })
}

module.exports = favorite
