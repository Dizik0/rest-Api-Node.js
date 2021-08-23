const { addContact } = require("../../model/contactData");
const {
  contactSchema: { joiPostContact },
} = require("../../valiadation");

const add = async (req, res) => {
  try {
    const { error } = joiPostContact.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
    const contacts = await addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    res
      .status(404)
      .json({ message: "missing required name field", error: error.message });
  }
};

module.exports = add;
