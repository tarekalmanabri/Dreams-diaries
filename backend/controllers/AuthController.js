const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AuthController = {
  async logIn(req, res) {
    try {
      const { email, password } = req.body;

      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const user = await User.find({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ user_id: user._id, email }, "secret", {
          expiresIn: "2h",
        });

        user.token = token;

        res.status(200).json(user);
      }
      res.status(400).send("Invalid credentials");
    } catch (err) {
      console.log(err);
    }
  },

  async register(req, res) {
    try {
      const { email, password, username } = req.body;

      if (!(email && password && username)) {
        res.status(400).send("All input is required");
      }

      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.status(409).send("User already exists. Please login");
      }

      encryptedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        username,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });

      const token = jwt.sign({ user: user.email }, "secret", {
        expiresIn: "2h",
      });
      user.token = token;

      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = { AuthController };
