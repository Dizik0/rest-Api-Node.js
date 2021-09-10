const { Schema, model } = require("mongoose");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

const joiRegSchema = Joi.object({
  email: Joi.string().required("Email is required"),
  password: Joi.string().required("Password is required"),
});

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    // owner: {
    //   type: SchemaTypes.ObjectId,
    //   ref: "user",
    // },
  },
  { versionKey: false, timestamps: true }
);

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.verifPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model("user", userSchema);

module.exports = { User, joiRegSchema };