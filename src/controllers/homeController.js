const router = require("express").Router();
const cubeModel = require("../managers/cubeManager");

router.get("/", (req, res) => {
  const { search, from, to } = req.query;

  const cubes = cubeModel.getAll(search, from, to);

  res.render("index", { cubes, search, from, to });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/404", (req, res) => {
  res.render("404");
});

module.exports = router;
