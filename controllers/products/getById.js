const {
  contactSchema: { Contact },
} = require("../../valiadation");

const getById = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const contacts = await Contact.findById(contactId);

    if (!contacts) {
      return res.status(404).json({ message: "Not found" });
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

module.exports = getById;
