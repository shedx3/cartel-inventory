const express = require("express");
const router = express.Router();

const UserRouter = require("../controller/user.controller");

router.post("/register", UserRouter.register);
router.post("/login", UserRouter.login);

module.exports = router;
