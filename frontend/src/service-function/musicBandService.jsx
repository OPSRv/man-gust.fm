import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musicBandAPI = createApi({
  reducerPath: "musicBandAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1/",
  }),
  tagTypes: ["musicbands", "follow", "unfollow"],
  endpoints: (builder) => ({
    getMusicBands: builder.query({
      query: (theme) => ({
        url: `musicbands/?theme=${theme}`,
      }),
      providesTags: (result) => ["musicbands"],
    }),
    getMusicBandID: builder.query({
      query: (musicband_name) => ({
        url: `musicbands/${musicband_name}/`,
      }),
    }),
    getMmusicBandFollowers: builder.query({
      query: (id) => ({
        url: `/musicband_like/${id}/fans/`,
      }),
    }),
    musicBandFollow: builder.mutation({
      query: (id) => ({
        url: `musicband_like/${id}/like/`,
        method: "POST",
      }),
      providesTags: (result) => ["follow"],
      invalidatesTags: ["musicbands"],
    }),
    musicBandUnFollow: builder.mutation({
      query: (id) => ({
        url: `musicband_like/${id}/unlike/`,
        method: "POST",
      }),
      providesTags: (result) => ["unfollow"],
      invalidatesTags: ["follow"],
    }),
  }),
});

export const { useGetMusicBandsQuery } = musicBandAPI;
