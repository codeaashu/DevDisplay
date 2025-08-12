import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 py-8 text-white">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-4">
              <a href="/Home" className="text-sm hover:text-[#00a6fb]">
                Home
              </a>
              <a href="/about" className="text-sm hover:text-[#00a6fb]">
                About Us
              </a>
              <a href="/contact" className="text-sm hover:text-[#00a6fb]">
                Contact
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="/privacy" className="text-sm hover:text-[#00a6fb]">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm hover:text-[#00a6fb]">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <h4 className="text-2xl font-bold text-[#00a6fb]">DevDisplay</h4>
            <p className="mt-2 text-sm">
              DevDisplay is a global open-source tech community and organization with a mission to unite all your tech
              needs under one platform.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex items-center justify-center space-x-6 md:justify-end">
            <a
              href="https://github.com/devdisplay"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-3xl transition-transform hover:scale-110 hover:text-[#00a6fb]"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://discord.com/invite/chyt2UgTv5"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-3xl transition-transform hover:scale-110 hover:text-[#00a6fb]"
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              href="https://chat.whatsapp.com/Dcl21sgGDIpHURESSuH0p4"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-3xl transition-transform hover:scale-110 hover:text-[#00a6fb]"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/devdisplay/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-3xl transition-transform hover:scale-110 hover:text-[#00a6fb]"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://x.com/devdisplay_"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-3xl transition-transform hover:scale-110 hover:text-[#00a6fb]"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/devdisplay/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform text-3xl transition-transform hover:scale-110 hover:text-[#00a6fb]"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2024 DevDisplay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
