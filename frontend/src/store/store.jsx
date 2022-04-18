import { configureStore } from "@reduxjs/toolkit";
import musicBandReducer from "./reducers/musicBandSlice";

export const store = configureStore({
  reducer: {
    musicBand: musicBandReducer,
  },
});
