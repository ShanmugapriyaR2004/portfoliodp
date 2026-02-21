import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className=" bg-[E75151] p-4">
      <nav className="fixed top-0 left-0 w-full bg-[#E75151] p-4 z-50 ">
        <ul className="flex space-x-20 text-white h-8">
          <li className="ml-auto">
            <Link to="/" className="hover:text-black transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="About" className="hover:text-black transition-colors duration-200">About</Link>
          </li>
          <li>
            <Link to="Services" className="hover:text-black transition-colors duration-200">Services</Link>
          </li>
          <li>
            <Link to="Skills" className="hover:text-black transition-colors duration-200">Skills</Link>
          </li>
          <li>
            <Link to="Projects" className="hover:text-black transition-colors duration-200">Projects</Link>
          </li>
          <li>
            <Link to="Certifications" className="hover:text-black transition-colors duration-200">Certifications</Link>
          </li>
          <li>
            <Link to="Contact" className="hover:text-black transition-colors duration-200">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
