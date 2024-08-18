import { FaEdit } from "react-icons/fa";
import { TProduct } from "../../interfaces/product.interface";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateProductMutation } from "../../redux/features/products/productsApi";

type UpdateInputs = {
  _id: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  description: string;
};

const UpdateProduct = ({ product }: { product: TProduct }) => {
  // const [disabled, setDisabled] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { register, handleSubmit } = useForm<UpdateInputs>({
    defaultValues: {
      _id: product?._id as string,
      name: product?.name,
      brand: product?.brand,
      quantity: product?.quantity,
      price: product?.price,
      description: product?.description,
    },
  });

  const [updateProduct] = useUpdateProductMutation();

  const onUpdate: SubmitHandler<UpdateInputs> = async (data) => {
    btnRef.current?.click();
    const toastId = toast.loading("Updating product");
    const { _id, ...updatedData } = data;
    try {
      await updateProduct({ id: _id, payload: updatedData });
      toast.success("Product updated successfully", { id: toastId });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  const keyboardBrands = [
    "Corsair",
    "Microsoft",
    "Apple",
    "Logitech",
    "Razer",
    "SteelSeries",
    "Keychron",
    "Ducky",
    "Varmilo",
    "HyperX",
  ];

  return (
    <>
      <button
        onClick={() =>
          (
            document.getElementById(product?._id as string) as HTMLDialogElement
          ).showModal()
        }
        className="btn btn-ghost btn-sm"
      >
        <FaEdit className="text-xl" />
      </button>
      <dialog id={product?._id} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button
              ref={btnRef}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="mb-5">
            <img
              className="w-1/2 md:w-[35%] lg:w-[25%] h-52 mx-auto"
              src={product?.image}
              alt=""
            />
          </div>
          <form onSubmit={handleSubmit(onUpdate)} action="">
            <div className="grid grid-cols-1 font-normal gap-5 lg:grid-cols-2">
              <div>
                <label htmlFor="name" className="label">
                  <span className="font-medium">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="input input-sm md:input-md input-bordered w-full"
                  placeholder="Enter product name"
                  {...register("name")}
                  required
                />
              </div>
              <div>
                <label htmlFor="brand" className="label">
                  <span className="font-medium">Brand</span>
                </label>
                <select
                  id="brand"
                  {...register("brand")}
                  className="select select-sm md:select-md select-bordered w-full"
                >
                  <option disabled>Select brand</option>
                  {keyboardBrands.map((brand, index) => (
                    <option key={index} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quantity" className="label">
                  <span className="font-medium">Quantity</span>
                </label>
                <input
                  type="number"
                  id="quantity"
                  min={0}
                  className="input input-sm md:input-md input-bordered w-full"
                  placeholder="Enter product quantity"
                  {...register("quantity", {
                    valueAsNumber: true,
                  })}
                  required
                />
              </div>
              <div>
                <label htmlFor="price" className="label">
                  <span className="font-medium">Price</span>
                </label>
                <input
                  type="number"
                  id="price"
                  min={1}
                  step={0.01}
                  className="input input-sm md:input-md input-bordered w-full"
                  placeholder="Enter product price"
                  {...register("price", { valueAsNumber: true })}
                  required
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="description" className="label">
                  <span className="font-medium">Description</span>
                </label>
                <textarea
                  id="description"
                  className="textarea textarea-sm md:textarea-md textarea-bordered w-full h-24"
                  placeholder="Write product description here..."
                  {...register("description")}
                  required
                />
              </div>
            </div>
            <div className="py-5 text-right">
              <input
                className="btn btn-sm border-black border-[1.5px] join-item bg-black opacity-90 text-white hover:opacity-100 hover:bg-black hover:border-[1.5px] hover:border-black px-5"
                type="submit"
                value="Update"
              />
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default UpdateProduct;
