const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      // uniqueCaseInsensitive: true,
      // lowercase: true,
      // dropDups: true,
      // trim: true,
      // match: /^\w ([.-]?\w )*@\w ([.-]?\w )*(\.\w{2,3}) $/,
    },

    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "accountant"],
      default: "accountant",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
