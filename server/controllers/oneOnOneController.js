const OneOnOne = require("../models/OneOnOne");
const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const {ObjectId} = require('mongodb');

const addOneOnOne = async (req, res) => {
  const { teacher, student, date, startTime, endTime } = req.body;

  // Gerekli alanların kontrolü
  if (!teacher || !student || !date || !startTime || !endTime) {
    return res.status(400).json({ message: "Tüm alanları doldurun." });
  }

  try {
    const newSession = new OneOnOne({
      teacher,
      student,
      date,
      startTime,
      endTime,
      approved:false
    });

    const savedSession = await newSession.save();
    
    // populate metodunu kullanarak, kaydedilen oturumu doldur
    const populatedSession = await OneOnOne.populate(savedSession, [
      { path: "teacher", select: "teacherId fullName lesson" },
      { path: "student", select: "userId fullName className" }
    ]);

    res.status(201).json(populatedSession);
  } catch (error) {
    console.error("Hata detayları:", error); 
    res.status(400).json({ message: "Birebir ders eklenemedi", error });
  }
};


const getAllOneOnOnes = async (req, res) => {
  try {
    const sessions = await OneOnOne.find()
      .populate("teacher", "teacherId fullName lesson _id")
      .populate("student", "userId fullName className _id");

    const result = sessions.map((session) => ({
      _id: session._id,
      userId: session.student.userId,
      userName: session.student.fullName,
      className: session.student.className,
      teacherId: session.teacher.teacherId,
      teacherName: session.teacher.fullName,
      lesson: session.teacher.lesson,
      date: session.date,
      startTime: session.startTime,
      endTime: session.endTime,
      approved: session.approved,
    }));

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Veriler getirilemedi", error });
  }
};

const updateOneOnOne = async (req, res) => {
  const { id } = req.params;
  const { teacher, student, date, startTime, endTime } = req.body;

  try {
    const updatedOneOnOne = await OneOnOne.findByIdAndUpdate(
      id,
      { teacher, student, date, startTime, endTime },
      { new: true }
    ).populate("teacher", "teacherId fullName lesson").populate("student", "userId fullName className");

    res.status(200).json(updatedOneOnOne);
  } catch (error) {
    res.status(500).json({ message: "Güncelleme sırasında hata oluştu", error });
  }
};

const deleteOneOnOne = async (req, res) => {
  const { id } = req.params;
 const objID = new ObjectId(id);
  try {
    await OneOnOne.deleteOne({_id: objID});
    res.status(200).json({ message: "Birebir ders silindi." });
  } catch (error) {
    res.status(500).json({ message: "Silme sırasında hata oluştu", error });
  }
};

const toggleApproval = async (req, res) => {
  const { id } = req.params;
  
  try {
    const session = await OneOnOne.findById(id);
    if (!session) {
      return res.status(404).json({ message: "Session not found." });
    }
    
    session.approved = !session.approved;
    await session.save();
    
    const populatedSession = await OneOnOne.populate(session, [
      { path: "teacher", select: "teacherId fullName lesson" },
      { path: "student", select: "userId fullName className" }
    ]);
    
    res.status(200).json(populatedSession);
  } catch (error) {
    console.error("Approval toggle error:", error);
    res.status(500).json({ message: "Error toggling approval status", error });
  }
};






module.exports = { addOneOnOne, getAllOneOnOnes, updateOneOnOne, deleteOneOnOne , toggleApproval};
