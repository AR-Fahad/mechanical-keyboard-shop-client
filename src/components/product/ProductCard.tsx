import Rating from "react-rating";
import { TProduct } from "../../interfaces/products.interface";
import { IoStar, IoStarOutline } from "react-icons/io5";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="card rounded-lg bg-slate-50 shadow-xl">
      <figure className="px-4 pt-4">
        <img className="h-48 w-full rounded-md" src={product.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title h-16 w-full">
          {product.name}{" "}
          <span className="text-xs rounded-sm font-semibold py-[1px] px-1 bg-black text-white">
            {product.brand}
          </span>
        </h2>
        <div className="flex justify-between items-center">
          <p>
            Price: <span className="font-semibold">${product.price}</span>
          </p>
          <p>
            Available: <span className="font-semibold">{product.quantity}</span>
          </p>
        </div>
        <div>
          <p className="font-medium">Ratings:</p>
          <Rating
            className="text-lg"
            emptySymbol={<IoStarOutline />}
            fullSymbol={<IoStar />}
            initialRating={product.rating}
            readonly
          />
        </div>
      </div>
      <div className="card-actions px-8 py-4">
        <button className="btn btn-sm bg-white border-[1.5px] border-black text-black w-full hover:bg-black hover:text-white hover:scale-105">
          Show Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
