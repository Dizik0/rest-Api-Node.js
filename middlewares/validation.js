const { BadRequest } = require("http-errors");

const validation = (schema) => {
  return (req, _, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      throw new BadRequest();
    }

    next();
  };
};

module.exports = validation;
