var mongoose = require('mongoose');
var newuser = mongoose.model('newuser');
var login = mongoose.model('login');


const getusers = function (req, res, next) {
  const user = req.body;
  console.log(user);

  const saveduser = loginuser( user.login, user.password);
  res.json(saveduser);
  // var username = req.fields.login;
  // var password = req.fields.password;

  // database.collection("login").findOne({"username": username}, function(error, user){
  //     if(user == null){
  //         result.json({
  //             "status": "error",
  //             "message": "User not found."
  //         });
  //     }
  //     else{
  //         if(password==user.password){
  //             var accessToken = jwt.sign({username:username}, secretToken);
  //             database.collection("users").findOneAndUpdate(
  //                 {"username":username}, {
  //                 $set:{
  //                     "accessToken": accessToken
  //                 }
  //             },function(error, data){
  //                 result.json({
  //                     "status": "success",
  //                     "message": "Login successful.",
  //                     "accessToken": accessToken
  //                 });
  //             });
  //         }
  //         else{
  //             result.json({
  //                 "status": "error",
  //                 "message": "Incorrect password."
  //             })
  //         }
  //     }
  // })

  };

  const loginuser = function (username, password) {
    const user =  database.collection("login").findOne({"username": username});

    if (isuservalid(username, password, user.password)){
      user = login.toObject();
      return user;
    }
    else{
      return null;
    }

  };

  function isuservalid(username, password, passworddb){
    return username && bcrypt.compareSync(password, passworddb);

  };
  const createuser = function (req, res) {
    
    newuser.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password      
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
//   const getSingleridesposted = function (req, res) {
//     if(!req.params.rpostid){
//       res
//         .status(404)
//         .json({
//           "message": "Not found, rides posted id is required"
//         });
//         return;
//     }
//     ridesposted.findById(req.params.rpostid)
//       .exec((err, data) => {
//         if(!data) {
//           res
//                   .json(404)
//                   .status({
//                       "message": "customer data not found"
//                   });
//         }
//       else if(err) {
//       res
//         .status(400)
//         .json(err);
//         return;
//       }
//       else {
//       res
//         .status(200)
//         .json(data)
//     }
//   });
//   };
//   const updateridesposted = function (req, res) {
//     if (!req.params.rpostid){
//       res
//           .status(404)
//           .json({
//               "message": "Not found, ride post ID is required"
//           });
//   return;
//   }
//   ridesposted.findById(req.params.rpostid)
//       .exec((err, data) => {
//           if (!data) {
//               res
//                   .json(404)
//                   .status({
//                       "message": "customer data not found"
//                   });
//           }else if (err){
//               res
//                   .status(400)
//                   .json(err);
//                   return;
//           }
//           data.postedby = req.body.postedby;
//           data.from = req.body.from;
//           data.to = req.body.to;
//           data.date = req.body.date;
//           data.cost = req.body.cost;
//           data.vacancy = req.body.vacancy;
//           data.save((err, data) => {
//               if (err) {
//                   res
//                       .status(404)
//                       .json(err);
//               } else {
//                   res
//                       .status(200)
//                       .json(data)
//               }
//           });
//       });
//   };
//   const deleteridesposted = function (req, res) {
//     const roptid = req.params.rpostid;
  
//     if (rpostid) {
//         ridesposted
//             .findByIdAndRemove(rpostid)
//             .exec((err, data) => {
//                 if (err) {
//                     res
//                         .status(404)
//                         .json(err);
//                     return;
//                 }
//                 res 
//                     .status(204)
//                     .json(null);
//             });
//     } else {
//         res
//             .status(404)
//             .json({"message" : "No roptid"});
  
//     }
//   };
  module.exports = {
    getusers,
    createuser,
    // getSingleridesposted,
    // updateridesposted,
    // deleteridesposted,
  };