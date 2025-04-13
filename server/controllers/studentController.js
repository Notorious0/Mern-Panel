const Student = require("../models/Student");
const {ObjectId} = require('mongodb');

// Öğrenci ekleme
const addStudent = async (req, res) => {
  const { userId, fullName, className } = req.body;

  if (!userId || !fullName || !className) {
    return res.status(400).json({ message: "Tüm alanlar zorunludur." });
  }

  try {
    const existingStudent = await Student.findOne({ userId });
    if (existingStudent) {
      return res.status(400).json({ message: "Bu userId ile zaten bir öğrenci mevcut." });
    }
    const newStudent = new Student({ userId, fullName, className });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Öğrenci eklenemedi:", error);
    res.status(400).json({ message: "Öğrenci eklenemedi", error: error.message });
  }
};

// Tüm öğrencileri listeleme
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Öğrenciler getirilemedi", error });
  }
};

// Tek bir öğrenciyi görüntüleme
const getStudentById = async (req, res) => {
  const { userId } = req.params;

  try {
    const student = await Student.findOne({ userId });
    if (!student) {
      return res.status(404).json({ message: "Öğrenci bulunamadı" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Öğrenci getirilemedi", error });
  }
};

// Öğrenci güncelleme
const updateStudent = async (req, res) => {
  const { userId } = req.params;
  const { fullName, className } = req.body;

  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { userId },
      { fullName, className },
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ message: "Öğrenci bulunamadı" });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: "Öğrenci güncellenemedi", error });
  }
};

// Öğrenci silme
const deleteStudent = async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedStudent = await Student.findOneAndDelete({ userId });
    if (!deletedStudent) {
      return res.status(404).json({ message: "Öğrenci bulunamadı" });
    }
    res.json({ message: "Öğrenci silindi" });
  } catch (error) {
    res.status(400).json({ message: "Öğrenci silinemedi", error });
  }
};


module.exports = {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
