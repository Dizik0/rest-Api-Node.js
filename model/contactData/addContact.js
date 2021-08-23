const { v4 } = require("uuid");
const listContacts = require("./listContacts");
const updateFile = require("./updateFile");

const addContact = async ({ name, email, phone }) => {
  try {
    const contacts = await listContacts();
    if (name || email || phone) {
      const newContact = { id: v4(), name, email, phone };

      contacts.push(newContact);
      await updateFile(contacts);
      return newContact;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

module.exports = addContact;
