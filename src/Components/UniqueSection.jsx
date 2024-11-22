import React from 'react';
import TrendingImage from '../assets/Image/Trending.png'; 

const UniqueSection = () => {
  return (
    <div className="relative w-full h-[479px] bg-[#F1F0FF] flex items-center">
      
      <div className="flex-1 flex justify-center">
        <img
          src={TrendingImage} 
          alt="Trending Sofa"
          className="h-auto max-w-[400px] object-cover"
        />
      </div>

      
      <div className="flex-1 px-28 space-y-6">
        <h2 className="text-4xl font-bold text-[#1A1242] font-josefin">
          Unique Features Of Latest & Trending Products
        </h2>
        <ul className="space-y-4 text-lg text-[#1A1242] font-lato">
          <li className="flex items-center space-x-3">
            <span className="w-4 h-4 rounded-full bg-pink-500"></span>
            <span>All frames constructed with hardwood solids and laminates</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-4 h-4 rounded-full bg-blue-500"></span>
            <span>
              Reinforced with double wood dowels, glue, screw - nails corner blocks and
              machine nails
            </span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-4 h-4 rounded-full bg-green-500"></span>
            <span>Arms, backs and seats are structurally reinforced</span>
          </li>
        </ul>
        <div className="flex flex-col mt-8 space-y-2">
          <button className="px-6 py-3 text-white bg-pink-500 rounded-md hover:bg-pink-600 font-lato">
            Add To Cart
          </button>
          <p className="text-lg font-medium text-[#1A1242] font-lato">
            B&B Italian Sofa <span className="font-bold text-pink-500">$32.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniqueSection;
