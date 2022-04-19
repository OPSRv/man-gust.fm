import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musicBandAPI = createApi({
  reducerPath: "musicBandAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1/",
  }),
  tagTypes: ["Musicbands"],
  endpoints: (builder) => ({
    getMusicBands: builder.query({
      query: () => ({
        url: `musicbands/`,
      }),
      providesTags: (result) => ["Musicbands"],
      // invalidatesTags: (result) => ['Musicbands'] next method is add function to add fun
    }),
  }),
});

export const { useGetMusicBandAllQuery } = musicBandAPI;
