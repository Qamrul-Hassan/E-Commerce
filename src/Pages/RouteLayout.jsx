import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RouteLayout = () => {
  return (
    <>
      <TopBar /> {/* Only include TopBar once here */}
      <Navbar /> {/* Only include Navbar once here */}
      
      <main className="container mx-auto py-4">
        <Outlet /> {/* This renders the page content */}
      </main>
      
      <Footer /> {/* Footer is also included once */}
    </>
  );
};

export default RouteLayout;
