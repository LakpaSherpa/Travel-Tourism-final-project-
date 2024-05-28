const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");
const User = require("../models/user");

const rbacMiddleware = (roles = []) => {
  return async (req, res, next) => {
    try {
      const token = extractTokenFromHeader(req.headers.authorization);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);

      if (!roles.includes(user.role)) {
        return res.status(httpStatus.FORBIDDEN).json({ message: "Forbidden" });
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid token" });
    }
  };
};

const extractTokenFromHeader = (authorizationHeader) => {
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    throw new Error("Unauthorized");
  }

  return authorizationHeader.split(" ")[1];
};

module.exports = rbacMiddleware;
