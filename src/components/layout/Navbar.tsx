import { Link, NavLink } from "react-router-dom";
import keyWorld from "../../assets/images/KeyWord-logo.png";
import "../../styles/nav.css";
import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);

  const navLinks = (
    <>
      <NavLink onClick={closeMenu} to="/">
        Home
      </NavLink>

      <NavLink onClick={closeMenu} to="/products">
        Products
      </NavLink>

      <NavLink onClick={closeMenu} to="/about-us">
        About Us
      </NavLink>

      <NavLink onClick={closeMenu} to="/contact-us">
        Contact Us
      </NavLink>

      <NavLink onClick={closeMenu} to="/products-management">
        Products Management
      </NavLink>
    </>
  );

  const { cart } = useAppSelector((state) => state.cart);

  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="drawer lg:hidden">
          <input
            id="my-drawer-2"
            type="checkbox"
            checked={menu}
            className="drawer-toggle"
          />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              onClick={openMenu}
              htmlFor="my-drawer-2"
              role="button"
              className="btn btn-ghost"
            >
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
            </label>
          </div>
          <div className={`drawer-side z-50`}>
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
              onClick={closeMenu}
            ></label>
            <ul className="menu bg-black text-white min-h-full w-64 md:w-80 p-4">
              {/* Sidebar content here */}
              {navLinks}
            </ul>
          </div>
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
