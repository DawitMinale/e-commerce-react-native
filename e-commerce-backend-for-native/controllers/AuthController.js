const User = require("../models/User");

const CryptoJs = require("crypto-js");

const jwt = require("jsonwebtoken");

// Register

const createUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    location: req.body.location,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString(),
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User successfully created" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET);
      const originalPassword = bytes.toString(CryptoJs.enc.Utf8);

      if (originalPassword === req.body.password) {
        const userToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "5d",
        });
        const { password, __v, createdAt, ...userData } = user._doc;
        res.status(200).json({ ...userData, token: userToken });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  createUser,
  loginUser,
};
