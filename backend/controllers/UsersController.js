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

const UsersController = {
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
