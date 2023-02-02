import mongoose from "mongoose";
import app from "./app/app.js";
import { posts, users } from "./data/index.js";
import Post from "./models/posts.js";
import User from "./models/users.js";

/* DATABASE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`....Server run on Port ${PORT} .....`));

    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));
