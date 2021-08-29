const {
  contactSchema: { joiPatchContact, Contact },
} = require("../../valiadation");

const favorite = async (req, res, next) => {
  const { contactId } = req.params;

  const body = req.body;

  const contacts = await Contact.findByIdAndUpdate(contactId, body);

  try {
    const { error } = joiPatchContact.validate(body);

    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    } else if (!contacts) {
      return res.status(404).json({
        message: "missing field favorite",
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

module.exports = favorite;
