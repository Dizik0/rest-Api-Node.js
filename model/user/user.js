const { Schema, model } = require('mongoose')
const Joi = require('joi')
const bcrypt = require('bcryptjs')
const { v4 } = require('uuid')

const joiRegSchema = Joi.object({
  email: Joi.string().required('Email is required'),
  password: Joi.string().required('Password is required'),
})

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      default: '',
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },

  { versionKey: false, timestamps: true }
)

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.verifPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.methods.setVerifyToken = function () {
  return (this.verifyToken = v4())
}

const User = model('user', userSchema)

module.exports = { User, joiRegSchema }
