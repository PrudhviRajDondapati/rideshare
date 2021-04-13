var mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;
const newuser = mongoose.model('newuser');
const bcrypt = require("bcrypt");
   
const getusers = function (req, res, next) {
   
    console.log("In getusers");
    console.log(req.body);
    // console.log(req.body.login);
    var username = req.body.login;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    // let loguser= newuser.findOne({"username" : username });

    // if (isUservalid(loguser ,password, loguser.password)){
    //     res.json(loguser);

    // }else {
    //     res.json(err);
    // }
    newuser.findOne({"username": username }, (err,user) => {
        console.log("infindone");
        console.log(user.username);
        console.log(user.password);
        if (user ==  null){
            res.json(err);
        }else{
            if (password == user.password) {
                console.log("Inuservalid");
                if (typeof localStorage === "undefined" || localStorage === null) {
                    var LocalStorage = require('node-localstorage').LocalStorage;
                    localStorage = new LocalStorage('./scratch');
                 }
                 
                 localStorage.setItem('username', user.username);
                 console.log(localStorage.getItem('username'));
                // localStorage.setItem('username', user.username);
                res.json(user);

        }
        else{
            console.log("pass error");
            res
            .status(400)
            .json(err);
        }
    }
}) 
    //     if(err){
    //         deferred.reject(err.name + ": " + err.message);
    //     } 
    //     if(err) res.status(404).json(err);
    //     console.log(user.username);
    //     console.log(user.password);
    // });
    //    if(err) throw err;
    
    //     console.log("Database connected");
}




        

module.exports = {
    getusers,
};
