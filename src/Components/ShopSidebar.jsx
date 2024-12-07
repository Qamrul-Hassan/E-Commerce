import React from "react";
import { FaFilter, FaStar, FaCircle } from "react-icons/fa";

const ShopSideBar = ({ activeFilters, setActiveFilters }) => {
  // Handle filter changes
  const handleFilterChange = (filterCategory, filterValue) => {
    setActiveFilters((prevState) => {
      const updatedFilters = { ...prevState };
      if (updatedFilters[filterCategory].includes(filterValue)) {
        updatedFilters[filterCategory] = updatedFilters[filterCategory].filter(
          (value) => value !== filterValue
        );
      } else {
        updatedFilters[filterCategory].push(filterValue);
      }
      return updatedFilters;
    });
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">Brand</h3>
        <div>
          {["Nike", "Adidas", "Puma", "Reebok"].map((brand) => (
            <label key={brand} className="block cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={activeFilters.brand.includes(brand)}
                onChange={() => handleFilterChange("brand", brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">Discount</h3>
        <div>
          {["10% Off", "20% Off", "30% Off", "50% Off"].map((discount) => (
            <label key={discount} className="block cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={activeFilters.discount.includes(discount)}
                onChange={() => handleFilterChange("discount", discount)}
              />
              {discount}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">Rating</h3>
        <div>
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="block cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={activeFilters.rating.includes(rating)}
                onChange={() => handleFilterChange("rating", rating)}
              />
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 inline" />
              ))}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">Categories</h3>
        <div>
          {["Electronics", "Fashion", "Home", "Books"].map((category) => (
            <label key={category} className="block cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={activeFilters.categories.includes(category)}
                onChange={() => handleFilterChange("categories", category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">Colors</h3>
        <div className="flex gap-4">
          {["Blue", "Red", "Black", "Green", "Yellow"].map((color) => (
            <label
              key={color}
              className="group flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={activeFilters.colors.includes(color)}
                onChange={() => handleFilterChange("colors", color)}
              />
              <FaCircle className={`text-${color.toLowerCase()}-500`} />
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {color}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => setActiveFilters({ brand: [], discount: [], rating: [], categories: [], colors: [] })}
          className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
        >
          <FaFilter className="mr-2 inline" />
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default ShopSideBar;
