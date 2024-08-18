import { TProduct } from "./../../../interfaces/product.interface";
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
      providesTags: [{ type: "products" }],
    }),
    getSingleProduct: builder.query({
      query: (id: string) => {
        return {
          url: `/products/${id}`,
          method: "GET",
        };
      },
      providesTags: [{ type: "product" }],
    }),
    orderProducts: builder.mutation({
      query: (ordersBody: { orders: { _id: string; quantity: number }[] }) => {
        return {
          url: "/products/orders",
          method: "POST",
          body: ordersBody,
        };
      },
      invalidatesTags: ["products", "product"],
    }),
    createProduct: builder.mutation({
      query: (payload: TProduct) => {
        return {
          url: `/products/create-product`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["products", "product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, payload }: { id: string; payload: Partial<TProduct> }) => {
        return {
          url: `/products/${id}`,
          method: "PATCH",
          body: payload,
        };
      },
      invalidatesTags: ["products", "product"],
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products", "product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useOrderProductsMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
