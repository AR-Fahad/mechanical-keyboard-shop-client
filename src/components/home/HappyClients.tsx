import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "../../assets/images/p-1.png";
import p2 from "../../assets/images/p-2.png";
import p3 from "../../assets/images/p-3.png";
import p4 from "../../assets/images/p-4.png";
import p5 from "../../assets/images/p-5.png";
import p6 from "../../assets/images/p-6.png";
import { useRef, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const clients = [
  {
    name: "James Walker",
    image: p1,
    profession: "Businessman",
    review:
      "The best mechanical keyboard shop I've ever dealt with. Their customer service is top-notch, and the authenticity guarantee gave me total peace of mind.",
  },
  {
    name: "David Chen",
    image: p2,
    profession: "Student",
    review:
      "I couldn't be happier with my custom mechanical keyboard! The build quality is exceptional, and the team was incredibly helpful throughout the process.",
  },
  {
    name: "Ryan Patel",
    image: p3,
    profession: "Writer",
    review:
      "Amazing experience from start to finish. The keyboard I ordered was delivered quickly, and the customization options were fantastic. Highly recommend!",
  },
  {
    name: "Amanda Greene",
    image: p4,
    profession: "Graphic Designer",
    review:
      "I couldn't be happier with my custom mechanical keyboard! The build quality is exceptional, and the team was incredibly helpful throughout the process. Fast delivery, too!",
  },
  {
    name: "Tom Hernandez",
    image: p5,
    profession: "IT Specialist",
    review:
      "Their switch lubing service made a huge difference in my typing experience. Plus, the fast delivery and great customer support were a bonus!",
  },
  {
    name: "Olivia Carter",
    image: p6,
    profession: "Content Creator",
    review:
      "I’ve been a mechanical keyboard enthusiast for years, and this shop exceeded my expectations. From the product selection to the fast shipping, everything was perfect.",
  },
];

const HappyClients = () => {
  const sliderRef = useRef<Slider>(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    waitForAnimate: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerPadding: "8px",
        },
      },
    ],
    beforeChange: (_current: number, next: number) => setCenterIndex(next),
  };

  return (
    <div>
      <h3 className="text-2xl md:text-3xl mb-2 md:mb-5 text-black font-bold text-center">
        <span className="border-l-slate-200 border-l-[5px] border-t-slate-200 border-t-[5px] px-1">
          Customer Comments
        </span>
      </h3>
      <div className=" w-full overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {clients.map((client, key) => (
            <div key={key} className={`p-5 2xl:p-8`}>
              <div
                className={`bg-white space-y-2 border shadow-md p-4 rounded-md transition-transform duration-500 ${
                  key === centerIndex ? "transform scale-110" : ""
                }`}
              >
                <div className="flex justify-start items-center gap-2">
                  <div>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={client.image}
                      alt={client.name}
                    />
                  </div>
                  <div className="text-black">
                    <h3 className="font-semibold">{client.name}</h3>
                    <p className="text-sm text-opacity-50">
                      {client.profession}
                    </p>
                  </div>
                </div>
                <div className="text-start h-36">
                  <p>{client.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex mt-5 gap-2 items-center justify-center">
          <button
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.slickPrev();
              }
            }}
            className="p-3 rounded-full border-none bg-black text-white bg-opacity-50 hover:bg-black hover:bg-opacity-100"
          >
            <GrLinkPrevious />
          </button>
          <button
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.slickNext();
              }
            }}
            className="p-3 rounded-full border-none bg-black text-white bg-opacity-50 hover:bg-black hover:bg-opacity-100"
          >
            <GrLinkNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
