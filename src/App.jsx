import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from "./Pages/RouteLayout"; // Ensure this file exists and is named correctly.
import Home from "./Pages/Home"; // Ensure the file and path are correct.
import Shop from "./Pages/Shop"; // Ensure the file and path are correct.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      {/* Define nested routes */}
      <Route index element={<Home />} /> {/* This is the default route */}
      <Route path="shop" element={<Shop />} /> {/* Route for the Shop page */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
