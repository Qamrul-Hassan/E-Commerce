import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from "./Pages/RouteLayout";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Shop from "./Pages/Shop";  // Import Shop page
import ProductDetails from "./Pages/ProductDetails";  // Import ProductDetails page
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="shop" element={<Shop />} />  {/* Shop page route */}
      <Route path="product/:id" element={<ProductDetails />} />  {/* Dynamic route for product details */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
