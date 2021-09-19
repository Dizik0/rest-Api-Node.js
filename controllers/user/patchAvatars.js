const fs = require('fs/promises')
const path = require('path')

const userDir = path.join(__dirname, '../../', '/public/avatars')
const {
  user: { User },
} = require('../../model')
const { renameOriginalName } = require('../../middlewares')

const patchAvatars = async (req, res) => {
  const { path: tempName, filename } = req.file

  const newName = renameOriginalName(filename)

  const { id } = req.user

  const uploadPath = path.join(userDir, id.toString(), newName)

  const avatarFile = path.join(userDir, id.toString())

  try {
    const files = await fs.readdir(avatarFile)

    await fs.rename(tempName, uploadPath)

    await fs.unlink(path.join(avatarFile, `${files[0]}`))

    await User.findByIdAndUpdate(id, { avatarURL: uploadPath })

    res.status(201).json({
      code: 201,
      message: 'success',
    })
  } catch (error) {
    console.log(error)
    await fs.unlink(tempName)
  }
}

module.exports = patchAvatars
