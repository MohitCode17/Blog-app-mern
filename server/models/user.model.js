import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password must contains at least 8 or more characters !!"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
