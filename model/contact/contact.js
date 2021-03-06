const Joi = require('joi')
const { Schema, model, SchemaTypes } = require('mongoose')

const joiPostContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().default(false),
})

const joiPutContact = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
})

const joiPatchContact = Joi.object({
  favorite: Joi.boolean().required(),
})

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'users',
    },
  },
  { versionKey: false, timestamps: true }
)

const Contact = model('contact', contactSchema)

module.exports = { joiPatchContact, joiPostContact, Contact, joiPutContact }
