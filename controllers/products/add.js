const {
  contacts: { Contact },
} = require("../../model");

const add = async (req, res, next) => {
  try {
    const contacts = await Contact.create(req.body);

    if (!contacts) {
    }

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
