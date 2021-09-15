const { Conflict } = require("http-errors");

const {
  user: { User },
} = require("../../model");

const register = async (req, res) => {
  const { password, email } = req.body;
  const respons = await User.findOne({ email });

  if (respons) {
    throw new Conflict("Already register");
  }

  const newUser = new User({ email });

  newUser.setPassword(password);

  await newUser.save();

  res.status(201).json({
    status: "Registration success",
    code: 201,
  });
};
module.exports = register;
