const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/juego", (req, res) => {
  res.render("juego");
});

module.exports = router;
