const express = require("express");
const router = express.Router();

const user = require("../controllers/userController");

router.get("/", user.getAll);
router.post("/create", user.create);

module.exports = router;
