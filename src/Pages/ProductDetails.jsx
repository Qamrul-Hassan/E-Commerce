import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus, FaHeart, FaSearchPlus } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PageLayout from "../Components/PageLayout"; // Import PageLayout component

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    const fetchRelatedProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (product) {
        const related = data.filter(
          (item) => item.category === product.category && item.id !== product.id
        );
        setRelatedProducts(related.slice(0, 4)); // Limit to 4 related products
      }
    };

    fetchProduct();
    fetchRelatedProducts();
  }, [id, product]);

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
    <PageLayout pageTitle="Product Details"> {/* Wrap content with PageLayout */}
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

          {/* Tabs Section */}
          <div className="mt-6">
            <div className="flex gap-6 border-b border-gray-200 pb-2">
              <button
                className={`${
                  activeTab === "description"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                } text-lg font-medium`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`${
                  activeTab === "info"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                } text-lg font-medium`}
                onClick={() => setActiveTab("info")}
              >
                Additional Info
              </button>
              <button
                className={`${
                  activeTab === "reviews"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                } text-lg font-medium`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
              <button
                className={`${
                  activeTab === "video"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                } text-lg font-medium`}
                onClick={() => setActiveTab("video")}
              >
                Video
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {activeTab === "description" && (
                <div className="text-gray-700 space-y-4">
                  <h2 className="text-xl font-bold">Varius tempor:</h2>
                  <p>
                    Aliquam dis vulputate vulputate integer sagittis. Faucibus
                    dolor ornare faucibus vel sed et eleifend habitasse amet.
                    Montes, mauris varius ac est bibendum. Scelerisque a, risus ac
                    ante. Velit consectetur neque, elit, aliquet. Non varius proin
                    sed urna, egestas consequat laoreet diam tincidunt. Magna
                    eget faucibus cras justo, tortor sed donec tempus. Imperdiet
                    consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
                    in fringilla vulputate nunc nec. Dui, massa viverr.
                  </p>
                  <h3 className="text-lg font-semibold">More details:</h3>
                  <ul className="list-disc pl-6">
                    <li>
                      Aliquam dis vulputate vulputate integer sagittis. Faucibus
                      ds diam arcu, nulla lobortis justo netus dis. Eu in
                      fringilla vulputate nunc nec. Dui, massa viverr.
                    </li>
                    <li>
                      Aliquam dis vulputate vulputate integer sagittis. Faucibus
                      ds diam arcu, nulla lobortis justo netus dis. Eu in
                      fringilla vulputate nunc nec. Dui, massa viverr.
                    </li>
                    <li>
                      Aliquam dis vulputate vulputate integer sagittis. Faucibus
                      ds diam arcu, nulla lobortis justo netus dis. Eu in
                      fringilla vulputate nunc nec. Dui, massa viverr.
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "info" && <div>Additional Info content here...</div>}
              {activeTab === "reviews" && <div>Reviews content here...</div>}
              {activeTab === "video" && <div>Video content here...</div>}
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">${item.price}</span>
                    <button className="p-2 bg-red-600 text-white rounded-full">
                      <FaCartPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetails;
