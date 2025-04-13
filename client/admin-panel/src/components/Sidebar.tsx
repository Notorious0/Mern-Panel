import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
      <nav className="flex flex-col gap-2" aria-label="Main navigation">
        <Link to="/" className="hover:text-gray-300 transition-colors">Dashboard</Link>
        <Link to="/students" className="hover:text-gray-300 transition-colors">Students</Link>
        <Link to="/teachers" className="hover:text-gray-300 transition-colors">Teachers</Link>
        <Link to="/oneonones" className="hover:text-gray-300 transition-colors">One-on-Ones</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
