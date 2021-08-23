const listContacts = require("./listContacts");
const updateFile = require("./updateFile");

const removeContact = async (contactId) => {
  try {
    const contact = await listContacts();
    const index = contact.findIndex(({ id }) => id === contactId);

    if (index === -1) {
      return null;
    }

    const filterContact = contact.filter(({ id }) => id !== contactId);
    await updateFile(filterContact);
    return contact[index];
  } catch (error) {
    throw error;
  }
};

module.exports = removeContact;
