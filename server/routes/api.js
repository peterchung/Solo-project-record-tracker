const express = require("express");
const playerController = require("../controllers/playerController");
const router = express.Router();

// Get player route handler
router.post("/", playerController.getPlayer, (req, res) => {
  return res.status(200).json({ name: res.locals.profile });
});

module.exports = router;
