const jwt = require("jsonwebtoken");

const config = process.env;

const AuthMiddleware = (req, res, next) => {
  const token = req.get("Authorization");

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    res.locals.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = { AuthMiddleware };
