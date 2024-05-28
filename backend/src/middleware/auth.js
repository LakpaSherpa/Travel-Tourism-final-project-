const jwt = require("jsonwebtoken");
const config = require("../config/keys");

const secretKey = config.jwt.secret;

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    const error = new Error("Bearer token is not set!");
    error.status = 401;
    return next(error);
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, secretKey);
    console.log(decodedToken, "dectok")
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send("Invalid Token");
  }
};

module.exports = verifyToken;
