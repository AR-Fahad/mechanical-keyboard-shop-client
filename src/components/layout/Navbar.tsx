import { Link, NavLink } from "react-router-dom";
import keyWord from "../../assets/images/KeyWord-logo.png";
import "../../styles/nav.css";
import { IoCartOutline } from "react-icons/io5";

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
            <img src={keyWord} alt="" className="w-32" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex gap-6 items-center">
        {navLinks}
      </div>
      <div className="navbar-end">
        <Link to="/cart">
          <div className="static p-2">
            <IoCartOutline className="w-10 h-8" />
            <div className="badge absolute top-3 right-2 font-semibold">0</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
