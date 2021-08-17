const fetch = require("node-fetch");
const api_key = process.env.API_KEY;

const CompanyController = {
  async getCompanies(req, res) {
    const companies = await fetch(
      `https://www.themuse.com/api/public/companies?page=1&api_key=${api_key}`
    );
    const json = await companies.json();

    res.json(json);
  },
};

module.exports = { CompanyController };
