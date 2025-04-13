const mongoose = require("mongoose");

const oneOnOneSchema = new mongoose.Schema({
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  approved:{type:Boolean,default:false},
});

module.exports = mongoose.model("OneOnOne", oneOnOneSchema);
