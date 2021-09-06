const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/configFile");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", require("./routes"));
app.listen(7000, (err, res) => {
  if (err) console.log(err);
  else console.log("Server is Working!!");
});
