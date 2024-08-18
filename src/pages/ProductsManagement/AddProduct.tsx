import { SubmitHandler, useForm } from "react-hook-form";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { config } from "../../config";
import { toast } from "sonner";
import { useCreateProductMutation } from "../../redux/features/products/productsApi";
import { useState } from "react";
import "../../styles/file.css";

type AddInputs = {
  name: string;
  brand: string;
  price: number;
  quantity: number;
  description: string;
  rating: number;
  image: string;
};

const AddProduct = () => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<AddInputs>({
    defaultValues: {
      brand: "",
    },
  });

  const [createProduct] = useCreateProductMutation();

  const onAdd: SubmitHandler<AddInputs> = async (data) => {
    setDisabled(true);
    const toastId = toast.loading("Adding a product");
    const { image, ...restData } = data;
    const formData = new FormData();
    formData.append("image", image[0]);
    const url = config.imgBbUrl;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const imageData = await response.json();
      const product = {
        ...restData,
        image: imageData.data.url,
      };
      await createProduct(product);
      toast.success("Product added successfully", { id: toastId });
      setDisabled(false);
      navigate("/products-management");
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
      setDisabled(false);
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
    <div className="my-10">
      <div className="w-[90%] md:[80%] lg:[75%] mx-auto">
        <div className="mb-10">
          <Link
            className="btn btn-sm rounded-md border-black  border-[1.5px] bg-white text-black hover:bg-black hover:text-white hover:border-black"
            to="/products-management"
          >
            <IoArrowBackSharp /> Back
          </Link>
        </div>
        <h3 className="text-2xl md:text-3xl text-black font-semibold mb-5">
          Add Product
        </h3>
        <form onSubmit={handleSubmit(onAdd)} action="">
          <div className="grid grid-cols-1 md:grid-cols-2 font-normal gap-5">
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
                required
                className="select select-sm md:select-md select-bordered w-full"
              >
                <option disabled value="">
                  Select brand
                </option>
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
              <label htmlFor="rating" className="label">
                <span className="font-medium">Rating</span>
              </label>
              <input
                type="number"
                id="rating"
                min={0}
                max={5}
                step={0.01}
                className="input input-sm md:input-md input-bordered w-full"
                placeholder="Enter product rating"
                {...register("rating", { valueAsNumber: true })}
                required
              />
            </div>
            <div>
              <label htmlFor="image" className="label">
                <span className="font-medium">Image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-sm file-black md:file-input-md file-input-bordered w-full"
                placeholder="Choose an image"
                id="image"
                {...register("image")}
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
            <div className="md:col-span-2">
              <label htmlFor="description" className="label">
                <span className="font-medium">Description</span>
              </label>
              <textarea
                id="description"
                className="textarea textarea-sm md:textarea-md textarea-bordered w-full h-28"
                placeholder="Write product description here..."
                {...register("description")}
                required
              />
            </div>
          </div>
          <div className="mt-5">
            <input
              className="btn btn-sm border-black border-[1.5px] join-item bg-black opacity-90 text-white hover:opacity-100 hover:bg-black hover:border-[1.5px] hover:border-black px-5 md:px-10"
              type="submit"
              value="Add"
              disabled={disabled}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
