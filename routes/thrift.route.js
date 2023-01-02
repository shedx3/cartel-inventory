const express = require("express");
const router = express.Router();

const ThriftController = require("../controller/thrift.controller");

router.post("/create", ThriftController.createThrift);
router.get("/getall", ThriftController.getThrift);
router.get("/gettotal", ThriftController.thriftTotal);
router.put("/update", ThriftController.updateThrift);
router.delete("/delete", ThriftController.deleteThrift);
module.exports = router;
