const jwt = require("jsonwebtoken");
const User = require('../models/user');

class Login {
  TOKEN_SECRET = "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

  generateAccessToken = (username) => {
    return jwt.sign({ username }, TOKEN_SECRET);
  };

  login = async (req, res) => {
    try {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
      const { user, password } = req.query;
      if (user == '1' && password == '1')
        return res.json({ kind: 'admin' });
      var query = { email: user, password };
      let result
      result = await User.findOne(query)
      if (result) {
        return res.json({ kind: 'shop', result });
      }

    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}



module.exports = new Login();