import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/features/products/productsApi";
import ProductDetailsSkeleton from "../../components/skeleton/ProductDetailsSkeleton";
import { TProduct } from "../../interfaces/product.interface";
import { IoArrowBackSharp, IoStar, IoStarOutline } from "react-icons/io5";
import Rating from "react-rating";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: res, isLoading } = useGetSingleProductQuery(id as string);
  const product: TProduct = res?.data;

  return (
    <div className="my-10">
      <div className="p-5">
        <Link
          to="/products"
          className="btn btn-sm border-black border-[1.5px] bg-black text-white hover:bg-black hover:border-[1.5px] hover:border-black"
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
                src={product.image}
                className="h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-[1.15] hover:shadow-xl hover:border"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold pt-4">{product.name}</h3>
              <div className="w-full h-48 flex items-center">
                <div className="space-y-5">
                  <div className="flex gap-20">
                    <div>
                      <h3 className=" underline">Brand:</h3>
                      <span className="font-semibold">{product.brand}</span>
                    </div>
                    <div>
                      <h3 className=" underline">Quantity:</h3>
                      <span className="font-semibold">
                        {product.quantity ? product.quantity : "Stock Out"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-20">
                    <div>
                      <h3 className=" underline">Price:</h3>
                      <span className="font-bold">${product.price}</span>
                    </div>
                    <div>
                      <h3 className=" underline">Rating:</h3>
                      <span>
                        <Rating
                          className="text-lg"
                          emptySymbol={<IoStarOutline />}
                          fullSymbol={<IoStar />}
                          initialRating={product.rating}
                          readonly
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                disabled={product.quantity <= 0}
                className="btn btn-sm border-black border-[1.5px] join-item bg-black opacity-85 text-white hover:opacity-100 hover:bg-black hover:border-[1.5px] hover:border-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="p-1 md:p-5 lg:p-10">
            <h3 className="text-xl font-semibold">Product Description</h3>
            <p>{product.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
