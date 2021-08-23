const fs = require("fs/promises");

const contactsPath = require("./contactsPath");

const updateFile = async (args) => {
  const toStringContact = JSON.stringify(args);
  await fs.writeFile(contactsPath, toStringContact);
};

module.exports = updateFile;
