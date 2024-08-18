import { Link } from "react-router-dom";
import { TProduct } from "../../interfaces/product.interface";
import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import ProductCard from "../product/ProductCard";

const FeaturedProducts = () => {
  const { data: res, isLoading } = useGetAllProductsQuery({ limit: 4 });

  const skeleton = (
    <>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 md:p-8 lg:p-4">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="card rounded-lg bg-slate-50 shadow-lg">
            <figure className="px-4 pt-4">
              <div className="h-48 w-full rounded-md skeleton" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mt-2 h-6 w-[70%] skeleton"></h2>
              <br />
              <div className="flex gap-6 items-center">
                <p className="h-5 skeleton"></p>
                <p className="h-5 skeleton"></p>
              </div>
              <div className="mt-2">
                <p className="h-6 w-[75%] skeleton"></p>
              </div>
              <div className="card-actions mt-5 px-2">
                <button className="btn btn-sm w-full skeleton"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  let products: TProduct[] = [];

  if (!isLoading) {
    products = res?.data;
  }

  return (
    <div>
      <h3 className="text-2xl md:text-3xl mb-2 md:mb-5 text-black font-bold text-center">
        <span className="border-l-slate-200 border-l-[5px] border-t-slate-200 border-t-[5px] px-1">
          Featured Products
        </span>
      </h3>
      {isLoading ? (
        skeleton
      ) : (
        <>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 md:p-8 lg:p-4">
            {products.map((product, key) => (
              <ProductCard product={product} key={key} />
            ))}
          </div>
        </>
      )}
      <div className="text-center mt-2">
        <Link
          to="/products"
          className="btn btn-sm rounded-md border-black  border-[1.5px] bg-white text-black hover:bg-black hover:text-white hover:border-black"
        >
          Show All Products
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
