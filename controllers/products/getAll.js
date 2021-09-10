const {
  contacts: { Contact },
} = require("../../model");
const { NotFound } = require("http-errors");

const getAll = async (_, res) => {
  const contacts = await Contact.find({});

  if (!contacts) {
    throw new NotFound();
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
