import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogAPI = createApi({
  reducerPath: "blogAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1/",
  }),
  tagTypes: ["musicbands", "follow", "unfollow"],
  endpoints: (builder) => ({
    getMusicBands: builder.query({
      query: () => ({
        url: `blog/`,
      }),
      providesTags: (result) => ["musicbands"],
    }),
    getBlogID: builder.query({
      query: (name) => ({
        url: `blog/${name}/`,
      }),
    }),
    getBlogSongID: builder.query({
      query: (name) => ({
        url: `blog/${name}/song/`,
      }),
    }),
  }),
});

export const { useGetBlogAllQuery } = blogAPI;
