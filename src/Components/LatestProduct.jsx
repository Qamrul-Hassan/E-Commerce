import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import Sale from "../assets/Image/Sale.png"; 

const ProductCard = ({ product }) => (
  <div className="bg-white shadow-md w-[270px] mx-4 my-8 rounded-md relative p-4">
    <div className="absolute top-[20px] left-[20px] transform rotate-[-18deg]">
      <img
        src={Sale}
        alt="Sale Tag"
        className="w-[85px] h-[57px] object-contain"
      />
    </div>

    <img
      src={product.image}
      alt={product.title}
      className="w-[180px] h-[180px] object-contain mx-auto mt-4"
    />

    <div className="mt-4 flex flex-col items-center gap-2">
      <h3 className="text-lg font-medium text-[#151875]">{product.title}</h3>
      <p className="text-sm text-gray-500">Comfort Handy Craft</p>
    </div>

    <div className="mt-4 flex justify-between items-center">
      <span className="text-lg font-bold text-[#151875]">
        ${product.price}
      </span>

      <span className="text-sm text-[#FB2448] line-through">
        ${(product.price * 1.5).toFixed(2)}
      </span>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

const LatestProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=6");
        const data = await response.json();

        const transformedData = data.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.thumbnail,
        }));

        setProducts(transformedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-[#151875] font-bold text-2xl mb-4">
          Latest Products
        </h2>
        <div className="flex justify-center gap-6 text-[#FB2448]">
          <span className="border-b-2 border-[#FB2448]">New Arrival</span>
          <span className="text-gray-500">Best Seller</span>
          <span className="text-gray-500">Featured</span>
          <span className="text-gray-500">Special Offer</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestProduct;
