const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const user = await User.find().populate("name", "email");
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch users" });
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: "User added successfully", user });
  } catch (err) {
    res.status(500).json({ error: "Could not add a new User" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }
    const validateUser = new User({ email });

    const user = await User.findOne({ email });
   
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (password === user.password) {
      res.json({ message: "User Login successfully", user });
    } else {
      return res.status(401).json({ error: "Unauthorized User " });
    }
  } catch (err) {
    res.status(500).json({ error: "Could not update points" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    //Checking if all fields are in request body or not?
    if (!email) {
      return res.status(400).json({ error: "email is required" });
    }
    if (!oldPassword) {
      return res.status(400).json({ error: "oldPassword is required" });
    }
    if (!newPassword) {
      return res.status(400).json({ error: "newPassword is required" });
    }

    //getting User from database
    const validateUser = new User({ email });

    const user = await User.findOne({ email });

    //Check if user is not null
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    //checking if user oldpassword is same as user password
    if (oldPassword === user.password) {
      const updatedPassword = await User.findByIdAndUpdate(
        user,
        { email, password: newPassword },
        { new: true }
      );

      res.json({ message: "User Password Updated successfully" });
    } else {
      return res.status(401).json({ error: "Unauthorized User " });
    }
  } catch (err) {
    res.status(500).json({ error: "Could not Reset Password" });
  }
};

module.exports = {
  signup,
  getUsers,
  login,
  resetPassword,
};
