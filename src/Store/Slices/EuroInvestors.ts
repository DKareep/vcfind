import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchEuroInvestors = createAsyncThunk("euro/fetch", async () => {
  const response = await axios.get(
    "https://vcfinder-dkareeps-projects.vercel.app/euro?_page=7&_limit=20",
  );
  return response.data;
});

const initialState = {
  data_euro: [],
  loading_euro: false,
  error_euro: false,
};

type InitialState = {
  data_euro: object[];
  loading_euro: boolean;
  error_euro: boolean;
};

const EuroInvestors = createSlice({
  name: "euro",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchEuroInvestors.fulfilled,
      (state: InitialState, action: any) => {
        state.data_euro = action.payload;
      },
    );
  },
});

export { fetchEuroInvestors };

export default EuroInvestors;
