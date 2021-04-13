var mongoose = require("mongoose");

var ridesoptedschema = new mongoose.Schema({
    optedby: { type: String, required: true, minlength: 3 },
    from: { type: String, required: true, minlength: 1 },
    to: { type: String, required: true, minlength: 2 },
    date: { type: String, required: true, min: 0, max: 10 },
    cost: {type: Number, required: true, minlength: 3}
  });
  var ridesoptedmodel = mongoose.model("ridesopted", ridesoptedschema, 'ridesopted');

  module.exports = {
    ridesoptedmodel
}