const thriftModel = require("../models/thrift.model");
const loggerModel = require("../models/logger.model");
const { idGenerator } = require("../Utility/utils.js");
const ThriftController = {
  createThrift: async (req, res) => {
    const doc = new thriftModel(req.body);
    if (doc.quantity > 0) {
      doc.available = true;
    }
    doc.item_id = idGenerator();
    await doc.save((err, data) => {
      if (err) {
        res.status(400).json({ status: "error trying to  create thrift" });
      } else {
        res.status(200).json({ status: "thrift added successfully", data });
      }
    });
  },

  getThrift: async (req, res) => {
    thriftModel.find((err, data) => {
      if (err) {
        res.status(400).json({ status: "error trying to fetch thrift record" });
      } else {
        res.status(200).json({ status: "thrift fetched successfully", data });
      }
    });
  },
  thriftTotal: async (req, res) => {
    thriftModel.find().count((err, data) => {
      if (err) {
        res.status(400).json({ status: "error trying to fetch thrift record" });
      } else {
        res.status(200).json({ status: "thrift fetched successfully", data });
      }
    });
  },
  dailyLog: async (req, res) => {
    let ts = Math.round(new Date().getTime() / 1000);
    let tsYesterday = ts - 24 * 3600;
    loggerModel.find(
      {
        date: {
          $gte: tsYesterday,
          $lt: Date.now(),
        },
      },
      (err, data) => {
        console.log(err);
        if (err) {
          res.status(400).json({ status: "sales for the day not fetched" });
        } else {
          res
            .status(200)
            .json({ status: "sales for the day fatched successfully", data });
        }
      }
    );
  },
  weeklyLog: async (req, res) => {
    let ts = Math.round(new Date().getTime() / 1000);
    let tsWeekly = ts - 24 * 3600 * 7;
    loggerModel.find(
      {
        date: {
          $gte: tsWeekly,
          $lt: Date.now(),
        },
      },
      (err, data) => {
        console.log(err);
        if (err) {
          res.status(400).json({ status: "sales for the day not fetched" });
        } else {
          res
            .status(200)
            .json({ status: "sales for the day fatched successfully", data });
        }
      }
    );
  },
  monthlyLog: async (req, res) => {
    let ts = Math.round(new Date().getTime() / 1000);
    let tsMonthly = ts - 24 * 3600 * 7 * 30;
    loggerModel
      .find(
        {
          date: {
            $gte: tsMonthly,
            $lt: Date.now(),
          },
        },
        (err, data) => {
          console.log(err);
          if (err) {
            res.status(400).json({ status: "sales for the day not fetched" });
          } else {
            res
              .status(200)
              .json({ status: "sales for the day fatched successfully", data });
          }
        }
      )
      .count();
  },

  deleteThrift: async (req, res) => {
    res.status(200).json({ status: "merch deleted" });
  },

  saleThrift: async (req, res) => {
    let { item_id, quantity, name, price } = req.body;
    thriftModel.findOne({ item_id }, (err, thriftDoc) => {
      if (thriftDoc.available === false || thriftDoc.quantity < quantity) {
        res
          .status(400)
          .json({ status: "The quantity of item is not available" });
      } else {
        thriftDoc.quantity -= quantity;

        thriftModel.updateOne(
          { item_id },
          { quantity: thriftDoc.quantity },
          (err) => {
            if (err) {
              res.status(400).json({ status: "cannot update thrift quantity" });
            } else {
              let amount_sold = quantity * price;
              let logger_id = item_id;
              let stock_left = thriftDoc.quantity;
              let loggerData = {
                logger_id,
                name,
                quantity,
                stock_left,
                price,
                amount_sold,
              };
              loggerModel.create(loggerData, (err, loggerDoc) => {
                if (err) {
                  res.status(400).json({ status: "cannot create logger" });
                } else {
                  res.status(200).json({
                    status: "sales successful",
                    data: loggerDoc,
                  });
                }
              });
            }
          }
        );
      }
    });
  },
};

module.exports = ThriftController;
