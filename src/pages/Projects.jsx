// eslint-disable-next-line no-unused-vars
import React from "react";
import projects from "../projectData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-8 md:p-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-gray-200 dark:bg-gray-700 rounded shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>

              {/* Conditional Rendering: Display image or video */}
              {project.video ? (
                <video
                  controls
                  className="w-full h-48 object-cover rounded mb-4"
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}

              {/* GitHub link */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
