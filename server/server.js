require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const oneOnOneRoutes = require("./routes/oneOnOneRoutes");

const app = express();
connectDB(); 

app.use(cors());
app.use(express.json());

app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/oneOnOnes", oneOnOneRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
