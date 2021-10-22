const { Controller } = require("./Controller");
const User = require("../model/user");
const bcrypt = require("bcryptjs");

class UserController extends Controller {
  async getUser(req, res) {
    const jwt = res.locals.jwt;
    const foundUser = await User.findOne({ uuid: jwt.uuid });

    return res.status(200).json(foundUser);
  }

  async updateUser(req, res) {
    const jwt = res.locals.jwt;
    const user = await User.findOne({ uuid: jwt.uuid });

    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = await bcrypt.hash(req.body.password, 10);
      }
    }

    const updatedUser = await user.save();
    return res.json(updatedUser);
  }
}

module.exports = { UserController };
