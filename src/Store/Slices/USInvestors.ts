import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LIMIT } from "../../Constants/Constants";

const fetchUsInvestors = createAsyncThunk("us/fetch", async (page: number) => {
  try {
    const response = await axios.get(
      `https://vcfinder-dkareeps-projects.vercel.app/us?_page=${page}&_limit=${LIMIT}`,
    );
    return {
      data: response.data,
    };
  } catch (e) {
    console.log(e);
  }
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
      state.loading_us = true;
      state.error_us = false;
    });
    builder.addCase(
      fetchUsInvestors.fulfilled,
      (state: InitialState, action: any) => {
        state.data_us = action.payload.data;
        state.loading_us = false;
        state.error_us = false;
      },
    );
    builder.addCase(fetchUsInvestors.rejected, (state, action) => {
      state.error_us = true;
      state.loading_us = false;
    });
  },
});

export { fetchUsInvestors };
export default USInvestors;
