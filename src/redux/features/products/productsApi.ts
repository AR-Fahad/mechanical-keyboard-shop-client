import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (queries) => {
        const params = new URLSearchParams();

        if (queries) {
          for (const query in queries) {
            params.append(query, queries[query]);
          }
        }
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      // providesTags: [{ type: "products" }],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
