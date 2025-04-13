import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchStudents } from "./studentSlice";
import React from "react";

const StudentList = () => {
  const dispatch = useAppDispatch();
  const students = useAppSelector((state) => state.students.data);

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Students</h2>
      <ul>
        {students.map((student: any) => (
          <li key={student._id}>
            {student.fullName} ({student.className}) - ID: {student.userId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
