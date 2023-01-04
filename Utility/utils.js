const idGenerator = (length = 6) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = { idGenerator };

// let checkEmail = req.body.email;
// console.log(checkEmail);
// await userModel.findOne({ checkEmail }, (doc) => {
//   console.log(checkEmail);

//   if (doc.email === checkEmail) {
//     res.status(400).json({ status: "email already exists" });
//   } else {
//     let userData = {
//       email,
//       password,
//       role,
//     };
//     userModel.create(userData, (err, data) => {
//       if (err) {
//         res.status(400).json({ status: "error trying to create usergroup" });
//       } else {
//         res.status(200).json({ status: "user added successfully", data });
//       }
//     });
//   }
// });
