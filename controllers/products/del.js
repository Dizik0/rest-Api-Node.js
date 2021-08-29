const {
  contactSchema: { Contact },
} = require("../../valiadation");

const del = async (req, res, next) => {
  const { contactId } = req.params;

  const resultContacs = await Contact.findById(contactId);

  try {
    if (!resultContacs) {
      return res.status(404).json({ message: "Not found", code: "404" });
    }

    await Contact.findByIdAndRemove(contactId);

    res.status(200).json({
      message: "contact deleted",
      data: {
        result: resultContacs,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = del;
