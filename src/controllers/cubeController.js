const router = require("express").Router();
const cubeManager = require("../managers/cubeManager");
const accessoryManager = require("../managers/accessoryManager");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeManager.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
    owner: req.user._id,
  });

  res.redirect("/");
});

router.get("/:cubeId/details", async (req, res) => {
  const cube = await cubeManager
    .getOneWithAccessories(req.params.cubeId)
    .lean();

  if (!cube) {
    return res.redirect("/404");
  }

  res.render("details", { cube });
});

router.get("/:cubeId/attach-accessory", async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const accessories = await accessoryManager.getOthers(cube.accessories).lean();

  const hasAccessories = accessories.length > 0;

  res.render("accessory/attach", { cube, accessories, hasAccessories });
});

router.post("/:cubeId/attach-accessory", async (req, res) => {
  const { accessory: accessoryId } = req.body;
  const cubeId = req.params.cubeId;

  await cubeManager.attachAccessory(cubeId, accessoryId);

  res.redirect(`/cubes/${cubeId}/details`);
});

function getDifficultyOptions(difficultyLevel) {
  const titles = [
    "Very Easy",
    "Easy",
    "Medium (Standard 3x3)",
    "Intermediate",
    "Expert",
    "Hardcore",
  ];

  const options = titles.map((title, index) => ({
    title: `${index + 1} - ${title}`,
    value: index + 1,
    selected: Number(difficultyLevel) === index + 1,
  }));

  return options;
}

router.get("/:cubeId/delete", async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const options = getDifficultyOptions(cube.difficultyLevel);

  res.render("/cube/delete", { cube, options });
});

router.post("/cube/:cubeId/delete", async (req, res) => {
  await cubeManager.delete(req.params.cubeId);
  res.redirect("/");
});

router.get("/:cubeId/edit", async (req, res) => {
  const cube = await cubeManager.getOne(req.params.cubeId).lean();
  const options = getDifficultyOptions(cube.difficultyLevel);
  res.render("/cube/edit", { cube, options });
});

router.post("/:cubeId/edit", async (req, res) => {
  const cubeId = req.params.cubeId;
  const cubeData = req.body;

  await cubeManager.edit(cubeId, cubeData);

  res.redirect(`/cubes/${cubeId}/details`);
});

module.exports = router;
