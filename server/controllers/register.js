import bcrypt from "bcrypt";
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
