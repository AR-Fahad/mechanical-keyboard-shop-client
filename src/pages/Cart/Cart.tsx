import { Link } from "react-router-dom";
import CartItem from "../../components/Cart/CartItem";
import { useAppSelector } from "../../redux/hooks";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const orderSummery = {
    products: 0,
    totalPrice: 0,
  };

  cart.forEach((cartItem) => {
    orderSummery.products = orderSummery.products + cartItem.quantity;
    orderSummery.totalPrice = orderSummery.totalPrice + cartItem.total;
  });

  return (
    <div className="my-10">
      {!cart?.length ? (
        <div className="h-screen text-center">
          <h3 className="text-2xl my-10 md:text-3xl text-black font-semibold text-opacity-70">
            There is no item available in cart
          </h3>
        </div>
      ) : (
        <div className="my-10 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
          <h3 className="text-2xl text-center mb-5 text-black font-semibold">
            All Items
          </h3>
          <div className="px-1 md:p-0 space-y-2">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="mt-5 text-lg border shadow-xl rounded-md">
            <div className="bg-black text-center w-full py-3 font-bold text-white rounded-t-md">
              Order Summery
            </div>
            <div className="flex justify-between items-center p-5">
              <h3>Total Products:</h3>
              <h3 className="font-semibold">{orderSummery.products}</h3>
            </div>
            <hr />
            <div className="flex justify-between items-center px-5 pb-5 horizontal">
              <h3>Total Amount:</h3>
              <h3 className="font-semibold">
                ${orderSummery.totalPrice.toFixed(2)}
              </h3>
            </div>
            <div className="text-end p-5">
              <Link
                to="/checkout"
                className="btn btn-sm rounded-md border-black  border-[1.5px] bg-white text-black hover:bg-black hover:text-white hover:border-black"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
