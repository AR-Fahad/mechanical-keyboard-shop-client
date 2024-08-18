import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/productsApi";
import ProductDetailsSkeleton from "../../components/skeleton/ProductDetailsSkeleton";
import { TProduct } from "../../interfaces/product.interface";
import { IoArrowBackSharp, IoStar, IoStarOutline } from "react-icons/io5";
import Rating from "react-rating";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cart/cartSlice";
import Swal from "sweetalert2";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: res, isLoading } = useGetSingleProductQuery(id as string);
  const product: TProduct = res?.data;
  const dispatch = useAppDispatch();

  const handleCart = (payload: {
    id: string;
    name: string;
    image: string;
    available: number;
    price: number;
  }) => {
    Swal.fire({
      title: "Confirm to add item?",
      // scrollbarPadding: "0px",
      showCancelButton: true,
      confirmButtonColor: "black",
      confirmButtonText: "Add",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(addToCart(payload));
        toast.success("Item added successfully");
      }
    });
  };

  return (
    <div className="my-10">
      <div className="ml-10 mb-10">
        <Link
          to="/products"
          className="btn btn-sm rounded-md border-black  border-[1.5px] bg-white text-black hover:bg-black hover:text-white hover:border-black"
        >
          <IoArrowBackSharp /> Back
        </Link>
      </div>
      {isLoading ? (
        <ProductDetailsSkeleton />
      ) : (
        <>
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 lg:gap-5">
            <div className="p-4 bg-slate-50 h-60 w-[90%] md:h-72 md:[85%] lg:w-[75%] mx-auto shadow-xl border">
              <img
                src={product?.image}
                className="h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-[1.15] hover:shadow-xl hover:border"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold pt-4">{product?.name}</h3>
              <div className="w-full h-48 flex items-center">
                <div className="space-y-5">
                  <div className="flex gap-20">
                    <div>
                      <h3 className=" underline">Brand:</h3>
                      <span className="font-semibold">{product?.brand}</span>
                    </div>
                    <div>
                      <h3 className=" underline">Quantity:</h3>
                      <span className="font-semibold">
                        {product.quantity > 0 ? product?.quantity : "Stock Out"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-20">
                    <div>
                      <h3 className=" underline">Price:</h3>
                      <span className="font-bold">${product?.price}</span>
                    </div>
                    <div>
                      <h3 className=" underline">Rating:</h3>
                      <span>
                        <Rating
                          className="text-lg"
                          emptySymbol={<IoStarOutline />}
                          fullSymbol={<IoStar />}
                          initialRating={product?.rating}
                          readonly
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  handleCart({
                    id: product?._id as string,
                    name: product?.name,
                    image: product?.image,
                    available: product?.quantity,
                    price: product?.price,
                  })
                }
                disabled={product?.quantity <= 0}
                className="btn btn-sm border-black border-[1.5px] join-item bg-black opacity-90 text-white hover:opacity-100 hover:bg-black hover:border-[1.5px] hover:border-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="p-1 md:p-5 lg:p-10">
            <h3 className="text-xl font-semibold">Product Description</h3>
            <p>{product?.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
