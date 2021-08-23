const removeContact = require("./removeContact");
const updateFile = require("./updateFile");
const getContactById = require("./getContactById");
const listContacts = require("./listContacts");

const updateContact = async (contactId, body) => {
  try {
    const contact = await getContactById(Number(contactId));
    if (!contact) {
      return null;
    }

    const newContact = { ...contact, ...body, id: Number(contactId) };
    await removeContact(Number(contactId));
    const allContact = await listContacts();
    allContact.push(newContact);
    await updateFile(allContact);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = updateContact;
