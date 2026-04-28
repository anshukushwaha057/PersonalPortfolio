import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `block py-3 px-4 rounded-lg transition ${
      isActive
        ? "bg-blue-100 text-blue-600 font-medium"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <>
      {/* Top Navbar */}
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
            <button onClick={() => setIsMenuOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-gray-800">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            ✕
          </button>
        </div>

        {/* Links */}
        <div className="p-4 space-y-2">
          <NavLink to="/" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/projects" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/skills" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Skills</NavLink>
          <NavLink to="/resume" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Resume</NavLink>
          <NavLink to="/contact" className={navLinkStyle} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;