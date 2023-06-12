const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");

const authMiddleware = async (req, res, next) => {
  const token = req.cookie["auth"];

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET);
      res.locals.user = decodedToken;
      res.locals.isAuthenticated = true;

      req.user = user;

      next();
    } catch (error) {
      res.clearCookie("auth");

      return res.redirect("/users/login");
    }
  } else {
    next();
  }
};

module.exports = authMiddleware;
