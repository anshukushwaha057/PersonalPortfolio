import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 px-4">
      
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Contact Us.
      </h2>

      <div className="max-w-2xl mx-auto mt-10">

        <form className="space-y-5 bg-gray-50 p-6 rounded-lg shadow-sm border">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;