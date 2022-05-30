const Movie = require("../models/movie");
const mongoose = require("mongoose");

exports.getAll = (req, res) => {
  Movie.find()
    .then((movies) => res.json(movies))
    .catch((err) => res.status(500).json("Error: " + err));
};

exports.getByKey = (req, res) => {
  Movie.find({ preference_key: req.params.id })
    .then((movies) => res.json(movies))
    .catch((err) => res.status(500).json("Error: " + err));
};
