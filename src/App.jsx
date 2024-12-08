import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RouteLayout from "./Pages/RouteLayout";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Shop from "./Pages/Shop";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";
import LoginPage from "./Pages/LoginPage";  // Import LoginPage

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="shop" element={<Shop />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="login" element={<LoginPage />} />  {/* Add route for LoginPage */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
