const app = require("../app");

const { PORT = 4000 } = process.env;

const DB_HOST =
  "mongodb+srv://Dizik-homework:Cf5caGHfxKfRDpJQ@cluster0.cgpue.mongodb.net/db-contacts?retryWrites=true&w=majority";

const mongoose = require("mongoose");

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
