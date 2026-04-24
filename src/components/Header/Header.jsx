import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `hover:text-blue-500 transition ${
      isActive ? "text-blue-600 font-medium" : "text-gray-700"
    }`;

  return (
    <nav className="bg-white border-b shadow-sm py-4 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-lg font-semibold text-gray-800">
          Anshu Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-sm">
          <NavLink to="/" className={navLinkStyle}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyle}>About</NavLink>
          <NavLink to="/projects" className={navLinkStyle}>Projects</NavLink>
          <NavLink to="/skills" className={navLinkStyle}>Skills</NavLink>
          <NavLink to="/resume" className={navLinkStyle}>Resume</NavLink>
          <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-2 px-4 text-sm">
          <NavLink to="/" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/projects" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/skills" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
          <NavLink to="/resume" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Resume</NavLink>
          <NavLink to="/contact" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;