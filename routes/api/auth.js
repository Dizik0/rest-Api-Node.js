const express = require('express')

const router = express.Router()

const {
  validation,
  controllerWrapper,
  tokenVerification,
} = require('../../middlewares')

const { user: model } = require('../../model')
const { auth: ctrl } = require('../../controllers')

console.log(ctrl.verify)

router.post(
  '/register',
  validation(model.joiRegSchema),
  controllerWrapper(ctrl.register)
)

router.post(
  '/login',
  validation(model.joiRegSchema),
  controllerWrapper(ctrl.login)
)

router.get(
  '/logout',
  controllerWrapper(tokenVerification),
  controllerWrapper(ctrl.logout)
)

router.get('/verify/:verificationToken', controllerWrapper(ctrl.verify))

router.post('/verify', controllerWrapper(ctrl.resendEmail))

module.exports = router
