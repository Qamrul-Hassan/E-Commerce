
import { Outlet } from "react-router-dom"; // Import Outlet
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RouteLayout = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Outlet />  {/* This will render the content of the current route */}
      <Footer />
    </>
  );
};

export default RouteLayout;
