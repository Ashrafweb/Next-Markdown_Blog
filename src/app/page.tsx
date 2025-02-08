import React from "react";
import "tailwindcss/tailwind.css";

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400'>
          Welcome to My Blog
        </h1>
        <p className='mt-2 text-lg text-gray-300'>
          Your daily dose of tech insights and tutorials
        </p>
      </div>
    </div>
  );
}
