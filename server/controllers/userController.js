const User = require('../models/User');
const { comparePassword } = require('../helper/hash');
const { generateToken } = require('../helper/jwt');

class UserController {
  static async register(req, res, next) {
    try {
      const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        gender: req.body.gender,
      });

      return res
        .status(201)
        .json({
          data: newUser,
          status: "Success",
          message: "Succesfully create user",
        });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const foundUser = await User.findOne({ email: req.body.email }).exec();

      if (foundUser && comparePassword(req.body.password, foundUser.password)) {
        const payload = {
          id: foundUser._id,
          email: foundUser.email,
          username: foundUser.username,
        }

        const access_token = generateToken(payload);

        return res.status(200).json({
          data: access_token,
          status: "Success",
          message: "Succesfully login",
        })
      }else {
        throw {
          status: 400,
          message: "Invalid username or password",
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async findAllUsers(req, res, next) {
    try {
      const users = await User.find({});

      return res.status(200).json({
        data: users,
        status: "Success",
        message: "Succesfully find all users",
      });
    } catch (error) {
      next(error);
    }
  }

  static async findUserById(req, res, next) {
    try {
      const user = await User.findById(req.params.id);

      return res.status(200).json({
        data: user,
        status: "Success",
        message: "Succesfully find user by id",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;