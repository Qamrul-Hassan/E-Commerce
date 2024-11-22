import React from "react"; 
import { Outlet } from 'react-router-dom';
import TopBar from '../Components/TopBar'
import Navbar from '../Components/Navbar'



const RouteLayout = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <Outlet /> 
    </>
  );
};

export default RouteLayout;
