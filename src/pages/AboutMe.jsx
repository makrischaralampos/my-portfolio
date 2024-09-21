// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
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
      id="about"
      className="p-8 md:p-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg mb-4 text-justify">
          I am a passionate software engineer specializing in frontend
          development. I enjoy creating fast, responsive, and visually appealing
          web applications.
        </p>
        <p className="text-lg text-justify">
          Skilled in React, Tailwind CSS, and modern web technologies. I love
          learning new things and constantly improving my skill set to build
          better user experiences.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
