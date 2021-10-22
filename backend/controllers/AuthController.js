const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Controller } = require("./Controller");
const uuid = require("uuid");

class AuthController extends Controller {
  static async logIn(req, res) {
    try {
      const { email, password } = req.body;

      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const user = await User.findOne({ email: email.toLowerCase() });

      if (
        user &&
        user.password &&
        (await bcrypt.compare(password, user.password))
      ) {
        const token = jwt.sign({ uuid: user.uuid }, process.env.TOKEN_KEY, {
          expiresIn: "24h",
        });

        user.token = token;

        return res.status(200).json(user);
      }
      res.status(400).send("Invalid credentials");
    } catch (err) {
      console.log(err);
    }
  }

  static async register(req, res) {
    try {
      const { email, password, username } = req.body;

      if (!(email && password && username)) {
        return res.status(400).send("All input is required");
      }

      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.status(409).send("User already exists. Please login");
      }

      const encryptedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        uuid: uuid.v4(),
        username,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      const token = jwt.sign({ uuid: user.uuid }, process.env.TOKEN_KEY, {
        expiresIn: "24h",
      });
      user.token = token;

      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = { AuthController };
