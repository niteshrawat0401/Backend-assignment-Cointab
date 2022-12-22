const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  picture: { type: String, required: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  gender: String,
  email: String,
  location: String,
  pin: String,
  nat: String,
});

const Users = model("user", UserSchema);
module.exports = Users;
