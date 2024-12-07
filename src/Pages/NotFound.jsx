import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../assets/Image/404.png"; // Ensure the correct path

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F5FF]">
      {/* 404 Heading */}
      <h1 className="text-[100px] md:text-[120px] font-extrabold text-pink-600">
        404
      </h1>

      {/* Not Found Image */}
      <div className="w-full flex justify-center mb-6">
        <img
          src={NotFoundImage}
          alt="Not Found"
          className="w-[80%] md:w-[600px] h-auto object-contain"
        />
      </div>

      {/* Back to Home Button */}
      <button
        className="px-6 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-400 transition-all"
        onClick={() => navigate("/")}
      >
        Back to Home Page
      </button>
    </div>
  );
};

export default NotFound;
