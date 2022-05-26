const express = require("express");
const router = express.Router();

const movie = require("../controllers/movieController");

router.get("/", movie.getAll);

module.exports = router;
