const User = require('../models/User');
const { comparePassword } = require('../helper/hash');
const { generateToken } = require('../helper/jwt');

class UserController {
  // setiap fungsi dari controller menerima 3 parameter
  // req = adalah parameter dari request yang didapat dari frontend
  // res = adalah parameter untuk response yang akan dikembalikan ke frontend atau consumer
  // next = untuk lanjut ke proses selanjutnya, (utk kasus kita, diberikan ke middleware error handling)
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

  static async findLoggedUser(req, res, next) {
    try {
      const id = req.loggedUser.id;
      const data = await User.findById(id).exec();

      // jika user tidak ada
      if (data === null) {
        throw {
          status: 404,
          message: "User Not Found",
        }
      }

      return res.status(200).json({
        data,
        status: "Success",
        message: "Succesfully find logged user",
      })
    } catch (error) {
      next(error);
    }
  }

  static async findAllUsers(req, res, next) {
    try {
      const users = await User.find({}).exec();

      if (users === null) {
        throw {
          status: 404,
          message: "User Not Found",
        }
      }

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
      // .exec() berfungsi utk mengeksekusi query
      const user = await User.findById(req.params.id).exec();

      // jika user tidak ada
      if (user === null) {
        throw {
          status: 404,
          message: "User Not Found",
        }
      }

      return res.status(200).json({
        data: user,
        status: "Success",
        message: "Succesfully find user by id",
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const id = req.loggedUser.id;
      const data = await User.findById(id).exec();

      // jika user tidak ada
      if (data === null) {
        throw {
          status: 404,
          message: "User Not Found",
        }
      }

      // update data
      data["username"] = req.body.username ? req.body.username : data.username;
      data["email"] = req.body.email ? req.body.email : data.email;
      data["updated_at"] = new Date().toISOString();

      const updatedData = await data.save();

      return res.status(200).json({
        data: updatedData,
        status: "Success",
        message: "Succesfully update user",
      })
    } catch (error) {
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const id = req.loggedUser.id;
      const data = await User.findById(id).exec();

      // jika user tidak ada
      if (data === null) {
        throw {
          status: 404,
          message: "User Not Found",
        }
      }

      const deletedUser = await data.remove();

      return res.status(200).json({
        data: deletedUser,
        status: "Success",
        message: "Succesfully delete user",
      })
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;