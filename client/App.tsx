import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../client/admin-panel/src/pages/Dashboard"; // Verify that the Dashboard component exists in the ./pages directory or adjust the path
import StudentList from "../client/admin-panel/src/features/students/StudentList"; // Ensure the file exists at this path or adjust the path to the correct location
import TeacherList from "../client/admin-panel/src/features/teachers/TeacherList";
import OneOnOneList from "../client/admin-panel/src/features/teachers/TeacherList"; // Ensure this path matches the actual file location
import Sidebar from "../client/admin-panel/src/components/Sidebar"; // Ensure this path matches the actual file location
import Header from "../client/admin-panel/src/components/Header"; // Ensure this path matches the actual file location
import React from "react";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/oneonones" element={<OneOnOneList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
