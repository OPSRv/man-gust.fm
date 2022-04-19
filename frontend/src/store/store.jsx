import { configureStore } from "@reduxjs/toolkit";
import musicBandReducer from "./reducers/musicBandSlice";
import { musicBandAPI } from "../service-function/musicBandService";

export const store = configureStore({
  reducer: {
    musicBand: musicBandReducer,
    [musicBandAPI.reducerPath]: musicBandAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicBandAPI.middleware),
});
