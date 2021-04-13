var mongoose = require("mongoose");

var ridespostedschema = new mongoose.Schema({
    postedby: { type: String, required: true, minlength: 3 },
    from: { type: String, required: true, minlength: 1 },
    to: { type: String, required: true, minlength: 2 },
    date: { type: String, required: true, min: 0, max: 10 },
    cost: {type: Number, required: true, minlength: 3},
    vacancy: {type:Number, required: true, minlength:1}
  });
  var ridespostedmodel = mongoose.model("ridesposted", ridespostedschema, 'ridesposted');

  module.exports = {
    ridespostedmodel
}
