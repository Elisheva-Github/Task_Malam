const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const LoginController = require("../controllers/login")
const SignupController = require("../controllers/signup")
const ProductController = require("../controllers/Products")


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Task";

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (username) => {
  return jwt.sign({ username }, TOKEN_SECRET);
};



router.get('/Task', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.error(err)
      return res.status(500).send(err);
    }
    else {
      console.log("Database created!");
      db.close();
      return res.send(err);
    }
    res.send();
  });
})






router.get("/login", LoginController.login);
router.post("/signup", SignupController.signup);
router.post("/postProduct", ProductController.postProduct);
router.post("/allProduct", ProductController.allProducts);

router.get("/");
module.exports = router;
