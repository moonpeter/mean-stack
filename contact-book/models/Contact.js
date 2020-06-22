var mongoose = require('mongoose');

var contractSchema = mongoose.Schema({
  name:{type:String, required:true, unique:true},
  email:{type:String},
  phone:{type:String}
});

var Contact = mongoose.model('contact', contractSchema);

module.exports = Contact;
