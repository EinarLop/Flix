const Movie = require("../models/movie");
const User = require("../models/user");
const mongoose = require("mongoose");

exports.getAll = (req, res) => {
  Movie.find()
    .then((movies) => res.json(movies))
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.getByKey = (req, res) => {
  console.log("jskjskjskjksjksjskjks");
  console.log(req.params);
  Movie.find({ preference_key: req.params.id })
    .limit(10)
    .sort([["rating", req.params.order]]) // 1 ascending (default) ; -1 descending
    .then((movies) => res.json(movies))
    .catch((err) => res.status(500).json("Error: " + err));
};
