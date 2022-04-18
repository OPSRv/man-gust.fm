import { createApi } from "@reduxjs/toolkit/query/react";

export const musicBandAPI = createApi({
  reducerPath: "musicBandAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1/",
    endpoints: (build) => ({
      getMusicBands: build.query({
        query: () => ({
          url: "music-bands/",
        }),
      }),
    }),
  }),
});
