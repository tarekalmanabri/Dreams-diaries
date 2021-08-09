const fetch = require("node-fetch");

const users = [
  {
    id: 1,
    name: "Tarek",
  },
  {
    id: 2,
    name: "Edie",
  },
];

const api_key = process.env.API_KEY;

const UsersController = {
  async getCompany(req, res) {
    console.log(api_key);
    const companies = await fetch(
      `https://www.themuse.com/api/public/companies?page=1&api_key=${api_key}`
    );
    const json = await companies.json();

    res.json(json);
  },

  getUsers(req, res) {
    res.json(users);
  },

  postUsers(req, res) {
    const user = req.body;
    users.push(req.body);
    res.json(users);
  },
};

module.exports = { UsersController };
