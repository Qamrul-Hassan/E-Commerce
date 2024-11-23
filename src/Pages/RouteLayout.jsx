import React from "react"; 
import { Outlet } from 'react-router-dom';
import TopBar from '../Components/TopBar'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";



const RouteLayout = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <Outlet /> 
      <Footer/>
    </>
  );
};

export default RouteLayout;
