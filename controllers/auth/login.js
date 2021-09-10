const { BadRequest } = require("http-errors");

const {
  users: { User },
} = require("../../model");

const login = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.verifPassword(password)) {
    throw new BadRequest("Wrong email or password");
  }

  const token =
    "dfgdfgdfgdfgdfgdfgdg.dfgdfgdfgdfgdfgdfgdfg.dfgdfgdfgdfgdfgdgdfdfg";

  res.json({
    token,
  });
};

module.exports = login;
