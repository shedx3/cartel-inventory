const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loggerModel = new Schema({
  logger_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  stock_left: {
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
