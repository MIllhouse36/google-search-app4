const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, require: true},
  subtitle: { type: String },
  authors: { type: [String], require: true},
  link: {type: String, require: true}, 
})