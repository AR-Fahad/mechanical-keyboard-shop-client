const Guide = () => {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl mb-2 md:mb-5 text-black font-bold text-center">
        <span className="border-l-slate-200 border-l-[5px] border-t-slate-200 border-t-[5px] px-1">
          Beginner's Guide
        </span>
      </h3>
      <div className="p-5">
        <iframe
          className="w-full h-[40vh] md:w-1/2 md:h-[50vh] md:mx-auto"
          src="https://www.youtube.com/embed/BWQFUPm6XE0?si=OcHQe5Qwcn9hTQfK?autoplay=1?rel=0"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Guide;
