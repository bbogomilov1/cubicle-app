const Accessory = require("../models/AccessoryModel");

exports.getAll = () => Accessory.find();

exports.create = (accessoryData) => {
  Accessory.create(accessoryData);
};
