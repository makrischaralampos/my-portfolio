// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";

// Lazy load components
const NavBar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <main>
          <AboutMe />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
