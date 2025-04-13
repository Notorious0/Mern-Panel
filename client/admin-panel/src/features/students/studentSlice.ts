import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk("students/fetchAll", async () => {
  const response = await axios.get("http://localhost:5000/api/students");
  return response.data;
});

const studentSlice = createSlice({
  name: "students",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default studentSlice.reducer;
