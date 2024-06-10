const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  slotNo: Number,
  hidden: Boolean,
  teacher: String,
  roomNo: String,
  course: String,
});

const batchSchema = new mongoose.Schema({
  idno: Number,
  batch: slotSchema,
});
module.exports = mongoose.model("Batch", batchSchema);
