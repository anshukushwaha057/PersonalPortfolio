import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white py-4 px-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Anshu Portfolio</div>
        {/* Toggle Button for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex space-x-6">
          <NavLink to="/" className="hover:text-gray-400" activeClassName="text-blue-400">Home</NavLink>
          <NavLink to="/about" className="hover:text-gray-400" activeClassName="text-blue-400">About</NavLink>
          <NavLink to="/projects" className="hover:text-gray-400" activeClassName="text-blue-400">Projects</NavLink>
          <NavLink to="/skills" className="hover:text-gray-400" activeClassName="text-blue-400">Skills</NavLink>
          <NavLink to="/resume" className="hover:text-gray-400" activeClassName="text-blue-400">Resume</NavLink>
          <NavLink to="/contact" className="hover:text-gray-400" activeClassName="text-blue-400">Contact</NavLink>
        </div>
        {/* Mobile Navbar Links */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-800 text-white`}>
          <NavLink to="/" className="block py-2 px-4 hover:bg-gray-700">Home</NavLink>
          <NavLink to="/about" className="block py-2 px-4 hover:bg-gray-700">About</NavLink>
          <NavLink to="/projects" className="block py-2 px-4 hover:bg-gray-700">Projects</NavLink>
          <NavLink to="/skills" className="block py-2 px-4 hover:bg-gray-700">Skills</NavLink>
          <NavLink to="/resume" className="block py-2 px-4 hover:bg-gray-700">Resume</NavLink>
          <NavLink to="/contact" className="block py-2 px-4 hover:bg-gray-700">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
