const router = require("express").Router();
const cubeModel = require("../models/cubeModel");

router.get("/", (req, res) => {
  const cubes = cubeModel.getAll();

  res.render("index", { cubes });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
