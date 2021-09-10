const app = require("../app");
const mongoose = require("mongoose")
require("dotenv").config();

const { DB_HOST, PORT = 4000 } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection successful`);
    });
  })
  .catch((error) => {
    console.log(error.message), process.exit(1);
  });
