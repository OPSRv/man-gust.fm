import { configureStore } from "@reduxjs/toolkit";
import { blogAPI } from "../service-function/blogService";
import { musicBandAPI } from "../service-function/musicBandService";
import { podcastAPI } from "../service-function/podcastService";
import { radioDataAPI } from "../service-function/radioDataService";
import { songAPI } from "../service-function/songService";
import musicBandReducer from "./reducers/musicBandSlice";

export const store = configureStore({
  reducer: {
    musicBand: musicBandReducer,
    [blogAPI.reducerPath]: blogAPI.reducer,
    [musicBandAPI.reducerPath]: musicBandAPI.reducer,
    [radioDataAPI.reducerPath]: radioDataAPI.reducer,
    [songAPI.reducerPath]: songAPI.reducer,
    [podcastAPI.reducerPath]: podcastAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogAPI.middleware,
      musicBandAPI.middleware,
      radioDataAPI.middleware,
      songAPI.middleware,
      podcastAPI.middleware
    ),
});
