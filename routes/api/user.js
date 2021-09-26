const express = require('express')
const router = express.Router()

const {
  controllerWrapper,
  tokenVerification,
  upload,
} = require('../../middlewares')
const { user: ctrl } = require('../../controllers')

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

router.get('/verify/:verificationToken', controllerWrapper(ctrl.verify))

router.get('/verify', controllerWrapper(ctrl.resendEmail))

module.exports = router
