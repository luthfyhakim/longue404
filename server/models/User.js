const mongoose = require('mongoose');
const validator = require('validator');
const { hashPassword } = require('../helper/hash');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Invalid Email"],
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date().toISOString(),
  },
  updated_at: {
    type: Date,
    default: new Date().toISOString(),
  },
});

// middleware pre, akan berjalan sebelum action
userSchema.pre("save", function(next) {
  this.avatar = `https://avatars.dicebear.com/api/${this.gender}/${this.username}.svg`;
  this.password = hashPassword(this.password);
  next(); // harus ditambahkan krn berkaitan dg middleware
})

module.exports = mongoose.model("User", userSchema);