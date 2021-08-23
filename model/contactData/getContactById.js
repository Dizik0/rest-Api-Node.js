const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  try {
    const contact = await listContacts();
    const filterId = contact.find(({ id }) => id === contactId);
    if (!filterId) {
      return null;
    }
    return filterId;
  } catch (error) {
    throw error;
  }
};

module.exports = getContactById;
