import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  batch: Number,
  password: {
    type: String,
    required: true,
  },
});
export const User = mongoose.model("Cat", userSchema);
