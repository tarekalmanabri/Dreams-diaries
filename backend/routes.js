const { AuthController } = require("./controllers/AuthController");
const express = require("express");
const { PostsController } = require("./controllers/PostsController");
const { AuthMiddleware } = require("./middleware/auth");

const createRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send({ status: true });
  });

  app.post("/login", AuthController.logIn);
  app.post("/register", AuthController.register);

  const postsRouter = express.Router();

  postsRouter.use(AuthMiddleware);
  postsRouter.get("/", PostsController.getPosts);
  postsRouter.post("/", PostsController.createPost);

  app.use("/posts", postsRouter);
};

module.exports = { createRoutes };
