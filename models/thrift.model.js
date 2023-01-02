const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thriftSchema = new Schema(
  {
    item_id: {
      type: String,
      required: true,
    },
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
    available: {
      type: Boolean,
      required: true,
      default: false,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const thrift = mongoose.model("thrift", thriftSchema);

module.exports = thrift;
