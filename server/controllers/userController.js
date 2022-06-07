const User = require('../models/User');

class UserController {
  static async register(req, res) {
    try {
      const newUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
      });

      return res
        .status(201)
        .json({
          data: newUser,
          status: "Success",
          message: "Succesfully create user",
        });
    } catch (error) {
      console.log(error);
    }
  }

  static async findAllUsers(req, res) {
    try {
      const users = await User.find({});

      return res.status(200).json({
        data: users,
        status: "Success",
        message: "Succesfully find all users",
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async findUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);

      return res.status(200).json({
        data: user,
        status: "Success",
        message: "Succesfully find user by id",
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;