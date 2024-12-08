import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus, FaHeart, FaSearchPlus } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; 

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const rating = product.rating.rate; 

  
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; 
    const emptyStars = 5 - fullStars - halfStars; 

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {halfStars > 0 && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex gap-6">
          
          <div className="w-1/4 flex flex-col gap-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-24 object-contain cursor-pointer"
            />
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-24 object-contain cursor-pointer"
            />
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-24 object-contain cursor-pointer"
            />
          </div>

        
          <div className="w-1/4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover"
            />
          </div>

          
          <div className="w-1/4 flex flex-col justify-between">
            <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold text-blue-500">
                ${product.price}
              </span>
              {product.price < product.price * 1.2 && (
                <span className="text-sm line-through text-red-500">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
              )}
            </div>
            <div className="flex space-x-1 text-yellow-500 mt-2">
              {renderStars(rating)} 
            </div>

            
            <p className="text-gray-600 mt-4">{product.description}</p>

            
            <div className="flex gap-2 mt-4">
              <span className="font-medium">Colors:</span>
              <div className="flex space-x-2">
                <span className="w-6 h-6 bg-yellow-400 rounded-full"></span>
                <span className="w-6 h-6 bg-red-500 rounded-full"></span>
                <span className="w-6 h-6 bg-blue-700 rounded-full"></span>
              </div>
            </div>

            
            <div className="flex gap-3 items-center mt-6">
              <button className="text-white bg-red-600 p-2 rounded-full cursor-pointer">
                <FaCartPlus />
              </button>
              <button className="text-white bg-red-600 p-2 rounded-full cursor-pointer">
                <FaHeart />
              </button>
              <button className="text-white bg-blue-600 p-2 rounded-full cursor-pointer">
                <FaSearchPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
