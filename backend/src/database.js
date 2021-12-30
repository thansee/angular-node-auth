const mongoose = require("mongoose");

const dbConfig = require("./config/db.config.js");

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed...");
      console.error(error);
      process.exit(1);
    });
};