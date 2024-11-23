import React from 'react';
import discountItemImage from '../assets/Image/DiscountItem.png'; // Ensure the path is correct

const DiscountItem = () => {
  return (
    <div className="relative w-full bg-[#F1F0FF] py-16 flex justify-center items-center">
      <div className="relative w-[90%] max-w-[1200px] bg-white border-[2px] border-[#E0E0E0] rounded-lg">
        {/* Heading and Links Section */}
        <div className="flex flex-col items-center py-6">
          {/* Heading */}
          <h2 className="font-josefin text-[42px] text-[#151875] text-center mb-4">Discount Item</h2>

          {/* Links */}
          <div className="flex justify-center space-x-4">
            <button className="text-[#FB2E86] font-medium underline">Wood Chair</button>
            <button className="text-[#FB2E86] font-medium underline">Plastic Chair</button>
            <button className="text-[#FB2E86] font-medium underline">Sofa Collection</button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex">
          {/* Left Section */}
          <div className="flex-1 p-8">
            {/* Discount Text */}
            <h3 className="text-[#151875] text-[24px] font-bold mb-2">20% Discount Of All Products</h3>
            <p className="text-[#FB2E86] text-[20px] font-semibold mb-4">Eams Sofa Compact</p>
            <p className="text-sm text-[#888] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
            </p>

            {/* Features List */}
            <ul className="grid grid-cols-2 gap-4 text-[#888] text-sm mb-6">
              <li>✔ Material expose like metals</li>
              <li>✔ Clear lines and geometric figures</li>
              <li>✔ Simple neutral colours</li>
              <li>✔ Material expose like metals</li>
            </ul>

            {/* Shop Now Button */}
            <button className="px-8 py-3 bg-[#FB2E86] text-white rounded-md hover:bg-[#D02175]">
              Shop Now
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex justify-center items-center relative">
            <div className="w-[300px] h-[300px] bg-[#F1F0FF] rounded-full absolute -top-16 -right-10"></div>
            <img
              src={discountItemImage}
              alt="Eams Sofa"
              className="w-[80%] max-w-[400px] relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
