const userModel = require("../models/user.model");

const userController = {
  register: async (req, res) => {
    const doc = new userModel(req.body);

    let checkEmail = req.body.email;

    const found = await userModel.find({
      email: checkEmail,
    });

    console.log(found);
    if (found != "") {
      res.status(400).json({ status: "email already exists" });
    } else {
      doc.save((err, data) => {
        if (err) {
          res.status(400).json({ status: "error trying to create usergroup" });
        } else {
          res.status(200).json({ status: "user added successfully", data });
        }
      });
    }

    // let checkEmail = req.body.email;
    // console.log(checkEmail);
    // await userModel.findOne({ email: checkEmail }, (doc) => {
    //   console.log(checkEmail);

    //   if (checkEmail === doc.email) {
    //     res.status(400).json({ status: "email already exists" });
    //   } else {
    //     let userData = {
    //       email,
    //       password,
    //       role,
    //     };
    //     userModel.create(userData, (err, data) => {
    //       if (err) {
    //         res
    //           .status(400)
    //           .json({ status: "error trying to create usergroup" });
    //       } else {
    //         res.status(200).json({ status: "user added successfully", data });
    //       }
    //     });
    //   }
    // });
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email }, (err, data) => {
      if (err) {
        res.status(400).json({ status: "connection not successful" });
      } else if (email !== data.email && password !== data.password) {
        res.status(400).json({ status: "invalid email or password" });
      } else {
        res.status(400).json({ status: `welcome ${data.role}` });
      }
    });
  },
};

module.exports = userController;
