import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Hekto from '../assets/Image/Hekto.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 h-16 flex items-center justify-between px-6 md:px-10">
      
      <div className="flex items-center">
        <img
          src={Hekto}
          alt="Hekto Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

     
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-2xl text-[#0D0E43] md:hidden"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="/" className="text-[#FB2E86] font-lato text-sm">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-[#0D0E43] font-lato text-sm">
            Pages
          </a>
        </li>
        <li>
          <a href="#" className="text-[#0D0E43] font-lato text-sm">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="text-[#0D0E43] font-lato text-sm">
            Blog
          </a>
        </li>
        <li>
          <a href="/Shop" className="text-[#0D0E43] font-lato text-sm">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="text-[#0D0E43] font-lato text-sm">
            Contact
          </a>
        </li>
      </ul>

      
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-purple-600 border-r-2 border-white shadow-lg z-50 flex flex-col items-start py-8 px-6 transform transition-all duration-700 ease-in-out ${
          isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <ul className="space-y-6">
          <li>
            <a
              href="/"
              className="text-white font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Pages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/Shop"
              className="text-white font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
