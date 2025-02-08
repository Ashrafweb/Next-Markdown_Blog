"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className='bg-gray-900 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-xl font-bold'>
          <Link href='/' className='text-white no-underline'>
            MyBlog
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden z-1000 relative'>
          <button
            onClick={toggleMenu}
            aria-label='Toggle menu'
            className='focus:outline-none'
          >
            {isOpen ? (
              <FaTimes size={24} className='absolute top-0 right-1 z-50' />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu (Overlay) */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center z-50 md:hidden transition-all duration-300 ${
            isOpen ? "flex z-10" : "hidden"
          }`}
        >
          <ul className='space-y-6'>
            <li>
              <Link
                href='/blog'
                className='text-white text-lg hover:text-gray-300 no-underline block'
                onClick={toggleMenu} // ✅ Close menu on click
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='text-white text-lg hover:text-gray-300 no-underline block'
                onClick={toggleMenu} // ✅ Close menu on click
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='text-white text-lg hover:text-gray-300 no-underline block'
                onClick={toggleMenu} // ✅ Close menu on click
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex md:items-center space-x-6'>
          <li>
            <Link
              href='/blog'
              className='text-white hover:text-gray-300 no-underline'
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='text-white hover:text-gray-300 no-underline'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='text-white hover:text-gray-300 no-underline'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
