import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../assets/Image/404.png"; // Replace with the correct path to your image

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#F6F5FF] h-screen">
      {/* 404 Heading */}
      <h1 className="text-[80px] md:text-[90px] font-extrabold text-pink-600 mt-4">
        404
      </h1>

      {/* Not Found Image */}
      <div className="flex-grow flex items-center justify-center">
        <img
          src={NotFoundImage}
          alt="Not Found"
          className="w-[70%] md:w-[75%] h-auto object-contain"
        />
      </div>

      {/* Back to Home Button */}
      <div className="mt-2 mb-10">
        <button
          className="px-6 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-400 transition-all"
          onClick={() => navigate("/")}
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
