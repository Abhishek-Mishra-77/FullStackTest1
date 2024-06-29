const express = require("express");

const router = express.Router();

const addPlayer = require("../Controllers/playerControllers");

router.post("/add", addPlayer);

module.exports = router;