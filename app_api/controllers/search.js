var mongoose = require('mongoose');
var ridesopted = mongoose.model('ridesopted');

const getsearchres = function (req, res) {
    const uname = localStorage.getItem('username');
    console.log("In Get searches");
    console.log(uname);
      ridesopted.find({optedby:uname}).exec(function (err, data){
        if(err){
          res
              .status(404)
              .json(err)
            return;
        }
        res
          .status(200)
          .json(data)
      });
    };

    const savedata = function (req, res) {  
        console.log("In savedata");
        console.log(req.body);
        // console.log(req.body.login);
        var from = req.body.from;
        var to = req.body.to;
        var date = req.body.date
        console.log(from);
        console.log(to);
        console.log(date);
      //   if (typeof localStorage === "undefined" || localStorage === null) {
      //     var LocalStorage = require('node-localstorage').LocalStorage;
      //     localStorage = new LocalStorage('./scratch');
      //  }
      //   localStorage.setItem('from', from);

        res.status(201);

    
    
    }  

    module.exports = {
        savedata,
        getsearchres,

    };
    
