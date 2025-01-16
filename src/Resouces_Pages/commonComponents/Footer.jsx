import React from 'react';

const Footer = ({ contact }) => {
  return (
    <footer className="mt-8 w-full bg-gray-800 py-6 text-white">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-[#00a6fb]">DevDisplay</h4>
            <p className="mt-1 text-sm">Empowering tech enthusiasts to connect, learn, and grow together.</p>
          </div>

          <div className="flex space-x-6">
            <a href="/about" className="text-sm hover:text-[#00a6fb]">
              About Us
            </a>
            <a href="/contact" className="text-sm hover:text-[#00a6fb]">
              {contact}
            </a>
            <a href="/privacy" className="text-sm hover:text-[#00a6fb]">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm hover:text-[#00a6fb]">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2024 DevDisplay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
