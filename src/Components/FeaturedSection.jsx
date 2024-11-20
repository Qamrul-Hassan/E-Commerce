import React from "react";


import product1 from "../assets/image/image-1.png";
import product2 from "../assets/image/image-2.png";
import product3 from "../assets/image/image-3.png";
import product4 from "../assets/image/image-4.png";


import { FaCartPlus, FaHeart, FaSearchPlus } from "react-icons/fa";

const FeaturedSection = () => {
  const products = [
    {
      id: 1,
      image: product1,
      title: "Cantilever Chair",
      code: "Code - Y523201",
      price: "$42.00",
      colors: [
        { code: "#05E6B7" },
        { code: "#F701A8" },
        { code: "#00009D" },
      ],
    },
    {
      id: 2,
      image: product2,
      title: "Modern Sofa",
      code: "Code - M853402",
      price: "$58.00",
      colors: [
        { code: "#05E6B7" },
        { code: "#F701A8" },
        { code: "#00009D" },
      ],
    },
    {
      id: 3,
      image: product3,
      title: "Minimalist Chair",
      code: "Code - T621104",
      price: "$35.00",
      colors: [
        { code: "#05E6B7" },
        { code: "#F701A8" },
        { code: "#00009D" },
      ],
    },
    {
      id: 4,
      image: product4,
      title: "Elegant Chair",
      code: "Code - L978003",
      price: "$68.00",
      colors: [
        { code: "#05E6B7" },
        { code: "#F701A8" },
        { code: "#00009D" },
      ],
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-gray-600">Check out our top picks for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden relative"
            >
              <div className="bg-gray-100 h-60 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-pink-500">{product.title}</h3>
                <p className="text-gray-500 text-sm mt-2 mb-3">{product.code}</p>

                <div className="flex mt-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="inline-block w-3 h-1 mr-1 mb-3"
                      style={{ backgroundColor: color.code }}
                    ></span>
                  ))}
                </div>

                <p className="text-gray-800 font-semibold text-lg">{product.price}</p>

                
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="text-[#6fcfef] text-1xl hover:text-pink-400 cursor-pointer">
                    <FaCartPlus />
                  </div>
                  <div className="text-[pink] text-1xl hover:text-pink-400 cursor-pointer">
                    <FaHeart />
                  </div>
                  <div className="text-[#6fcfef] text-1xl hover:text-pink-400 cursor-pointer">
                    <FaSearchPlus />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
