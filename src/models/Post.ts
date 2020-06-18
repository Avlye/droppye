import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('Post', PostSchema);
