const {
  contact: { Contact },
} = require('../../model')
const { NotFound } = require('http-errors')

const del = async (req, res) => {
  const { contactId } = req.params

  const resultContacs = await Contact.findByIdAndRemove(contactId)

  if (!resultContacs) {
    throw new NotFound()
  }

  res.status(200).json({
    message: 'contact deleted',
    data: {
      result: resultContacs,
    },
  })
}

module.exports = del
