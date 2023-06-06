const Accessory = require("../models/AccessoryModel");

exports.getAll = () => Accessory.find();

exports.getOthers = (accessoryIds) =>
  Accessory.find({ _id: { $nin: accessoryIds } });

exports.create = (accessoryData) => {
  Accessory.create(accessoryData);
};
