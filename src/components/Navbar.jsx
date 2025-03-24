import React, { useState } from 'react';
import { Home, User, Medal, HandHelping, Coins } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/home">
            <img src="./DevDisplay ICON.png" alt="DevDisplay" className="h-16 w-16" />
          </a>
        </div>

        {/* Links for larger screens */}
        <div className="hidden items-center gap-4 space-x-6 md:flex">
          <a href="/Home" className="flex items-center gap-2 rounded-full border border-white p-3">
            <Home className="h-6 w-6" />
            Home
          </a>
          <a href="/About" className="flex items-center gap-2 rounded-full border border-white p-3">
            <Medal className="h-6 w-6" />
            About
          </a>
          <a href="/Contribution" className="flex items-center gap-2 rounded-full border border-white p-3">
            <HandHelping className="h-6 w-6" />
            Contribution Guide
          </a>
          <a href="/DevSpring" className="flex items-center gap-2 rounded-full border border-white p-3">
            <HandHelping className="h-6 w-6" />
            DevSpring
          </a>
          <a href="/SponsorUs" className="flex items-center gap-2 rounded-full border border-white p-3">
            <Coins className="h-6 w-6" />
            Sponsor Us
          </a>

          {/* Profile Icon */}
          {/* <a href="/Profile" className="flex items-center gap-2">
            <User className="h-10 w-10 rounded-full border-2 border-white p-1" />
          </a> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="text-white focus:outline-none md:hidden" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col space-y-4 bg-gray-800 px-4 pb-4 md:hidden">
          {/* Profile Icon at the Top */}
          {/* <a
            href="/Profile"
            className={`flex transform items-center gap-2 rounded-full border border-white p-3 transition duration-500 ease-in-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } delay-[100ms]`}
          >
            <User className="h-8 w-8 rounded-full border-2 border-white p-1" />
            <span>Profile</span>
          </a> */}

          {/* Menu Items with Transition */}
          <a
            href="/Home"
            className={`flex transform items-center gap-2 rounded-full border border-white p-3 transition duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } delay-[200ms]`}
          >
            <Home className="h-6 w-6" />
            Home
          </a>
          <a
            href="/About"
            className={`flex transform items-center gap-2 rounded-full border border-white p-3 transition duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } delay-[300ms]`}
          >
            <Medal className="h-6 w-6" />
            About
          </a>
          <a
            href="/Contribution"
            className={`flex transform items-center gap-2 rounded-full border border-white p-3 transition duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } delay-[300ms]`}
          >
            <HandHelping className="h-6 w-6" />
            Contribution Guide
          </a>
          <a
            href="/DevSpring"
            className={`flex transform items-center gap-2 rounded-full border border-white p-3 transition duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } delay-[400ms]`}
          >
            <HandHelping className="h-6 w-6" />
            DevSpring
          </a>
          <a
            href="/SponsorUs"
            className={`flex transform items-center gap-2 rounded-full border border-white p-3 transition duration-500 ease-out ${
              isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            } delay-[500ms]`}
          >
            <Coins className="h-6 w-6" />
            Sponsor Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
