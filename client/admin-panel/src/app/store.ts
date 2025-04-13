import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/students/studentSlice";
import teacherReducer from "../features/teachers/teacherSlice";
import oneOnOneReducer from "../features/oneonones/oneOnOneSlice";

export const store = configureStore({
  reducer: {
    students: studentReducer,
    teachers: teacherReducer,
    oneOnOnes: oneOnOneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
