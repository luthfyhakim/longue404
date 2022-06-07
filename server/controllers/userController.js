const User = require('../models/User');

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