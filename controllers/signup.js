
const jwt = require("jsonwebtoken");
const User = require('../models/user');

class Signup {
  signup = async (req, res) => {
    try {
      const {name, id, email, password} = req.body; //Adress, phone ....
      //Validations.
      //Check if user exists

      var myobj = new User({ name, id, email, password });
      await myobj.save();
      console.log("1 document inserted");

      // const token = generateAccessToken(user);
      // console.log("token", token);
      return res.send();

    } catch (error) {
      res.status(500).send(error)
    }
  }
}

module.exports = new Signup();