const express = require("express");
const {
  addTeacher,
  getTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");

const router = express.Router();

// Öğretmen rotaları
router.post("/", addTeacher);
router.get("/", getTeachers);
router.get("/:teacherId", getTeacherById);
router.put("/:teacherId", updateTeacher);
router.delete("/:teacherId", deleteTeacher);

module.exports = router;
