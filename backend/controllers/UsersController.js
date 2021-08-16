const fetch = require("node-fetch");
const userModel = require("../models");

const api_key = process.env.API_KEY;

const UsersController = {
  async getCompany(req, res) {
    const companies = await fetch(
      `https://www.themuse.com/api/public/companies?page=1&api_key=${api_key}`
    );
    const json = await companies.json();

    res.json(json);
  },

  async getUsers(request, response) {
    const users = await userModel.find({});

    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  },

  async postUsers(request, response) {
    const user = new userModel(request.body);

    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
  },
};

module.exports = { UsersController };
