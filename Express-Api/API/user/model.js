const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  profile: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/6522/6522516.pnhttps://png.pngtree.com/png-clipart/20210914/ourmid/pngtree-long-haired-girl-profile-face-beauty-haircut-beauty-makeup-png-image_3923844.jpg",
  },
  joining: {
    type: Date,
    default: Date.now,
  },
});

const User = model("user", UserSchema);
module.exports = User;
