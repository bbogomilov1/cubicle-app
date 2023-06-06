const Accessory = require("../models/AccessoryModel");

exports.create = (accessoryData) => {
  Accessory.create(accessoryData);
};
