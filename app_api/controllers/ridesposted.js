var mongoose = require('mongoose');
var ridesposted = mongoose.model('ridesposted');


const getridesposted = function (req, res) {
    ridesposted.find().exec(function (err, data){
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
  const createridesposted = function (req, res) {
    console.log("In Createrides");
    const uname = localStorage.getItem('username');
    console.log(uname);
    ridesposted.create({
      postedby: uname,
      from: req.body.from,
      to: req.body.to,
      date: req.body.date,
      cost: req.body.cost,
      vacancy: req.body.vacancy
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
  const getSingleridesposted = function (req, res) {
    if(!req.params.rpostid){
      res
        .status(404)
        .json({
          "message": "Not found, rides posted id is required"
        });
        return;
    }
    ridesposted.findById(req.params.rpostid)
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
  const updateridesposted = function (req, res) {
    if (!req.params.rpostid){
      res
          .status(404)
          .json({
              "message": "Not found, ride post ID is required"
          });
  return;
  }
  ridesposted.findById(req.params.rpostid)
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
          data.postedby = req.body.postedby;
          data.from = req.body.from;
          data.to = req.body.to;
          data.date = req.body.date;
          data.cost = req.body.cost;
          data.vacancy = req.body.vacancy - 1;
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
  const deleteridesposted = function (req, res) {
    const roptid = req.params.rpostid;
  
    if (rpostid) {
        ridesposted
            .findByIdAndRemove(rpostid)
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
    getridesposted,
    createridesposted,
    getSingleridesposted,
    updateridesposted,
    deleteridesposted,
  };