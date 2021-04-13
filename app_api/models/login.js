var mongoose = require("mongoose");

var loginschema = new mongoose.Schema({
    login: { type: String, required: true, minlength: 3 },
    password: { type: String, required: true, min: 0, max: 10 }
    
  });
  var loginmodel = mongoose.model("login", loginschema, 'login');

  module.exports = {
    loginmodel
}
