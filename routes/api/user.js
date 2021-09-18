const express = require('express')

const router = express.Router()

const {
  // validation,
  controllerWrapper,
  // tokenVerification,
  upload,
} = require('../../middlewares')

// const { user: model } = require('../../model')
// const { auth: ctrl } = require('../../controllers')

const { user: ctrl } = require('../../controllers')

router.patch(
  '/avatars',
  upload.single('image'),
  // controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.patchAvatars)
)

module.exports = router
