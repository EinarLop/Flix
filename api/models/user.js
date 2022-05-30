const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  preference_key: { type: Number, required: true },
});

userSchema.set("collection", "Users");

module.exports = mongoose.model("User", userSchema);
