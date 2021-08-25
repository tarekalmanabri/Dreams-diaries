const Post = require("../model/post");
const { Controller } = require("./Controller");

class PostsController extends Controller {
  static async createPost(req, res) {
    console.log(req);
    try {
      const { content } = req.body.data.posts[0];

      if (!content) {
        res.status(400).send("All input is required");
      }

      const post = await Post.create({
        content,
        user_id: res.locals.user.user_id,
      });

      res.status(201).json(post);
      console.log(post);
    } catch (err) {
      console.log(err);
    }
  }

  static async getPosts(req, res) {
    const { content } = req.body.data.posts[0];

    try {
      const post = await Post.findOne({ content });
      res.status(200).json(post);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}

module.exports = { PostsController };
