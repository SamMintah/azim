const { sign, verify, decode } = require("jsonwebtoken");

const createToken = (user) => {
  const accessToken = sign({ id: user }, process.env.JWT_SECRET);
  return accessToken;
};

const verifyToken = (req, res, next) => {
  const rawBearer = req.headers.authorization;
  const bearerArray = rawBearer.split(" ");

  const accessToken = bearerArray[1];
  try {
    if (!accessToken) return res.status(401).json({ message: "Unauthorized" });
    const valid = verify(accessToken, process.env.JWT_SECRET);
    if (!valid) res.status(401).json({ message: "Invalid access token " });
    if (valid) {
      req.userId = valid.id;
      req.authenticated = true;
      return next();
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createToken,
  verifyToken,
};
