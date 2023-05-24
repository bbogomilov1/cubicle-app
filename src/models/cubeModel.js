const uniqid = require("uniqid");

const cubes = [
  {
    id: uniqid(),
    name: "Metallic Rubik's cube",
    description: "Looks like the original Rubik's cube but it's metallic",
    imageUrl:
      "https://www.google.bg/url?sa=i&url=https%3A%2F%2Fwww.ebay.com.au%2Fitm%2F265403619919&psig=AOvVaw0u2wujz2p0_EreWNhEpPk8&ust=1684955056259000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDq7-uQjP8CFQAAAAAdAAAAABAc",
    difficultyLevel: "3",
  },
  {
    id: uniqid(),
    name: "All white Rubik's cube",
    description: "This Rubik's cube is all white",
    imageUrl:
      "https://www.google.bg/url?sa=i&url=https%3A%2F%2Ftechnabob.com%2Fblog%2F2021%2F03%2F08%2Fall-white-tactile-surface-rubiks-cube%2F&psig=AOvVaw0u2wujz2p0_EreWNhEpPk8&ust=1684955056259000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDq7-uQjP8CFQAAAAAdAAAAABAl",
    difficultyLevel: "4",
  },
];

exports.create = function (cubeData) {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  cubes.push(newCube);

  console.log(cubes);

  return newCube;
};
