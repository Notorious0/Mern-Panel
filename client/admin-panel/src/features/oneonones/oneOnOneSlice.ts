import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOneOnOnes = createAsyncThunk("oneonones/fetchAll", async () => {
  const response = await axios.get("http://localhost:5000/api/oneonones");
  return response.data;
});

const oneOnOneSlice = createSlice({
  name: "oneonones",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneOnOnes.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default oneOnOneSlice.reducer;
