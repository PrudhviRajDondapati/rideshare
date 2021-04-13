var mongoose = require('mongoose');
var ridesopted = mongoose.model('ridesopted');


const getridesopted = function (req, res) {
  const uname = localStorage.getItem('username');
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
  const createridesopted = function (req, res) {
    const uname = localStorage.getItem('username');
    ridesopted.create({
      optedby: uname,
      from: req.body.from,
      to: req.body.to,
      date: req.body.date,
      cost: req.body.cost
    }, (err, data) => {
      console.log("data : ", data);
      if(err) {
        res
          .status(400)
          .json(err)
      }else{
        res
          .status(201)
          .json(data)
      }
    })
  };
  const getSingleridesopted = function (req, res) {
    if(!req.params.roptid){
      res
        .status(404)
        .json({
          "message": "Not found, rides opted id is required"
        });
        return;
    }
    ridesopted.findById(req.params.roptid)
      .exec((err, data) => {
        if(!data) {
          res
                  .json(404)
                  .status({
                      "message": "customer data not found"
                  });
        }
      else if(err) {
      res
        .status(400)
        .json(err);
        return;
      }
      else {
      res
        .status(200)
        .json(data)
    }
  });
  };
  const updateridesopted = function (req, res) {
    if (!req.params.roptid){
      res
          .status(404)
          .json({
              "message": "Not found, ride opt ID is required"
          });
  return;
  }
  ridesopted.findById(req.params.roptid)
      .exec((err, data) => {
          if (!data) {
              res
                  .json(404)
                  .status({
                      "message": "customer data not found"
                  });
          }else if (err){
              res
                  .status(400)
                  .json(err);
                  return;
          }
          data.optedby = req.body.optedby;
          data.from = req.body.from;
          data.to = req.body.to;
          data.date = req.body.date;
          data.cost = req.body.cost;
          data.save((err, data) => {
              if (err) {
                  res
                      .status(404)
                      .json(err);
              } else {
                  res
                      .status(200)
                      .json(data)
              }
          });
      });
  };
  const deleteridesopted = function (req, res) {
    const roptid = req.params.roptid;
  
    if (roptid) {
        ridesopted
            .findByIdAndRemove(roptid)
            .exec((err, data) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res 
                    .status(204)
                    .json(null);
            });
    } else {
        res
            .status(404)
            .json({"message" : "No roptid"});
  
    }
  };
  module.exports = {
    getridesopted,
    createridesopted,
    getSingleridesopted,
    updateridesopted,
    deleteridesopted,
  };