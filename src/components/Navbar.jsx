// eslint-disable-next-line no-unused-vars
import React from "react";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="w-full p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        My Portfolio
      </h1>
      <div className="space-x-4">
        <a href="#about" className="text-gray-800 dark:text-gray-300">
          About
        </a>
        <a href="#projects" className="text-gray-800 dark:text-gray-300">
          Projects
        </a>
        <a href="#contact" className="text-gray-800 dark:text-gray-300">
          Contact
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
