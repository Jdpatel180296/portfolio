
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-header mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! Page not found</p>
          <a href="/" className="px-6 py-3 bg-header text-white rounded-md shadow-md hover:shadow-lg transition-all inline-block">
            Return to Home
          </a>
        </div>
      </div>

  );
};

export default NotFound;
