// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="w-full p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        My Portfolio
      </h1>

      {/* Full Navbar for larger screens */}
      <div className="hidden md:flex justify-between items-center space-x-4">
        <a
          href="#about"
          className="text-gray-800 dark:text-gray-300 hover:text-blue-500"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-gray-800 dark:text-gray-300 hover:text-blue-500"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-gray-800 dark:text-gray-300 hover:text-blue-500"
        >
          Contact
        </a>
        <ThemeToggle />
      </div>

      {/* Hamburger Menu for smaller screens */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)} // Toggle menu state
          className="text-gray-800 dark:text-gray-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (shown when hamburger is clicked) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md flex flex-col items-center space-y-4 py-4">
          <a
            href="#about"
            onClick={() => setIsOpen(false)} // Close menu after clicking
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)} // Close menu after clicking
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)} // Close menu after clicking
            className="text-gray-800 dark:text-gray-300 hover:text-blue-500"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
