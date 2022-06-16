const express = require("express");
const router = express.Router();

const movie = require("../controllers/movieController");

router.get("/", movie.getAll);
router.get("/key/:id/:order/", movie.getByKey);

module.exports = router;
