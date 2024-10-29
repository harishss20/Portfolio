import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <h1 className="text-white font-bold text-xl hover:text-red duration-300">
          Harish Portfolio
        </h1>

        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-red duration-300">
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-red duration-300"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-white hover:text-red duration-300"
          >
            Experience
          </a>
          <a
            href="mailto:harishssdev@gmail.com"
            className="text-white hover:text-red duration-300"
          >
            Contact
          </a>
        </nav>

        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-gray-800 flex flex-col items-center space-y-4 py-4 transition-all duration-300 ease-in-out">
          <a
            href="#about"
            className="text-white hover:text-red duration-300"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-red duration-300"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-white hover:text-red duration-300"
            onClick={toggleMenu}
          >
            Experience
          </a>
          <a
            href="mailto:harishssdev@gmail.com"
            className="text-white hover:text-red duration-300"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
