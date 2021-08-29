const {
  contactSchema: { joiPutContact, Contact },
} = require("../../valiadation");

const update = async (req, res, next) => {
  const { contactId } = req.params;

  const body = req.body;

  const contacts = await Contact.findByIdAndUpdate(contactId, body);

  try {
    const { error } = joiPutContact.validate(body);

    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    } else if (!contacts) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
