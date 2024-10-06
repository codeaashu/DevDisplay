// src/page/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#141d2f] text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">External Resources</h2>
          <ul>
            <li>
              <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                MDN Documentation
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Stack Overflow
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Connect with Us</h2>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-all duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-6">
        &copy; {new Date().getFullYear()} Tech Resources. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

