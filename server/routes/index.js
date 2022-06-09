const router = require('express').Router();
const UserController = require('../controllers/userController');
const userAuthentication = require('../middlewares/auth');

router.route("/api/v1").get((req, res) => {
  res.send("Connected");
})

// register
router.route("/api/v1/register").post(UserController.register);

// login
router.route("/api/v1/login").post(UserController.login);

// user
router.route("/api/v1/users").get(userAuthentication, UserController.findAllUsers);
router.route("/api/v1/users/:id").get(userAuthentication, UserController.findUserById);

router.route("/api/v1/user").get(userAuthentication, UserController.findLoggedUser);

module.exports = router;