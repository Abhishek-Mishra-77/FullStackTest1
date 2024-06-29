const express = require("express");

const router = express.Router();

const { addPlayer, getAllPlayer, updatePlayer } = require("../Controllers/playerControllers");

router.post("/add", addPlayer);
router.get("/get", getAllPlayer);
router.put("/update", updatePlayer);

module.exports = router;