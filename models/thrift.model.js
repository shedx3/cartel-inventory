const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thriftSchema = new Schema(
  {
    name_of_thrift: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const thrift = mongoose.model("thrift", thriftSchema);

module.exports = thrift;
