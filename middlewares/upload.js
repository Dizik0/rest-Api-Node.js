const multer = require('multer')
const path = require('path')

const tempDir = path.join(__dirname, '../', 'temp')

const multerConfig = multer.diskStorage({
  destination: (_, __, cd) => {
    cd(null, tempDir)
  },
  filename: (_, file, cd) => {
    cd(null, renameOriginalName(file.originalname))
  },
  limits: {
    fileSize: 1024,
  },
})

const renameOriginalName = (name) => {
  const [_, format] = name.split('.')
  const newName = new Date().getTime()
  return `${newName}.${format}`
}

const upload = multer({
  storage: multerConfig,
})

module.exports = { upload, renameOriginalName }
