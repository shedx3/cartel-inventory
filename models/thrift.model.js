const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thriftSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const thrift = mongoose.model("thrift", thriftSchema);

module.exports = thrift;
