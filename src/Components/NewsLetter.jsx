import React from 'react';
import backgroundImage from '../assets/image/Rectangle.png'; 

const NewsLetter = () => {
  return (
    <div
      className="relative w-80% bg-cover bg-no-repeat h-[346px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute left-[20.26%] right-[16.51%] top-[58.84%] bottom-[33.73%] flex flex-col items-center justify-center">
        <h2 className="font-josefin text-[42px] leading-[49px] text-[#151875] mb-4 text-center">
          Get Latest Update By Subscribe Our Newsletter
        </h2>
        <button className="px-8 py-3 bg-[#FB2E86] text-white rounded-md hover:bg-pink-600">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
