import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ products, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
