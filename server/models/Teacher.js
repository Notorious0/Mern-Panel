const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  teacherId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  lesson: { type: String, required: true }
});

teacherSchema.pre("findOneAndDelete", async function (next) {
  const teacher = await this.model.findOne(this.getFilter());
  await mongoose.model("OneOnOne").deleteMany({ teacher: teacher._id });
  next();
});

module.exports = mongoose.model("Teacher", teacherSchema);
