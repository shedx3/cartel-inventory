const thriftModel = require("../models/thrift.model");

const ThriftController = {
  createThrift: async (req, res) => {
    const doc = new thriftModel(req.body);
    console.log(doc);
    await doc.save((err, data) => {
      console.log(err, data);
      if (err) {
        res.status(400).json({ status: "error trying to  create thrift" });
      } else {
        res.status(200).json({ status: "thrift added successfully", data });
      }
    });
  },

  updateThrift: async (req, res) => {
    thriftModel.find((err, data) => {
      console.log(err, data);
      if (err) {
        res.status(400).json({ status: "error trying to fetch thrift record" });
      } else {
        res.status(200).json({ status: "thrift fetched successfully", data });
      }
    });
  },

  getThrift: async (req, res) => {
    thriftModel.find((err, data) => {
      console.log(err, data);
      if (err) {
        res.status(400).json({ status: "error trying to fetch thrift record" });
      } else {
        res.status(200).json({ status: "thrift fetched successfully", data });
      }
    });
  },

  deleteThrift: async (req, res) => {
    res.status(200).json({ status: "merch deleted" });
  },
};

module.exports = ThriftController;
