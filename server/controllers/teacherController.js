const Teacher = require("../models/Teacher");

//Öğretmen Ekleme
const addTeacher = async (req,res) =>{
    const {teacherId, fullName, lesson} = req.body;
     
    if(!teacherId || !fullName || !lesson){
      return res.status(400).json({ message: "Tüm alanlar zorunludur." });
    }
    try {
      const existingTeacher = await Teacher.findOne({ teacherId });
      if (existingTeacher) {
        return res.status(400).json({ message: "Bu teacherId ile zaten bir öğrenci mevcut." });
      }
        const newTeacher = new Teacher({ teacherId, fullName, lesson });
        await newTeacher.save();
        res.status(201).json(newTeacher);
      } catch (error) {
        res.status(400).json({ message: "Öğretmen eklenemedi", error });
      }
    };
//Öğretmen Listeleme
const getTeachers = async(req,res) =>{
    try{
    const teachers = await Teacher.find();
    res.json(teachers);
    }
    catch(error){
     res.status(500).json({message:"Öğretmeneler Listelenemedi"},error);
    }
} 
//Tek Öğretmen Görüntüleme
const getTeacherById = async (req, res) => {
    const { id } = req.params;
    
    try {
      const teacher = await Teacher.findById(id);
      if (!teacher) {
        return res.status(404).json({ message: "Öğretmen bulunamadı" });
      }
      res.json(teacher);
    } catch (error) {
      res.status(500).json({ message: "Öğretmen getirilemedi", error });
    }
  };

//Öğretmen Güncelleme
const updateTeacher = async (req, res) => {
  const { teacherId } = req.params;
  const { fullName, lesson } = req.body;

  try {
    const updatedTeacher = await Teacher.findOneAndUpdate(
      { teacherId },  // teacherId ile güncelle
      { fullName, lesson },
      { new: true }
    );
    if (!updatedTeacher) {
      return res.status(404).json({ message: "Öğretmen bulunamadı" });
    }
    res.json(updatedTeacher);
  } catch (error) {
    res.status(400).json({ message: "Öğretmen Güncellenemedi.", error });
  }
};

// Öğretmen silme
const deleteTeacher = async (req, res) => {
  const { teacherId } = req.params;

  try {
    const deletedTeacher = await Teacher.findOneAndDelete({ teacherId });
    if (!deletedTeacher) {
      return res.status(404).json({ message: "Öğretmen bulunamadı" });
    }
    res.json({ message: "Öğretmen silindi" });
  } catch (error) {
    res.status(400).json({ message: "Öğretmen silinemedi", error });
  }
};


module.exports = {
    addTeacher,
    getTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
  };