const express = require("express");
const appHTML = express();
const path = require("path");


appHTML.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

appHTML.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = appHTML;