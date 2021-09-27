const express = require('express')
const router = express.Router()

const {
  controllerWrapper,
  tokenVerification,
  upload,
} = require('../../middlewares')
const { user: ctrl } = require('../../controllers')

router.patch(
  '/',
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.subscription)
)

router.patch(
  '/avatars',
  upload.single('image'),
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.patchAvatars)
)

router.get(
  '/current',
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.current)
)

module.exports = router
