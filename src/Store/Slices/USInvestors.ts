import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsInvestors = createAsyncThunk("us/fetch", async () => {
  const response = await axios.get(
    "https://vcfinder-dkareeps-projects.vercel.app/us?_page=7&_limit=20",
  );
  return response.data;
});
const initialState = {
  data_us: [],
  loading_us: false,
  error_us: false,
};

type InitialState = {
  data_us: object[];
  loading_us: boolean;
  error_us: boolean;
};

const USInvestors = createSlice({
  name: "us",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsInvestors.pending, (state: InitialState, action) => {
      // state.loading_us = true
    });
    builder.addCase(
      fetchUsInvestors.fulfilled,
      (state: InitialState, action) => {
        state.data_us = action.payload;
      },
    );
    builder.addCase(fetchUsInvestors.rejected, (state, action) => {
      // state.error_us = true
    });
  },
});

export { fetchUsInvestors };
export default USInvestors;
