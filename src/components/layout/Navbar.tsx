import { Link, NavLink } from "react-router-dom";
import keyWorld from "../../assets/images/KeyWord-logo.png";
import "../../styles/nav.css";
import { useAppSelector } from "../../redux/hooks";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/products">Products</NavLink>

      <NavLink to="/about-us">About Us</NavLink>

      <NavLink to="/contact-us">Contact Us</NavLink>

      <NavLink to="/products-management">Products Management</NavLink>
    </>
  );

  const { cart } = useAppSelector((state) => state.cart);

  // console.log(cart);

  // useEffect(() => {
  //   const handleBeforeUnload = (event: BeforeUnloadEvent) => {
  //     if (cart && cart?.length) {
  //       event.preventDefault();
  //       const message =
  //         "Are you sure you want to leave? Changes you made may not be saved.";
  //       event.returnValue = message; // Standard way for most browsers
  //       return message; // For some browsers (like older versions of Chrome)
  //     }
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [cart]);

  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow lg:hidden"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <Link to="/">
            <img src={keyWorld} alt="" className="w-32" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex gap-6 items-center">
        {navLinks}
      </div>
      <div className="navbar-end">
        <Link className="mr-6" to="/cart">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-[22px]"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span
              className={`badge badge-sm indicator-item font-semibold ${
                !cart?.length && "hidden"
              }`}
            >
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
