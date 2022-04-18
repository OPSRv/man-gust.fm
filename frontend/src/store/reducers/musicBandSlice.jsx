import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicBands: ["Hello Redux toolKit"],
  isLoading: false,
  error: "",
};

export const musicBandSlice = createSlice({
  name: "musicBand",
  initialState,
  reducers: {},
});

export const selectCount = (state) => state.musicBand.musicBands;

export default musicBandSlice.reducer;
