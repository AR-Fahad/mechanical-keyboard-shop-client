import "../../styles/skeleton.css";

const ProductDetailsSkeleton = () => {
  return (
    <>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 lg:gap-5">
        <div className="p-4 h-60 w-[90%] md:h-72 md:[85%] lg:w-[75%] mx-auto shadow-xl border rounded-none skeleton">
          <div className="h-full w-full skeleton"></div>
        </div>
        <div>
          <div className="pt-2 md:pt-4">
            <div className="text-2xl h-7 w-64 font-semibold skeleton"></div>
          </div>
          <div className="w-full h-48 flex items-center">
            <div className="space-y-5">
              <div className="flex gap-20">
                <div className="space-y-1">
                  <div className="h-5 w-14 underline skeleton"></div>
                  <div className="font-semibold h-5 w-20 skeleton"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-5 w-14 underline skeleton"></div>
                  <div className="font-semibold h-5 w-20 skeleton"></div>
                </div>
              </div>
              <div className="flex gap-20">
                <div className="space-y-1">
                  <div className="h-5 w-14 underline skeleton"></div>
                  <div className="font-semibold h-5 w-20 skeleton"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-5 w-14 underline skeleton"></div>
                  <div className="font-semibold h-5 w-20 skeleton"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-sm w-28 skeleton"></div>
        </div>
      </div>
      <div className="p-1 md:p-5 lg:p-10 space-y-2">
        <div className="text-xl h-6 w-44 font-semibold skeleton"></div>
        <div className="h-5 w-[100%] skeleton"></div>
        <div className="h-5 w-[50%] skeleton"></div>
      </div>
    </>
  );
};

export default ProductDetailsSkeleton;
