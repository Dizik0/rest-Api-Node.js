const { NotFound } = require('http-errors')

const {
  contact: { Contact },
} = require('../../model')

const getAll = async (req, res) => {
  const { page = 1, limit = 2, favorite } = req.query

  const skip = (page - 1) * limit

  if (favorite === 'true') {
    const favoriteContacts = await Contact.find(
      { favorite },
      'name email phone favorite',
      {
        skip,
        limit: +limit,
      }
    )

    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result: favoriteContacts,
      },
    })
    return
  }

  const contacts = await Contact.find({}, 'name email phone favorite', {
    skip,
    limit: +limit,
  })

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
