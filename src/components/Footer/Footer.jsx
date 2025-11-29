import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {
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
            <p className="mt-2 text-sm">The First Global Platform for Developers to Fulfill All Their Tech Needs.</p>
          </div>

          {/* Column 3 */}
          <style>
            {`
              .tooltip {
                position: relative;
                display: inline-block;
                cursor: pointer;
              }

              .tooltip .tooltip-text {
                visibility: hidden;
                max-width: 140px;
                background-color: black;
                color: white;
                text-align: center;
                padding: 3px 6px;
                font-size: 0.75rem;
                border-radius: 4px;
                position: absolute;
                z-index: 10;
                bottom: 125%;
                left: 50%;
                transform: translateX(-50%);
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
                white-space: nowrap;
              }

              .tooltip .tooltip-text::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border-width: 4px;
                border-style: solid;
                border-color: black transparent transparent transparent;
              }

              .tooltip:hover .tooltip-text {
                visibility: visible;
                opacity: 1;
              }
            `}
          </style>

          <div className="flex items-center justify-center space-x-6 md:justify-end">
            <a
              href="https://github.com/devdisplay"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip transform text-3xl transition-transform hover:scale-110 hover:text-[#6B7280]" // GitHub gray
            >
              <i className="fab fa-github"></i>
              <span className="tooltip-text">GitHub</span>
            </a>
            <a
              href="https://discord.com/invite/chyt2UgTv5"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip transform text-3xl transition-transform hover:scale-110 hover:text-[#5865F2]" // Discord blue
            >
              <i className="fab fa-discord"></i>
              <span className="tooltip-text">Discord</span>
            </a>
            <a
              href="https://www.linkedin.com/company/devdisplay/"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip transform text-3xl transition-transform hover:scale-110 hover:text-[#0A66C2]" // LinkedIn blue
            >
              <i className="fab fa-linkedin-in"></i>
              <span className="tooltip-text">LinkedIn</span>
            </a>
            <a
              href="https://x.com/devdisplay_"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip transform text-3xl transition-transform hover:scale-110 hover:text-[#000000]" // X black
            >
              <i className="fab fa-x-twitter"></i>
              <span className="tooltip-text">X (formerly Twitter)</span>
            </a>
            <a
              href="https://www.instagram.com/devdisplay/"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip transform text-3xl transition-transform hover:scale-110 hover:text-[#E1306C]" // Instagram pink
            >
              <i className="fab fa-instagram"></i>
              <span className="tooltip-text">Instagram</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">© 2025 DevDisplay. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
