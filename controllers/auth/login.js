const { BadRequest } = require("http-errors");
const jwt = require('jsonwebtoken');

const {
  users: { User },
} = require("../../model");

const login = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.verifPassword(password)) {
    throw new BadRequest("Wrong email or password");
  }

  const payload = {
    id: user._id
  }

  const { SECRET_KEY} = process.env;

  const token = jwt.sign(payload, SECRET_KEY)

  res.json({
    token,
  });
};

module.exports = login;
