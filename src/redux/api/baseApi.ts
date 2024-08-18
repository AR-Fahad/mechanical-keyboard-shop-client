import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mechanical-keyboard-shop-server-sigma.vercel.app/api",
  }),
  endpoints: () => ({
    // Add your endpoints here
  }),
  tagTypes: ["products", "product"],
});
