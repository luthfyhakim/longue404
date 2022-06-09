const User = require('../models/User');
const { verifyToken } = require('../helper/jwt');

const userAuthentication = async (req, res, next) => {
  try {
    const decoded = verifyToken(req.headers.access_token);
    const found = await User.findById(decoded.id).exec();

    if (found) {
      req["loggedUser"] = decoded;
      next();
    } else {
      throw {
        status: 401,
        message: "unauthorized",
      }
    }
  } catch (error) {
    next(error);
  }
}

module.exports = userAuthentication;