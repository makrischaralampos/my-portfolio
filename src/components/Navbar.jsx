// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="w-full p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        My Portfolio
      </h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-800 dark:text-gray-300">
          About
        </Link>
        <Link to="/projects" className="text-gray-800 dark:text-gray-300">
          Projects
        </Link>
        <Link to="/contact" className="text-gray-800 dark:text-gray-300">
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
