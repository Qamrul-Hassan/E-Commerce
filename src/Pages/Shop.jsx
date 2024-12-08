import React, { useState, useEffect } from "react";
import { FaThLarge, FaList } from "react-icons/fa"; 
import { FaCartPlus, FaHeart, FaSearchPlus } from "react-icons/fa"; 
import ShopSideBar from "../Components/ShopSidebar";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import React Icons for stars
import { Link } from "react-router-dom";
import PageLayout from "../Components/PageLayout"; // Import PageLayout component

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [activeFilters, setActiveFilters] = useState({
    brand: [],
    discount: [],
    rating: [],
    categories: [],
    colors: [],
  });
  const [sortOption, setSortOption] = useState("price-low-high");
  const [viewType, setViewType] = useState("grid");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "price-low-high") return a.price - b.price;
    if (sortOption === "price-high-low") return b.price - a.price;
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) => {
    return true; // Add filter logic as needed
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to generate the rating stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars (integer part)
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star condition
    const emptyStars = 5 - fullStars - halfStars; // Empty stars

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
    <PageLayout
      pageTitle="Shop"
      subTitle="Home, Pages, Shop"
    >
      <div className="flex flex-col lg:flex-row p-8 min-h-screen gap-6">
        <div className="lg:w-1/4">
          <ShopSideBar
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        </div>

        <div className="lg:w-3/4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">
              Ecommerce Accessories & Fashion Item
            </h2>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center">
                <span className="font-medium mr-2">Per Page:</span>
                <select
                  className="border rounded px-3 py-1 text-sm"
                  value={productsPerPage}
                  onChange={(e) => {
                    setProductsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value="6">6</option>
                  <option value="12">12</option>
                  <option value="24">24</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Sort By:</span>
                <select
                  className="border rounded px-3 py-1 text-sm"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="best-match">Best Match</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">View:</span>
                <button
                  className={`p-2 rounded ${viewType === "grid" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                  onClick={() => setViewType("grid")}
                >
                  <FaThLarge className="text-gray-600 text-lg" />
                </button>
                <button
                  className={`p-2 rounded ${viewType === "list" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                  onClick={() => setViewType("list")}
                >
                  <FaList className="text-gray-600 text-lg" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Cards */}
          <div
            className={`${viewType === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}`}
          >
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white shadow-md rounded-lg overflow-hidden ${viewType === "list" ? "flex" : ""}`}
              >
                {/* Image */}
                <div className={`${viewType === "list" ? "flex-shrink-0 w-1/5" : "w-full"} p-2`}>
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-44 object-contain cursor-pointer"
                    />
                  </Link>
                </div>

                {/* Details */}
                <div className={`${viewType === "list" ? "flex-grow p-4 flex flex-col" : "p-4"}`}>
                  <div className="flex items-center justify-start gap-5 mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                  </div>

                  <div className="flex items-center justify-start gap-4 mb-2">
                    <span className="text-lg font-semibold text-blue-500">${product.price}</span>
                    <span className="text-sm line-through text-red-500 ml-2">${product.price.toFixed(2)}</span>
                  </div>

                  <div className="flex gap-1 text-yellow-500 mb-4">
                    {renderStars(product.rating.rate)} {/* Render stars here */}
                  </div>

                  <div className="flex gap-3 items-center mt-auto">
                    <button
                      className="text-white bg-red-600 p-2 rounded-full cursor-pointer"
                    >
                      <FaCartPlus />
                    </button>
                    <button
                      className="text-white bg-red-600 p-2 rounded-full cursor-pointer"
                    >
                      <FaHeart />
                    </button>
                    <button
                      className="text-white bg-blue-600 p-2 rounded-full cursor-pointer"
                    >
                      <FaSearchPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <nav>
              <ul className="flex gap-4">
                {[...Array(Math.ceil(filteredProducts.length / productsPerPage))].map((_, index) => (
                  <li key={index}>
                    <button
                      className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Shop;
