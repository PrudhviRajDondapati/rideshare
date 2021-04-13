var express = require("express");
var router = express.Router();


var ctrlropt = require("../controllers/ridesopted");
var ctrlrpost = require("../controllers/ridesposted");
var ctrluser = require("../controllers/user");
var ctrllogin = require("../controllers/login");

//ride opt
router.get("/ropt", ctrlropt.getridesopted);
router.post("/ropt", ctrlropt.createridesopted);
router.get("/ropt/:roptid", ctrlropt.getSingleridesopted);
router.put("/ropt/:roptid", ctrlropt.updateridesopted);
router.delete("/ropt/:roptid", ctrlropt.deleteridesopted);

//ride post
router.get("/rpost", ctrlrpost.getridesposted);
router.post("/rpost", ctrlrpost.createridesposted);
router.get("/rpost/:rpostid", ctrlrpost.getSingleridesposted);
router.put("/rpost/:rpostid", ctrlrpost.updateridesposted);
router.delete("/rpost/:rpostid", ctrlrpost.deleteridesposted);

// new user
router.get("/nuser", ctrluser.getusers);
router.post("/nuser", ctrluser.createuser);

//login
router.post("/login",ctrllogin.getusers);


module.exports = router;