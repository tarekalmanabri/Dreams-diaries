const Dream = require("../model/Dream");
const uuid = require("uuid");
const { Controller } = require("./Controller");

class DreamsController extends Controller {
  namespace = "dreams";

  async createDream(req, res) {
    try {
      const { dreams } = req.body.data;

      if (!dreams) {
        console.log(req.body);
        res.status(400).send("All input is required");
        return;
      }

      const newDream = dreams[0];
      const dream = await Dream.create({
        ...newDream,
        uuid: uuid.v4(),
        user_uuid: res.locals.jwt.uuid,
      });

      return res.status(200).json(this.response([dream]));
    } catch (err) {
      res.status(400).json(this.error(err));
    }
  }

  async getDreams(req, res) {
    try {
      const dreams = await Dream.find({ user_uuid: res.locals.jwt.uuid });
      res.status(200).json(this.response(dreams));
    } catch (err) {
      res.status(400).json(this.error(err));
    }
  }
}

module.exports = { DreamsController };
