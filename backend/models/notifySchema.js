const mongoose = require("mongoose");

const notifySchema = mongoose.Schema({});

module.exports = mongoose.model("notify", notifySchema);
