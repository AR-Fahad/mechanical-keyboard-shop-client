import { RiDeleteBin5Fill } from "react-icons/ri";
import { TCart } from "../../interfaces/cart.interface";
import {
  addToCart,
  removeFromCart,
  subtractFromCart,
} from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import Swal from "sweetalert2";
import { toast } from "sonner";

const CartItem = ({ item }: { item: TCart }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between bg-white border shadow-xl rounded-md p-2">
      <div className="flex gap-2 items-center">
        <div>
          <button
            onClick={() => {
              Swal.fire({
                title: "Are you sure to remove this item?",
                // scrollbarPadding: "0px",
                showCancelButton: true,
                confirmButtonColor: "red",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(removeFromCart({ id: item?.id }));
                  toast.success("Item removed successfully");
                }
              });
            }}
            className="btn btn-sm md:btn-md bg-white border-[1.5px] border-black text-black hover:bg-white hover:border-red-600 hover:text-red-800 hover:border-[1.5px]"
          >
            <RiDeleteBin5Fill className="text-xl" />
          </button>
        </div>
        <div className="avatar w-14 h-14 md:h-20 md:w-20 shadow-lg border rounded-md">
          <div className="mask mask-squire">
            <img src={item?.image} alt="" />
          </div>
        </div>
        <div className="pl-2">
          <div className="text-xs md:text-base font-semibold">{item?.name}</div>
          <div className="text-sm text-black opacity-85 flex flex-col md:flex-row md:gap-5">
            <p className="text-xs md:text-base"> Price: ${item?.price}</p>
            <p className="text-xs md:text-base">
              {" "}
              Available: {item?.available}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => {
            dispatch(subtractFromCart({ id: item.id }));
          }}
          className="rounded-r-none py-1 border-[1.5px] px-3 rounded-l-md font-extrabold hover:bg-slate-100"
        >
          -
        </button>
        <span className="rounded-l-none border-x-0 border-y-[1.5px] py-1 px-3">
          {item?.quantity}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({
                id: item?.id,
                name: item?.name,
                image: item?.image,
                available: item?.available,
                price: item?.price,
              })
            );
          }}
          className="rounded-l-none border-[1.5px] py-1 px-3 rounded-r-md font-extrabold hover:bg-slate-100"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
