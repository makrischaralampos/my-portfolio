import React from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <NavBar />
      {/* Content goes here */}
      <Footer />
    </div>
  );
}

export default App;
