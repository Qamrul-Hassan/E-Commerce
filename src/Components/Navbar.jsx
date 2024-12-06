import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Hekto from "../assets/Image/Hekto.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".mobile-menu") && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative bg-white h-16 flex items-center justify-between px-6 md:px-10 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Hekto} alt="Hekto Logo" className="h-10 w-auto object-contain" />
      </div>

      {/* Burger Menu for Mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-2xl text-[#0D0E43] md:hidden"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-lato ${isActive ? "text-[#FB2E86]" : "text-[#0D0E43]"} hover:underline`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link to="#" className="text-[#0D0E43] font-lato text-sm hover:underline">
            Pages
          </Link>
        </li>
        <li>
          <Link to="#" className="text-[#0D0E43] font-lato text-sm hover:underline">
            Products
          </Link>
        </li>
        <li>
          <Link to="#" className="text-[#0D0E43] font-lato text-sm hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `text-sm font-lato ${isActive ? "text-[#FB2E86]" : "text-[#0D0E43]"} hover:underline`
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-lato ${isActive ? "text-[#FB2E86]" : "text-[#0D0E43]"} hover:underline`
            }
          >
            Contact
          </NavLink>
        </li>
        {/* Search Input */}
        <li>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="text-sm pl-4 pr-10 py-2 border rounded-full outline-none bg-[#F0F0F0] text-[#0D0E43]"
            />
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#FB2E86] p-2 rounded-full">
              <FaSearch className="text-white text-lg" />
            </button>
          </div>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 py-8 px-6 transform transition-transform duration-300 ease-in-out mobile-menu ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-6">
          <li>
            <NavLink
              to="/"
              className="text-[#0D0E43] font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link
              to="#"
              className="text-[#0D0E43] font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Pages
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-[#0D0E43] font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-[#0D0E43] font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <NavLink
              to="/shop"
              className="text-[#0D0E43] font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-[#0D0E43] font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
