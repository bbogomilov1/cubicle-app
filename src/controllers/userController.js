const router = require("express").Router();
const userManager = require("../managers/userManager");

router.get("/register", (req, res) => {
  res.render("/users/register");
});

router.post("/register", (req, res) => {
  const { username, password, repeatPassword } = req.body;

  userManager.register({ username, password, repeatPassword });

  res.redirect("/users/login");
});

router.get("/login", (req, res) => {
  res.render("/users/login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const token = await userManager.login({ username, password });

  res.cookie("auth", token, { httpOnly: true });

  res.redirect("/");
});

module.exports = router;
