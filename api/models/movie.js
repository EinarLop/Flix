const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  preference_key: { type: Number, required: true },
  movie_title: { type: String, required: true },
  star_cast: { type: String, required: true },
  rating: { type: Number, required: true },
  year: { type: Number, required: true },
  place: { type: String, required: true },
  vote: { type: String, required: true },
  link: { type: String, required: true },
});

movieSchema.set("collection", "Movies");

module.exports = mongoose.model("Movie", movieSchema);
