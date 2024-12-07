import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from "./Pages/RouteLayout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import NotFound from "./Pages/NotFound"; // Import the NotFound component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} /> {/* Default route */}
      <Route path="shop" element={<Shop />} /> {/* Shop page */}
      <Route path="*" element={<NotFound />} /> {/* Fallback for unmatched routes */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
