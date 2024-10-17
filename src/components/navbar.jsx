import React, { useState } from 'react';
import './navbar.css'; // Ensure you include your custom CSS
import { Link } from 'react-router-dom';
import logoadnan from "../assets/logoadnan.png";


function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex items-center">
            {/* Replace with your small image or icon */}
            <img src={logoadnan} alt="Adnan Logo" className="h-8 mr-2" />
            <span className="self-center text-2xl font-semibold text-white">Adnan</span>
          </div>

        </Link>

        {/* Center Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link to="/" className="block py-2 pl-3 pr-4 text-gray-700 dark:text-white">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-700 dark:text-white">Contact</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 pl-3 pr-4 text-gray-700 dark:text-white">About</Link>
            </li>
          </ul>
        </div>

        {/* Dropdown for Languages - Positioned to the Right */}
        <div className="relative ml-auto">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
          >
            Select Language
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <ul className="py-2">
                {/* English */}
                <li>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <svg className="w-5 h-5 rounded-full mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#b22234" d="M0 0h512v512H0z" />
                      <path fill="#fff" d="M0 38h512v38H0zm0 76h512v38H0zm0 76h512v38H0zm0 76h512v38H0zm0 76h512v38H0zm0 76h512v38H0zm0 76h512v38H0z" />
                      <path fill="#3c3b6e" d="M0 0h204v228H0z" />
                      <g fill="#fff">
                        <circle cx="33" cy="33" r="10" />
                        <circle cx="99" cy="33" r="10" />
                        <circle cx="165" cy="33" r="10" />
                        <circle cx="33" cy="99" r="10" />
                        <circle cx="99" cy="99" r="10" />
                        <circle cx="165" cy="99" r="10" />
                        <circle cx="33" cy="165" r="10" />
                        <circle cx="99" cy="165" r="10" />
                        <circle cx="165" cy="165" r="10" />
                      </g>
                    </svg>
                    English
                  </a>
                </li>

                {/* Français */}
                <li>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <svg className="w-5 h-5 rounded-full mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#0055A4" d="M0 0h170.7v512H0z" />
                      <path fill="#FFF" d="M170.7 0h170.7v512H170.7z" />
                      <path fill="#EF4135" d="M341.4 0h170.7v512H341.4z" />
                    </svg>
                    Français
                  </a>
                </li>

                {/* Español */}
                <li>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <svg className="w-5 h-5 rounded-full mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#C8102E" d="M0 0h512v512H0z" />
                      <path fill="#F1BF00" d="M0 102.4h512v307.2H0z" />
                    </svg>
                    Español
                  </a>
                </li>

                {/* Deutsch */}
                <li>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <svg className="w-5 h-5 rounded-full mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#000000" d="M0 0h512v170.7H0z" />
                      <path fill="#D00B20" d="M0 170.7h512v170.7H0z" />
                      <path fill="#FFD700" d="M0 341.4h512v170.7H0z" />
                    </svg>
                    Deutsch
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
