const Cube = require("../models/CubeModel");

exports.getAll = async function (search, from, to) {
  let result = await Cube.find().lean();

  if (search) {
    result = result.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    result = result.filter((cube) => cube.difficultyLevel >= from);
  }

  if (to) {
    result = result.filter((cube) => cube.difficultyLevel <= to);
  }

  return result;
};

exports.getOne = (cubeId) => Cube.findById(cubeId);
exports.getOneWithAccessories = (cubeId) =>
  this.getOne(cubeId).populate("accessories");

exports.create = (cubeData) => {
  const cube = new Cube(cubeData);

  return cube.save();
};

exports.edit = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);
