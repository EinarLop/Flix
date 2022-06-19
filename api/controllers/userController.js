const User = require("../models/user");

exports.getAll = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.validate = (req, res) => {
  User.find({
    $and: [{ username: req.body.username }, { password: req.body.password }],
  })
    .then((user) => {
      if (user.length == 0) {
        res.json("User does not exists");
      } else {
        res.json("User exists");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.create = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const preference_key = req.body.preference_key;

  User.find({
    username: username,
  })
    .then((dbUser) => {
      if (dbUser.length == 0) {
        const user = new User({
          username,
          password,
          preference_key,
        });
        user
          .save()
          .then((user) => res.json("New user added successfully"))
          .catch((err) => res.status(500).json(err));
      } else {
        res.json("User already exists");
      }
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.getUser = (req, res) => {
  const username = req.params.username;

  User.findOne({
    username: username,
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.updateKey = (req, res) => {
  User.findOneAndUpdate(
    { username: req.params.username },
    { preference_key: req.params.key }
  )
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.status(500).json("Error: " + err));
};
