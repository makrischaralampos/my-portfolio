// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projects from "../projectData";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      id="projects"
      className="p-8 md:p-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }} // Scale the card on hover
              whileTap={{ scale: 0.95 }} // Scale down slightly on click
              className="p-4 bg-gray-200 dark:bg-gray-700 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
