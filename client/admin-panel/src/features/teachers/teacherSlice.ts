import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeachers = createAsyncThunk("teachers/fetchAll", async () => {
  const response = await axios.get("http://localhost:5000/api/teachers");
  return response.data;
});

const teacherSlice = createSlice({
  name: "teachers",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default teacherSlice.reducer;
