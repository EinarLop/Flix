const Movie = require("../models/movie");
const mongoose = require("mongoose");

exports.getAll = (req, res) => {
  Movie.find()
    .then((movies) => console.log(movies))
    .catch((err) => res.status(500).json("Error: " + err));
};
