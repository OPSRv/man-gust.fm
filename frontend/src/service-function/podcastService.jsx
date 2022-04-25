import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const podcastAPI = createApi({
  reducerPath: "podcastAPI",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1/",
  }),
  tagTypes: ["podcastAll", "theme"],
  endpoints: (builder) => ({
    getAllPodcast: builder.query({
      query: (theme) => ({
        url: `podcast/?theme=${theme}`,
      }),
      providesTags: (result) => ["podcastAll"],
    }),
    getPodcastSong: builder.query({
      query: (podcast_name) => ({
        url: `podcast-song/?podcast__podcast_name=${podcast_name}`,
      }),
      invalidatesTags: ["podcastAll"],
    }),
  }),
});

export const { useGetAllPodcastQuery, useGetPodcastSongQuery } = podcastAPI;
