const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const friends = require("./data/friends")
const apiRoutes = require("./routing/apiRoutes");
const htmlRoutes = require("./routing/htmlRoutes");

app.use('/', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});