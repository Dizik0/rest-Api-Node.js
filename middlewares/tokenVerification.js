const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
const { User } = require("../model/users");

const tokenVerification = async (req, _, next) => {
  try {
    const { SECRET_KEY } = process.env;

    const [bearer, token] = req.headers.authorization.split(" ");

    if (bearer !== "Bearer") {
      throw new Unauthorized();
    }
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id);

    req.user = user;

    next();
  } catch (error) {
    throw new Unauthorized(error.message);
  }
};

module.exports = tokenVerification;
