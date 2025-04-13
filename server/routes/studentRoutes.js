const express = require("express");
const {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

// Öğrenci rotaları
router.post("/", addStudent);
router.get("/", getStudents);
router.get("/:userId", getStudentById);
router.put("/:userId", updateStudent);
router.delete("/:userId", deleteStudent);


module.exports = router;
