const express = require("express");
const router = express.Router();

const ThriftController = require("../controller/thrift.controller");

router.post("/create", ThriftController.createThrift);
router.post("/sell", ThriftController.saleThrift);
router.get("/daily", ThriftController.dailyLog);
router.get("/weekly", ThriftController.weeklyLog);
router.get("/monthly", ThriftController.monthlyLog);
router.get("/getall", ThriftController.getThrift);
router.get("/gettotal", ThriftController.thriftTotal);

router.delete("/delete", ThriftController.deleteThrift);
module.exports = router;
