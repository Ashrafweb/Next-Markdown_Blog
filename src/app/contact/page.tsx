import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 p-4'>
      <h1 className='text-4xl font-bold mb-8 text-gray-100'>Get in Touch</h1>
      <div className='flex space-x-6'>
        <a
          href='https://github.com/Ashrafweb'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-100 hover:text-gray-400 transition duration-300'
        >
          <FaGithub size={40} />
        </a>
        <a
          href='mailto:mashup3223@gmail.com'
          className='text-gray-100 hover:text-gray-400 transition duration-300'
        >
          <FaEnvelope size={40} />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
