// eslint-disable-next-line no-unused-vars
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-8 md:p-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-lg mb-6 text-center">
          Feel free to reach out to me via the form below.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded"
            rows="4"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded dark:bg-blue-700 hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
