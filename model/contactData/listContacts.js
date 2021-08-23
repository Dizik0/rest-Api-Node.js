const fs = require("fs/promises");
const contactsPath = require("./contactsPath");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);

    return JSON.parse(data);
  } catch (error) {
    throw Error(error);
  }
};

module.exports = listContacts;
