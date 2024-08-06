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
    getSingleProduct: builder.query({
      query: (id: string) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      // providesTags: [{ type: "product" }],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
