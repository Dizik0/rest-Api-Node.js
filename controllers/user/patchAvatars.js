const fs = require('fs')
const path = require('path')

const userDir = path.join(__dirname, '../../', '/public/avatars')

const patchAvatars = async (req, res) => {
  await fs.mkdir(path.join(userDir))
}

module.exports = patchAvatars
