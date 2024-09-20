import React from "react";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="w-full p-4 flex justify-between items-center bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
