const mongoose = require("mongoose");

const Codes = mongoose.Schema(
  {
    Title: String,
    Description: String,
    Code: String,
    Time: String,
    Author: String,
    Type: String,
    Color: String,
    Tags: String,
  },
  { minimize: false, collection: "Codes",usestrict:false }
);

module.exports = mongoose.model("Codes", Codes);