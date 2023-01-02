const express = require("express");
const router = express.Router();

const ThriftController = require("../controller/thrift.controller");

router.post("/create", ThriftController.createThrift);
router.get("/get", ThriftController.getThrift);
router.put("/update", ThriftController.updateThrift);
router.delete("/delete", ThriftController.deleteThrift);
module.exports = router;
