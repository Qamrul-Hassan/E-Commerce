import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShopList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log(response.data.products); // Ensure you're getting products and images
        setProducts(response.data.products);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <div className="common-header">
        <h1>Shop List View</h1>
      </div>

      <div className="list-container space-y-6 p-6">
        {/* Check if we have products and render the list */}
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card flex items-center space-x-6 p-4 bg-white shadow-md rounded">
              {/* Product Image on the Left */}
              <img
                src={product.images[0]} // Accessing the first image
                alt={product.name}
                className="w-32 h-32 object-cover"
                onError={(e) => e.target.src = 'fallback-image.jpg'} // Optional fallback
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <p className="font-semibold mt-4">${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p> // In case products are not loaded
        )}
      </div>
    </div>
  );
};

export default ShopList;
