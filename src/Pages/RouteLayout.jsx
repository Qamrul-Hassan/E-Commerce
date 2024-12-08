
import { Outlet } from "react-router-dom";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RouteLayout = () => {
  return (
    <>
      <TopBar /> 
      <Navbar /> 
      
      <main className="container mx-auto py-4">
        <Outlet /> 
      </main>
      
      <Footer /> 
    </>
  );
};

export default RouteLayout;
