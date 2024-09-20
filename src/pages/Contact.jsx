// eslint-disable-next-line no-unused-vars
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg mb-4">
        Feel free to reach out to me via email or connect with me on social
        media.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded"
          rows="4"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded dark:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
