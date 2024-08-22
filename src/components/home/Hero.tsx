import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ban1 from "../../assets/images/banner-1.png";
import ban2 from "../../assets/images/banner-2.png";
import ban3 from "../../assets/images/banner-3.png";
import ban4 from "../../assets/images/banner-4.png";
import { useRef, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
const banners = [ban1, ban2, ban3, ban4];

const Hero = () => {
  const [prevSlide, setPrevSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    waitForAnimate: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setAnimating(true);
      setPrevSlide(oldIndex);
      setCurrentSlide(newIndex);
    },
    afterChange: () => {
      setAnimating(false);
    },
  };

  return (
    <div className="relative w-full h-[190px] md:h-[350px] lg:h-[500px] overflow-hidden">
      <div className="space-x-2 absolute z-10 bottom-4 right-3">
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
      <Slider {...settings} ref={sliderRef}>
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-full h-[190px] md:h-[350px] lg:h-[500px]"
          >
            <img
              src={banner}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full hover:scale-105 hover:duration-500 transition-transform duration-1000 ease-in-out
                ${index === prevSlide && animating ? "scale-100" : ""}
                ${index === currentSlide && animating ? "scale-105" : ""}
                ${!animating ? "scale-100" : ""}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
