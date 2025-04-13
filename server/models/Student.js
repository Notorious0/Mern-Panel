const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  className: { type: String, required: true }
});

studentSchema.pre("findOneAndDelete", async function (next) {
  const student = await this.model.findOne(this.getFilter());
  await mongoose.model("OneOnOne").deleteMany({ student: student._id });
  next();
});

module.exports = mongoose.model("Student", studentSchema);
