import { useState } from "react";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "../../redux/features/products/productsApi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TProduct } from "../../interfaces/product.interface";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import UpdateProduct from "../../components/ProductManagement/UpdateProduct";

const ProductsManagement = () => {
  const [queries, setQueries] = useState({ searchTerm: "", limit: 6 });
  const { data: res, isLoading } = useGetAllProductsQuery(queries);
  const [deleteProduct] = useDeleteProductMutation();

  const onDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure to delete this product?",
      // scrollbarPadding: "0px",
      showCancelButton: true,
      confirmButtonColor: "red",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Deleting a product");
        try {
          await deleteProduct(id);
          toast.success("Product deleted successfully", { id: toastId });
        } catch (err) {
          toast.error("Something went wrong", { id: toastId });
        }
      }
    });
  };

  const data = res?.data;

  return (
    <>
      <div className="my-10">
        <div className="mb-10 flex justify-between items-center gap-1 p-1">
          <div className="md:w-[35%] lg:w-[25%]">
            <input
              onChange={(e) =>
                setQueries({ ...queries, searchTerm: e.target.value })
              }
              type="text"
              placeholder="Search here..."
              className="input input-sm input-bordered w-full"
            />
          </div>
          <div>
            <Link
              to="/add-product"
              className="btn btn-sm rounded-md border-black  border-[1.5px] bg-white text-black hover:bg-black hover:text-white hover:border-black"
            >
              Add Product
            </Link>
          </div>
        </div>

        {isLoading ? (
          <div className="h-[50vh] mt-[30vh]">
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          </div>
        ) : data?.length === 0 ? (
          <div className="h-screen text-center">
            <h3 className="text-2xl md:text-3xl mt-10 text-black font-semibold text-opacity-70">
              No product found
            </h3>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>No</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* rows */}
                  {data?.map((product: TProduct, key: number) => {
                    return (
                      <tr key={product?._id}>
                        <td></td>
                        <td>
                          <h3>{key + 1}.</h3>
                        </td>
                        <td>
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={product?.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="w-[150px]">
                            <div className="font-semibold">{product?.name}</div>
                            <div>
                              <span className="text-xs rounded-sm font-semibold bg-black text-white px-1">
                                {product?.brand}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>{product?.rating}</td>
                        <td>{product?.quantity}</td>
                        <td>${product?.price}</td>
                        <th>
                          <div className="flex gap-1 items-center">
                            <UpdateProduct product={product} />
                            <button
                              onClick={() => onDelete(product._id as string)}
                              className="btn btn-ghost btn-sm"
                            >
                              <RiDeleteBin5Line className="text-xl" />
                            </button>
                          </div>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {queries?.limit !== 0 && data?.length >= 6 ? (
              <div className="text-center mb-10 mt-5">
                <button
                  onClick={() => setQueries({ ...queries, limit: 0 })}
                  className="btn btn-sm rounded-md border-black  border-[1.5px] bg-white text-black hover:bg-black hover:text-white hover:border-black"
                >
                  Show All
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsManagement;
