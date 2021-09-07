const { Conflict } = require("http-errors");

const {
  users: { User },
} = require("../../model");

const register = async (req, res) => {
  const { password, email } = req.body;
  const respons = await User.findOne({ email });
  if (respons) {
    throw new Conflict("Already register");
  }

  await User.create({ password, email });

  res.status(201).json({
    status: "Registration success",
    code: 201,
  });
};
module.exports = register;
