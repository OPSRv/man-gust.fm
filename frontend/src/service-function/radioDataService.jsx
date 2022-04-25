import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const radioDataAPI = createApi({
  reducerPath: "radioDataAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1/",
  }),
  //  tagTypes: ["AllSongMusicBand", "like", "unlike"],
  endpoints: (builder) => ({
    getAllSong: builder.query({
      query: () => ({
        url: `slider/`,
      }),
      //  providesTags: (result) => ["AllSongMusicBand"],
    }),
  }),
});

export const { useGetRadioDataAllQuery } = radioDataAPI;
