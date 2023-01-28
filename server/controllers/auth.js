import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/users.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const data = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(data.password, salt);
    const newUser = new User({
      ...data,
      password: passwordHash,
      viewedProfile: Math.floor(Math.random() * 1000),
      impressions: Math.floor(Math.random() * 1000),
    });
    const user = await newUser.save();
    delete user.password;
    res.status(201).json({ message: "Successfully Register", data: user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGIN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) return res.status(400).json({ msg: "User does not exit ." });

    const isMatchPass = await bcrypt.compare(password, user.password);

    if (!isMatchPass)
      return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
