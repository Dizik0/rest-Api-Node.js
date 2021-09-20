const fs = require('fs/promises')
const path = require('path')
const { Unauthorized } = require('http-errors')
const Jimp = require('jimp')

const userDir = path.join(__dirname, '../../', '/public/avatars')
const {
  user: { User },
} = require('../../model')

const patchAvatars = async (req, res) => {
  const { path: tempFile, filename } = req.file
  const { id } = req.user

  const uploadPath = path.join(userDir, id.toString(), filename)
  const avatarURL = `/public/avatars/${id.toString()}/${filename}`

  const avatarFile = path.join(userDir, id.toString())
  try {
    const file = await Jimp.read(tempFile)

    await file.resize(250, 250).write(tempFile)
  } catch (error) {
    throw new Error(error.message)
  }

  try {
    const files = await fs.readdir(avatarFile)

    await fs.rename(tempFile, uploadPath)

    await fs.unlink(path.join(avatarFile, `${files[0]}`))

    await User.findByIdAndUpdate(id, { avatarURL: avatarURL })

    res.status(201).json({
      code: 201,
      message: 'success',
      avatarURL,
    })
  } catch (error) {
    await fs.unlink(tempName)
    throw new Unauthorized()
  }
}

module.exports = patchAvatars
