import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type TFilter = {
  min?: string | number;
  max?: string | number;
  sort?: string;
};

type TQueries = {
  searchTerm: string;
  min: string;
  max: string;
  sort: string;
  page: number;
  limit: number;
};

const ProductForm = ({
  queries,
  setQueries,
  setVisibleModal,
}: {
  queries: TQueries;
  setQueries: Dispatch<SetStateAction<TQueries>>;
  setVisibleModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit, reset } = useForm<TFilter>();

  const onFilter: SubmitHandler<TFilter> = (data) => {
    const { max, min, sort } = data;
    setQueries({
      ...queries,
      max: max as string,
      min: min as string,
      sort: sort as string,
    });
    setVisibleModal(false);
  };

  const onReset = () => {
    setQueries({ ...queries, min: "", max: "", sort: "" });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFilter)} action="" className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Price Filtering</h4>
        <p className="text-sm text-muted-foreground">Select custom filtering</p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="min" className="">
            Minimum Price:
          </label>
          <input
            min={0}
            type="number"
            id="min"
            defaultValue=""
            placeholder="Min price"
            {...register("min")}
            className="h-8 pl-1 border-[1px] rounded-md border-gray-500"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4">
          <label htmlFor="max" className="">
            Maximum Price:
          </label>
          <input
            min={0}
            type="number"
            id="max"
            defaultValue=""
            {...register("max")}
            placeholder="Max price"
            className="h-8 pl-1 border-[1px] rounded-md border-gray-500"
          />
        </div>
        <div className="grid grid-cols-2 items-center gap-4 custom-dropdown">
          <label htmlFor="sorting" className="">
            Sort By:
          </label>
          <select
            {...register("sort")}
            defaultValue={""}
            className="h-8 rounded-md border-[1px] border-gray-400/80 focus:border-gray-500 py-1 pl-2 text-sm focus:outline-none"
          >
            <option value="">Price sorting</option>
            <option value="price">Min to max</option>
            <option value="-price">Max to min</option>
          </select>
        </div>
      </div>
      <div className="space-x-4 mt-3">
        <input
          type="submit"
          value="Filter"
          className="btn btn-sm border-black border-[1.5px] bg-black opacity-85 text-white hover:opacity-100 hover:bg-black hover:border-[1.5px] hover:border-black"
        />
        <span onClick={onReset}>
          <button className="btn btn-sm border-black border-[1.5px] bg-white text-black hover:bg-white hover:text-black hover:border-[1.5px] hover:border-black">
            Reset
          </button>
        </span>
      </div>
    </form>
  );
};

export default ProductForm;
