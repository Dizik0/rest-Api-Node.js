const addContact = require("./addContact");
const contactsPath = require("./contactsPath");
const getContactById = require("./getContactById");
const listContacts = require("./listContacts");
const removeContact = require("./removeContact");
const updateContact = require("./updateContact");
const updateFile = require("./updateFile");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  contactsPath,
  updateFile,
  updateContact,
};
