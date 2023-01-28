import { model, Schema } from "mongoose";

const postSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  location: {
    type: String,
  },

  description: String,

  picturePath: String,

  userPicturePath: String,

  comments: {
    type: Array,
    default: [],
  },

  //TODO

  likes: {
    type: Map,
    of: Boolean,
  },
});

const Post = model("Post", postSchema);
export default Post;
