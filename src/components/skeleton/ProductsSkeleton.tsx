const ProductsSkeleton = () => {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-12 md:p-8 lg:p-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
        <div key={num} className="card rounded-lg bg-slate-50 shadow-xl">
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
  );
};

export default ProductsSkeleton;
