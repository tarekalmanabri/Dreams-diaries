const { Controller } = require("./Controller");
const User = require("../model/user");

class UserController extends Controller {
  async getUser(req, res) {
    const user = res.locals.user;
    const userData = await User.findOne({ email: user.email });

    return res.status(200).json(userData);
  }
}

module.exports = { UserController };
