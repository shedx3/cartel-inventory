const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loggerModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount_sold: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: () => Date.now(),
  },
});

const logger = mongoose.model("logger", loggerModel);
module.exports = logger;
