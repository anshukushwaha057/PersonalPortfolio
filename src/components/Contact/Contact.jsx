import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <div className="max-w-2xl mx-auto mt-8 px-4">
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-700 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-700 text-white" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-700 text-white" rows="4"></textarea>
          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
