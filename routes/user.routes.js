const express = require("express");
const router = express.Router();

const UserRouter = require("../controller/user.controller");

router.post("/register", UserRouter.register);
router.post("/login", UserRouter.login);
router.post("/sack", UserRouter.deleteUser);
router.post("/update", UserRouter.updateUser);

module.exports = router;
