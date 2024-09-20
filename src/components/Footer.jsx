// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-white dark:bg-gray-800 text-center shadow-md">
      <p className="text-gray-900 dark:text-gray-300">
        © My Portfolio. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a href="#" className="text-gray-900 dark:text-gray-300">
          GitHub
        </a>
        <a href="#" className="text-gray-900 dark:text-gray-300">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
