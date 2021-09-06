const mongoose = require("mongoose");
mongoose.connect(" mongodb://127.0.0.1:27017/ecomm", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => console.log("Error connecting to DB"));
db.once("open", () => console.log("Connected to DB"));

module.exports = db;
