import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1350&q=80')", // Replace with your preferred image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-[120px] font-extrabold leading-none">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Oops! Page Not Found</h2>
        <p className="mt-2 text-gray-300 max-w-xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
