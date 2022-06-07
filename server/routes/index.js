const router = require('express').Router();
const UserController = require('../controllers/userController');

router.route("/api/v1").get((req, res) => {
  res.send("Connected");
})

//register
router.route("/api/v1/register").post(UserController.register);

// user
router.route("/api/v1/users").get(UserController.findAllUsers);
router.route("/api/v1/users/:id").get(UserController.findUserById);

module.exports = router;