const {
  contacts: { Contact },
} = require("../../model");

const del = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const resultContacs = await Contact.findByIdAndRemove(contactId);

    if (!resultContacs) {
      return res.status(404).json({ message: "Not found", code: "404" });
    }

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
