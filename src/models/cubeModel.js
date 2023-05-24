const uniqid = require("uniqid");

const cubes = [
  {
    id: uniqid(),
    name: "Metallic Rubik's cube",
    description: "Looks like the original Rubik's cube but it's metallic",
    imageUrl: "https://i.ebayimg.com/images/g/MCAAAOSwUc1hj5xB/s-l500.jpg",
    difficultyLevel: "3",
  },
  {
    id: uniqid(),
    name: "All white Rubik's cube",
    description: "This Rubik's cube is all white",
    imageUrl:
      "https://technabob.com/blog/wp-content/uploads/2021/03/all_white_rubiks_cube_1a.jpg",
    difficultyLevel: "4",
  },
];

exports.getAll = function () {
  let result = cubes.slice();

  return result;
};

exports.getOne = function (cubeId) {
  const cube = cubes.find((x) => x.id === cubeId);

  return cube;
};

exports.create = function (cubeData) {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  cubes.push(newCube);

  console.log(cubes);

  return newCube;
};
