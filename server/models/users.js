import mongoose from "mongoose";

const UserSchema = new mongoose(
  {
    firstName: {
      typeof: String,
      require: true,
      min: 2,
      max: 50,
    },
    lastName: {
      typeof: String,
      require: true,
      min: 2,
      max: 50,
    },
    email: {
      typeof: String,
      require: true,
    },
    password: {
      typeof: String,
      require: true,
      min: 4,
    },
    picturePath: {
      typeof: String,
      default: "",
    },
    friends: {
      typeof: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
