import { BiBadgeCheck, BiCustomize, BiSupport } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { GiAutoRepair, GiRibbonMedal } from "react-icons/gi";
import { MdDiscount } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

const Services = () => {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl mb-2 md:mb-5 text-black font-bold text-center">
        <span className="border-l-slate-200 border-l-[5px] border-t-slate-200 border-t-[5px] px-1">
          Services
        </span>
      </h3>
      <div className="text-black p-10 lg:p-3 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-base-100 border shadow-lg  p-5 hover:scale-105 rounded-md">
          <div className="flex justify-center items-center gap-1 font-semibold">
            <BiCustomize />
            <h3>Custom Keyboard</h3>
          </div>
          <p className="text-center text-xs md:text-sm">
            Create your perfect keyboard with our custom build services.
          </p>
        </div>
        <div className="bg-base-100 border shadow-lg p-5 hover:scale-105 rounded-md">
          <div className="flex justify-center items-center gap-1 font-semibold">
            <GiAutoRepair />
            <h3>Expert Repairs</h3>
          </div>
          <p className="text-center text-xs md:text-sm">
            Get your keyboard fixed by professionals.
          </p>
        </div>
        <div className="bg-base-100 border shadow-lg p-5 hover:scale-105 rounded-md">
          <div className="flex justify-center items-center gap-1 font-semibold">
            <FaShippingFast />
            <h3>Fast Delivery</h3>
          </div>
          <p className="text-center text-xs md:text-sm">
            Enjoy swift, secure and fast delivery on all orders.
          </p>
        </div>
        <div className="bg-base-100 border shadow-lg p-5 hover:scale-105 rounded-md">
          <div className="flex justify-center items-center gap-1 font-semibold">
            <BiBadgeCheck />
            <h3>Authenticity Guaranteed</h3>
          </div>
          <p className="text-center text-xs md:text-sm">
            100% genuine products, every time.
          </p>
        </div>
        <div className="bg-base-100 border shadow-lg p-5 hover:scale-105 rounded-md">
          <div className="flex justify-center items-center gap-1 font-semibold">
            <RxUpdate />
            <h3>Firmware Updates</h3>
          </div>
          <p className="text-center text-xs md:text-sm">
            Stay up-to-date with the latest firmware for optimal keyboard
            performance.
          </p>
        </div>
        <div className="bg-base-100 border shadow-lg p-5 hover:scale-105 rounded-md">
          <div className="flex justify-center items-center gap-1 font-semibold">
            <BiSupport />
            <h3>Customer Support</h3>
          </div>
          <p className="text-center text-xs md:text-sm">
            Our dedicated team is here to assist you with any inquiries or
            issues.
          </p>
        </div>
        <div className="bg-base-100 border shadow-lg p-5 hover:scale-105 rounded-md">
          <div className="flex justify-center items-center gap-1 font-semibold">
            <GiRibbonMedal />
            <h3>Product Warranties</h3>
          </div>
          <p className="text-center text-xs md:text-sm">
            All purchases come with a warranty for quality assurance.
          </p>
        </div>
        <div className="bg-base-100 border shadow-lg p-5 hover:scale-105 rounded-md">
          <div className="flex justify-center items-center gap-1 font-semibold">
            <MdDiscount />
            <h3>Exclusive Deals</h3>
          </div>
          <p className="text-center text-xs md:text-sm">
            Access special offers and discounts available to our loyal
            customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
