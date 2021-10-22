const Post = require("../model/post");
const { Controller } = require("./Controller");

class DreamsController extends Controller {
  namespace = "dreams";

  async createDream(req, res) {
    try {
      const { content } = req.body.data.dreams[0];

      if (!content) {
        res.status(400).send("All input is required");
      }

      const user = await User.findOne({ email: res.locals.user_id });
      const dream = await Post.create({
        content,
        user_id: user._id,
      });

      res.status(201).json(this.response([dream]));
    } catch (err) {
      res.status(400).json(this.error(err));
    }
  }

  async getDreams(req, res) {
    try {
      const dreams = await Post.find();
      res.status(200).json(this.response(dreams));
    } catch (err) {
      res.status(400).json(this.error(err));
    }
  }
}

module.exports = { DreamsController };
