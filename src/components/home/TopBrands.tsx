import brand1 from "../../assets/images/HyperX.png";
import brand2 from "../../assets/images/ducky.png";
import brand3 from "../../assets/images/Microsoft.png";
import brand4 from "../../assets/images/Apple.png";
import brand5 from "../../assets/images/Logitech.png";
import brand6 from "../../assets/images/Corsair.png";
import brand7 from "../../assets/images/Razer.png";
import brand8 from "../../assets/images/Steelseries.png";
import Marquee from "react-fast-marquee";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

const TopBrands = () => {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl mb-2 md:mb-5 text-black font-bold text-center">
        <span className="border-l-slate-200 border-l-[5px] border-t-slate-200 border-t-[5px] px-1">
          Top Brands
        </span>
      </h3>
      <div className="py-3">
        <Marquee>
          {brands.map((brand, key) => (
            <div
              className="h-10 md:h-14 lg:h-20 mx-3 lg:mx-6 hover:cursor-text"
              key={key}
            >
              <img className="h-full" src={brand} alt="" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
