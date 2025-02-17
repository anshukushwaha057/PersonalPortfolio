// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="max-w-6xl mx-auto text-center">
//         <p className="mb-4">Designed &amp; Developed by Ustad</p>
//         <div className="flex justify-center space-x-6">
//           <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//             GitHub
//           </a>
//           <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//             LinkedIn
//           </a>
//           <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//             Email
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">Anshu's Portfolio</h2>
          <p className="text-sm mt-2">Building modern web experiences with MERN stack.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><NavLink to="/about" className="hover:text-blue-400">About</NavLink></li>
            <li><NavLink to="/projects" className="hover:text-blue-400">Projects</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-400">Contact</NavLink></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Connect with Me</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <Link to="https://github.com/anshukushwaha057" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaGithub />
            </Link>
            <Link to="https://linkedin.com/in/anshukushwaha057" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </Link>
            <Link to="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Anshu. All rights reserved.</p>
      </div>
    </footer>
  );
}

