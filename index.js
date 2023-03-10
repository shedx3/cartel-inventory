require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 4000;

app.use(express.json({ extended: true }));

const thriftRouter = require("./routes/thrift.route");
const userRouter = require("./routes/user.routes");

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log(err));

app.use("/thrift", thriftRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
