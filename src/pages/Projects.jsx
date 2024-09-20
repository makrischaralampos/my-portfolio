// eslint-disable-next-line no-unused-vars
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Placeholder Project 1 */}
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-2">Project 1</h3>
          <p className="text-lg">
            A brief description of the project. Includes technologies used and
            the main goal of the project.
          </p>
          <a href="#" className="text-blue-500 dark:text-blue-400 mt-2 block">
            View on GitHub
          </a>
        </div>
        {/* Placeholder Project 2 */}
        <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded shadow-md">
          <h3 className="text-2xl font-bold mb-2">Project 2</h3>
          <p className="text-lg">
            A brief description of the project. Includes technologies used and
            the main goal of the project.
          </p>
          <a href="#" className="text-blue-500 dark:text-blue-400 mt-2 block">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
