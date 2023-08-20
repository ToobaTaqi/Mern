const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./model");
const { hash, compare } = require("bcrypt");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

const Dummy = (req, res) => {
  res.json({
    user: "Tooba " + req.body.user,
  });
};


const DefaultAdmin = async () => {
  const adminExists = await User.exists({ role: "admin" });
  const adminUser = new User({
    email: "toobtq@gmail.com",
    password: "admin123", // Replace with hashed password
    role: "admin",
  });
 
};


const SignUp = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    const existingUser = await User.exists({ email });

    // User existence check
    if (existingUser) {
      return res.status(208).json({
        message: "User Already Exists",
      });
    }

    // Create the user with hashed password
    const newUser = await User.create({
      username,
      email,
      password: await hash(password, 12), // Hashed password
    });

    console.log("User Created");

    // Create a JWT token
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET);

    res.status(201).json({
      message: "Signup Successfully",
      user: newUser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const Login = async (req, res) => {
  const { password, email } = req.body;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    message:"DB Connected"
    console.log("DB Connected");

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isPasswordValid = await compare(password, existingUser.password);

    if (isPasswordValid) {
      // Create a JWT token
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        process.env.JWT_SECRET
      );

     return res.status(200).json({
  message: "Successfully Logged in",
  token: token,
});

    } else {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const allUsers = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const Users = await User.find();
    res.json({
      Users: Users,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const userbyEmail = async (req, res) => {
  const { email } = req.query;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    const Users = await User.findOne({ email: email });
    res.json({
      Users: Users,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};
const deleteUser = async (req, res) => {
  const { username } = req.params; // Assuming you're passing userId in the URL parameter

  try {
    await mongoose.connect(process.env.MONGO_URI);
    const deletedUser = await User.findByIdAndDelete(username);

    if (!deletedUser) {
      res.status(404).json({
        message: "User not found",
      });
    } else {
      const remainingUsers = await User.find();
      res.status(200).json({
        message: "User deleted successfully",
        remainingUsers,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  Dummy,
  SignUp,
  Login,
  allUsers,
  userbyEmail,
  deleteUser,
  DefaultAdmin
};
