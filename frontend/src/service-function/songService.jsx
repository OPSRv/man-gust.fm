import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const songAPI = createApi({
  reducerPath: "songAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1/",
  }),
  tagTypes: ["AllSongMusicBand", "like", "unlike", "album"],
  endpoints: (builder) => ({
    getAllSong: builder.query({
      query: (musicband_name) => ({
        url: `song/?musicband__musicband_name=${musicband_name}`,
      }),
      providesTags: (result) => ["AllSongMusicBand"],
    }),
    getAllSingle: builder.query({
      query: (musicband_name) => ({
        url: `song/?musicband__musicband_name=${musicband_name}&single=true&likes__user=`,
      }),
    }),
    getAlbum: builder.query({
      query: (musicband_name) => ({
        url: `album/?musicband__musicband_name=${musicband_name}`,
      }),
      invalidatesTags: ["AllSongMusicBand"],
      providesTags: (result) => ["album"],
    }),
    getAlbumID: builder.query({
      query: (album_name) => ({
        url: `album/${album_name}/`,
      }),
    }),
    getAllVideo: builder.query({
      query: (musicband_name) => ({
        url: `video/?musicband__musicband_name=${musicband_name}`,
      }),
    }),
    getAllPhoto: builder.query({
      query: (musicband_name) => ({
        url: `photo/?musicband__musicband_name=${musicband_name}`,
      }),
    }),
    songLike: builder.mutation({
      query: (id) => ({
        url: `/song_like/${id}/like/`,
        method: "POST",
      }),
      providesTags: (result) => ["like"],
      invalidatesTags: ["unlike"],
    }),
    songUnLike: builder.mutation({
      query: (id) => ({
        url: `/song_like/${id}/unlike/`,
        method: "POST",
      }),
      providesTags: (result) => ["unlike"],
      invalidatesTags: ["like"],
    }),
  }),
});

export const { useGetSongAllQuery } = songAPI;
