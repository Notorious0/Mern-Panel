import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchTeachers } from "./teacherSlice";
import React from "react";

const TeacherList = () => {
  const dispatch = useAppDispatch();
  const teachers = useAppSelector((state) => state.teachers.data);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Teachers</h2>
      <ul>
        {teachers.map((teacher: any) => (
          <li key={teacher._id}>
            {teacher.fullName} - {teacher.lesson} (ID: {teacher.teacherId})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
