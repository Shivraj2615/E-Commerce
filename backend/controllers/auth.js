const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_KEY = process.env.JWT_KEY;

module.exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  //Validate user input
  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }
  //Check if user already exists
  let existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).send("User Already Exists. Please Login");
  }
  //Hash password and create user
  const hashedPass = await bcrypt.hash(password, 10);
  let newUser = new User({ name, email, password: hashedPass });
  await newUser.save();
  //Send success response
  res.status(201).send({
    message: "User Registered Successfully",
    user: { id: newUser._id, name: newUser.name, email: newUser.email },
  });
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("All fields are required");
  }

  const user = await User.findOne({ email });
  if (!user) return res.status(401).send("Invalid Email");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send("Invalid Password");

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    JWT_KEY,
    { expiresIn: "7h" }
  );

  res.status(200).json({
    success: true,
    token,
    message: "Login Successful",
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  });
};

module.exports.logout = async (req, res) => {
  res.status(200).json({ success: true, message: "Logout successful" });
};
