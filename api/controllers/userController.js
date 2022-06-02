const User = require("../models/user");

exports.getAll = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.validate = (req, res) => {
  console.log(req.body.username);
  User.find({
    $and: [{ username: req.body.username }, { password: req.body.password }],
  })
    .then((user) => {
      if (user.length == 0) {
        console.log(user);
        res.json("User does not exists");
      } else {
        console.log(user);
        res.json("User exists");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.create = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const preference_key = req.body.preference_key;

  const user = new User({
    username,
    password,
    preference_key,
  });

  user
    .save()
    .then((user) => res.json("New user added successfully:" + user))
    .catch((err) => res.status(500).json(err));
};
