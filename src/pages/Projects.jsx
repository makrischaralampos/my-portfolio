// eslint-disable-next-line no-unused-vars
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-8 md:p-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="text-lg">
              A brief description of the project. Includes technologies used and
              the main goal of the project.
            </p>
            <a href="#" className="text-blue-500 dark:text-blue-400 mt-2 block">
              View on GitHub
            </a>
          </div>
          {/* Project 2 */}
          <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
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
      </div>
    </section>
  );
};

export default Projects;
