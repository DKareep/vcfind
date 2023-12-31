import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { LIMIT } from "../../Constants/Constants";
const fetchEuroInvestors = createAsyncThunk(
  "euro/fetch",
  async (page: number) => {
    try {
      const response = await axios.get(
        `https://vcfinder-dkareeps-projects.vercel.app/euro?_page=${page}&_limit=${LIMIT}`,
      );

      return {
        data: response.data,
      };
    } catch (e) {
      console.log(e);
    }
  },
);

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
        state.data_euro = action.payload.data;
        state.loading_euro = false;
        state.error_euro = false;
      },
    );
    builder.addCase(fetchEuroInvestors.pending, (state, action) => {
      state.loading_euro = true;
      state.error_euro = false;
    });
    builder.addCase(fetchEuroInvestors.rejected, (state, action) => {
      state.error_euro = true;
      state.loading_euro = false;
    });
  },
});

export { fetchEuroInvestors };

export default EuroInvestors;
