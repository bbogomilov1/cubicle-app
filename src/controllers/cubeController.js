const router = require("express").Router();
const cubeModel = require("../models/cubeModel");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  cubeModel.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
  });

  res.redirect("/");
});

router.get("/:cubeId/details", (req, res) => {
  const cube = cubeModel.getOne(req.params.cubeId);

  if (!cube) {
    return res.redirect("404");
  }

  res.render("details", { cube });
});

module.exports = router;
