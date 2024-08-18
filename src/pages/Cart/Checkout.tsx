/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../redux/features/cart/cartSlice";
import { useOrderProductsMutation } from "../../redux/features/products/productsApi";

const Checkout = () => {
  const [btnOn, setBtnOn] = useState(false);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [orderProducts] = useOrderProductsMutation();
  const navigate = useNavigate();

  const orderSummery = {
    totalPrice: 0,
  };

  const ordersBody = {
    orders: cart.map((item) => ({ _id: item.id, quantity: item.quantity })),
  };

  cart.forEach((cartItem) => {
    orderSummery.totalPrice = orderSummery.totalPrice + cartItem.total;
  });

  // console.log(ordersBody);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBtnOn(true);
    const toastId = toast.loading("Order is under processing");
    const method = (
      event.currentTarget.elements.namedItem("method") as HTMLInputElement
    ).value;
    if (method === "Stripe") {
      toast.error("Stripe method is not implement yet", { id: toastId });
      setBtnOn(false);
    } else {
      try {
        await orderProducts(ordersBody).unwrap();
        toast.success("order placed successfully", { id: toastId });
        dispatch(emptyCart());
        setBtnOn(false);
      } catch (err: any) {
        // console.log(err);
        toast.error("Something went wrong", { id: toastId });
        setBtnOn(false);
      }
    }
  };

  useEffect(() => {
    if (!cart.length) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  return (
    <div className="my-10 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
      <h3 className="text-2xl text-center mb-5 text-black font-semibold">
        Checkout
      </h3>
      <form
        onSubmit={handleSubmit}
        className="p-2 md:p-5 space-y-5 border shadow-xl rounded-md"
      >
        <h3 className="font-semibold">Customer Information</h3>
        <div>
          <label className="input input-sm md:input-md input-bordered flex items-center gap-2">
            <span className="w-12 font-medium">Name</span>
            <input
              type="text"
              className="grow"
              placeholder="Enter your name"
              required
            />
          </label>
        </div>
        <div>
          <label className="input input-sm md:input-md input-bordered flex items-center gap-2">
            <span className="w-12 font-medium">Email</span>
            <input
              type="email"
              className="grow"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>
        <div>
          <label className="input input-sm md:input-md input-bordered flex items-center gap-2">
            <span className="w-12 font-medium">Phone</span>
            <input
              type="text"
              className="grow"
              placeholder="Enter your phone number"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex flex-col gap-1">
            <span className="font-medium text-sm pl-2 w-16">Address</span>
            <textarea
              className="grow h-24 textarea textarea-bordered"
              placeholder="Enter your address"
              required
            />
          </label>
        </div>
        <div>
          <h3>
            Total Amount:{" "}
            <span className="font-semibold">
              ${orderSummery.totalPrice.toFixed(2)}
            </span>
          </h3>
        </div>
        <div>
          <h3 className="font-medium">Select Payment Method</h3>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Stripe</span>
              <input
                type="radio"
                name="method"
                value="Stripe"
                className="radio border-[1.5px] checked:bg-black checked:opacity-80 checked:border-[1.5px]"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Cash On Delivery</span>
              <input
                type="radio"
                name="method"
                className="radio border-[1.5px] checked:border-[1.5px] checked:bg-black checked:opacity-80"
                value="Cash on delivery"
                required
              />
            </label>
          </div>
        </div>
        <div className="py-5 text-right">
          <input
            type="submit"
            value="Place order"
            disabled={btnOn}
            className="btn btn-sm border-black border-[1.5px] join-item bg-black opacity-90 text-white hover:opacity-100 hover:bg-black hover:border-[1.5px] hover:border-black px-5"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
