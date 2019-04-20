const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  // document structure & rules defined here
  brand: {type: String, require: true},
  model: {type: String, require: true},
  price: {type: Number, require: true},
  image: {type: String, require: true},
  specs: [
    {type: String, minlength: 3}
  ],
},
{
  // additional settings for the Schema class
  timestamps: true
}
);
//const Phone = mongoose.model("Phone", phoneSchema);
//module.exports = Phone
//cleaner code below
module.exports = mongoose.model("Phone", phoneSchema);
