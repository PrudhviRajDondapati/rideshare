var mongoose = require("mongoose");

var newuserschema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    username: { type: String, required: true, minlength: 1 },
    email: { type: String, required: true, minlength: 2 },
    password: { type: String, required: true, min: 0, max: 10 }
    
  });
  var usercreatemodel = mongoose.model("newuser", newuserschema, 'login');

  module.exports = {
    usercreatemodel
}
