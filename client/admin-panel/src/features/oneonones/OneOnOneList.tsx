import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { fetchOneOnOnes } from "./oneOnOneSlice";
import React from "react";

const OneOnOneList = () => {
  const dispatch = useAppDispatch();
  const sessions = useAppSelector((state) => state.oneOnOnes.data);

  useEffect(() => {
    dispatch(fetchOneOnOnes());
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">One-on-One Sessions</h2>
      <ul>
        {sessions.map((session: any) => (
          <li key={session._id}>
            {session.userName} ({session.className}) - {session.teacherName} / {session.lesson}  
            [{session.date} {session.startTime}-{session.endTime}] 
            {session.approved ? " ✅" : " ❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OneOnOneList;
