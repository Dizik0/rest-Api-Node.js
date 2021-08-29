const {
  contactSchema: { Contact },
} = require("../../valiadation");

const getAll = async (req, res, next) => {
  try {
    const contacts = await Contact.find();

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

module.exports = getAll;
