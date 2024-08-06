import { FaFilter, FaSearch } from "react-icons/fa";
import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import ProductsSkeleton from "../../components/skeleton/ProductsSkeleton";
import ProductCard from "../../components/product/ProductCard";
import { TProduct } from "../../interfaces/product.interface";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ProductForm from "../../components/product/ProductForm";

type TSearch = {
  search: string;
};

const Products = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [queries, setQueries] = useState({
    searchTerm: "",
    min: "",
    max: "",
    sort: "",
    page: 1,
    limit: 5,
  });
  const modalRef = useRef<HTMLDivElement>(null);

  const handleModel = () => {
    setVisibleModal(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setVisibleModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { data: res, isLoading } = useGetAllProductsQuery(queries);

  const { data: res2, isLoading: isLoading2 } = useGetAllProductsQuery(null);

  let totalPage;

  if (!isLoading2) {
    const totalData = res2?.data?.length;
    totalPage = Math.ceil(totalData / queries.limit);
  }

  // console.log(totalPage);

  const data = res?.data;

  const { register, handleSubmit } = useForm<TSearch>();

  const onSearch: SubmitHandler<TSearch> = (data) => {
    const { search } = data;
    setQueries({ ...queries, searchTerm: search });
  };

  // console.log(search);

  return (
    <>
      <div className="navbar my-10 md:px-3">
        <div className="hidden md:flex md:navbar-start"></div>
        <div className="flex justify-center navbar-start pl-[68px] md:pl-0 md:navbar-center">
          <form onSubmit={handleSubmit(onSearch)}>
            <div className="join">
              <div className="w-9/12 md:w-full">
                <input
                  className="input focus:outline-none focus:border-black focus:border-[1.5px] input-sm border-black border-[1.5px] join-item border-r-0 focus:border-r-0"
                  placeholder="Search"
                  {...register("search")}
                />
              </div>
              <div className="indicator">
                <button className="btn btn-sm border-black border-[1.5px] join-item bg-black opacity-85 text-white hover:opacity-100 hover:bg-black hover:border-[1.5px] hover:border-black">
                  <FaSearch />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="navbar-end relative">
          <button
            onClick={handleModel}
            className="btn btn-sm rounded-sm border-black  border-[1.5px] bg-white text-black hover:bg-black hover:text-white hover:border-black"
          >
            Filter <FaFilter />
          </button>
          <div
            className={`absolute rounded-sm bg-white top-9 w-72 -right-1 md:w-80 md:-right-2 border shadow-xl p-5 z-50 transition-transform transform ${
              visibleModal
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            } duration-200`}
            ref={modalRef}
          >
            <ProductForm
              queries={queries}
              setQueries={setQueries}
              setVisibleModal={setVisibleModal}
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <ProductsSkeleton />
      ) : !data.length ? (
        <div className="mb-56">
          <h3 className="text-2xl md:text-3xl text-black font-semibold ">
            No Products Found
          </h3>
        </div>
      ) : (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-12 md:p-8 lg:p-4">
          {data?.map((product: TProduct, index: number) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )}
      {totalPage && (
        <div className="my-10 flex justify-center items-center">
          <div className="join">
            <button
              onClick={() => setQueries({ ...queries, page: queries.page - 1 })}
              className="join-item p-1 px-2 border-black border-[1.5px] bg-black text-white hover:bg-black hover:border-[1.5px] hover:border-black disabled:opacity-75"
              disabled={queries.page <= 1}
            >
              « Previous
            </button>
            <button
              className="join-item py-1 px-5 disabled:border-black disabled:bg-white disabled:border-[1.5px] disabled:text-black disabled:font-semibold disabled:border-x-0"
              disabled
            >
              Page {queries.page}
            </button>
            <button
              onClick={() => setQueries({ ...queries, page: queries.page + 1 })}
              className="join-item p-1 px-2 border-black border-[1.5px] bg-black text-white hover:bg-black hover:border-[1.5px] hover:border-black disabled:opacity-75"
              disabled={queries.page >= totalPage}
            >
              Next »
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
