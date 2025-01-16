import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { FaCode, FaUsers, FaUniversity, FaHandshake } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1e293b] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/home">
          <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-[#334155]">
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline">Back</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

// const SectionButton = ({ label }) => (
//   <button className="w-full rounded-md border border-gray-700 bg-[#475569] px-4 py-2 text-sm font-medium text-white hover:bg-[#64748b] md:w-auto">
//     {label}
//   </button>
// );

const Footer = () => {
  return (
    <footer className="mt-8 w-full bg-[#1e293b] py-6 text-white">
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
              Contact
            </a>
            <a href="/privacy" className="text-sm hover:text-[#00a6fb]">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm hover:text-[#00a6fb]">
              Terms of Service
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-lg hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-lg hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-lg hover:text-[#00a6fb]"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-lg hover:text-[#00a6fb]"></i>
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

const DevSpring = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="bg-[#334155] py-3 text-center text-white">
        <p className="text-xl font-bold">
          Powered By Dev<span className="text-[#00a6fb]">Display</span>
        </p>
        <div className="mx-auto mt-3 flex w-full max-w-xs items-center justify-center gap-2">
          <img src="./DevDisplay ICON.png" alt="DevDisplay Logo" className="h-10 w-10" />
        </div>
      </div>
      <main className="mx-auto max-w-6xl px-4 py-10 text-center">
        <div className="flex flex-col items-center">
          <h1 className="relative flex text-center text-6xl font-extrabold tracking-wide">
            <span className="neon-glitch text-white">{'{'}</span>
            <span className="neon-glitch text-[#FF3366]">D</span>
            <span className="neon-glitch text-[#FF3366]">e</span>
            <span className="neon-glitch text-[#FF3366]">v</span>
            <span className="neon-glitch text-[#00FFCC]">S</span>
            <span className="neon-glitch text-[#00FFCC]">p</span>
            <span className="neon-glitch text-[#00FFCC]">r</span>
            <span className="neon-glitch text-[#FFDA00]">i</span>
            <span className="neon-glitch text-[#FFDA00]">n</span>
            <span className="neon-glitch text-[#FFDA00]">g</span>
            <span className="neon-glitch text-white">{'}'}</span>
          </h1>

          <style jsx>{`
            @keyframes neon-pulse {
              0% {
                text-shadow:
                  0 0 5px #ff3366,
                  0 0 10px #ff3366,
                  0 0 20px #ff3366,
                  0 0 40px #ff3366,
                  0 0 80px #ff3366,
                  0 0 120px #ff3366;
              }
              50% {
                text-shadow:
                  0 0 10px #00ffcc,
                  0 0 20px #00ffcc,
                  0 0 40px #00ffcc,
                  0 0 80px #00ffcc,
                  0 0 120px #00ffcc,
                  0 0 200px #00ffcc;
              }
              100% {
                text-shadow:
                  0 0 5px #ffda00,
                  0 0 10px #ffda00,
                  0 0 20px #ffda00,
                  0 0 40px #ffda00,
                  0 0 80px #ffda00,
                  0 0 120px #ffda00;
              }
            }

            @keyframes glitch-shift {
              0%,
              100% {
                transform: translate(0, 0);
              }
              25% {
                transform: translate(2px, -2px);
              }
              50% {
                transform: translate(-3px, 3px);
              }
              75% {
                transform: translate(1px, -1px);
              }
            }

            @keyframes rotate-3d {
              0%,
              100% {
                transform: rotateX(0deg) rotateY(0deg);
              }
              50% {
                transform: rotateX(15deg) rotateY(15deg);
              }
            }

            .neon-glitch {
              display: inline-block;
              animation:
                neon-pulse 2.5s infinite alternate,
                glitch-shift 3s infinite ease-in-out,
                rotate-3d 6s infinite ease;
              color: inherit;
              position: relative;
            }

            .neon-glitch::before,
            .neon-glitch::after {
              content: attr(data-char);
              position: absolute;
              top: 0;
              left: 0;
              color: #ff3366;
              opacity: 0.7;
              z-index: -1;
            }

            .neon-glitch::before {
              transform: translate(3px, -3px);
              animation: glitch-shift 1.5s infinite ease-in-out reverse;
            }

            .neon-glitch::after {
              transform: translate(-3px, 3px);
              animation: glitch-shift 1.5s infinite ease-in-out;
            }
          `}</style>

          <img src="./DevSpring.png" alt="DevSpring Logo" className="mt-2 h-[125px] w-[125px]" />
        </div>
        <h1 className="text-4xl font-bold text-[#00a6fb]">2 Month Open Source Impact</h1>
        <p className="mt-2 text-lg text-gray-300">
          Join the DevSpring & Be a part of 2 month Open Source Impact With DevDisplay.
        </p>
        <p className="mt-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 p-4 text-lg text-white shadow-lg">
          <span role="img" aria-label="hurry up" className="mr-2 text-2xl">
            ⏰
          </span>
          <span className="font-semibold">
            10<sup>th</sup> January to 10<sup>th</sup> March
          </span>
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-[#1e3a8a] p-6 text-white shadow-lg">
            <FaCode className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold">Calling All Developers</h3>
            <p className="text-sm">Open source contributors</p>
            <a
              href="https://forms.gle/yNDEHgUQgdNJqo5w5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-md bg-[#00a6fb] py-2 text-white"
            >
              Click here to join
            </a>
          </div>
          <div className="rounded-lg bg-[#0f766e] p-6 text-white shadow-lg">
            <FaUsers className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold">Calling All Tech Communities</h3>
            <p className="text-sm">Community partners</p>
            <a
              href="https://swift-sheet-b33.notion.site/DevDisplay-Community-Partnership-Guidelines-1717d1f1565b8033a86fe37facd28e1d"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-md bg-[#00a6fb] py-2 text-white"
            >
              Click here to join
            </a>
          </div>
          <div className="rounded-lg bg-[#7c3aed] p-6 text-white shadow-lg">
            <FaUniversity className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold">Calling All College Students</h3>
            <p className="text-sm">Community Leader</p>
            <a
              href="https://forms.gle/sSrhxLxdNbLH3h1q6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-md bg-[#00a6fb] py-2 text-white"
            >
              Click here to join
            </a>
          </div>
          <div className="rounded-lg bg-[#dc2626] p-6 text-white shadow-lg">
            <FaHandshake className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold">Calling All Sponsors</h3>
            <p className="text-sm">Support the initiative</p>
            <a
              href="https://swift-sheet-b33.notion.site/DevDisplay-Sponsership-Guidelines-1727d1f1565b802da284d39fdf7fd72b"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block w-full rounded-md bg-[#00a6fb] py-2 text-white"
            >
              Click here to join
            </a>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 p-4 text-lg text-white shadow-lg">
          <div className="rounded-lg bg-[#1e3a8a] p-6 text-white shadow-lg">
            <h3 className="text-xl font-bold">Guidelines</h3>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href="https://swift-sheet-b33.notion.site/Contribution-Guidelines-17c7d1f1565b800a99bbfa19f80e1896?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-md bg-[#00a6fb] py-2 text-center text-white"
              >
                Contribution Guidelines
              </a>
              <a
                href="https://swift-sheet-b33.notion.site/DevSpring-Community-Leader-Guide-17c7d1f1565b800dd9e7fc96473437fec?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-md bg-[#00a6fb] py-2 text-center text-white"
              >
                Community Leader Guide
              </a>
              <a
                href="https://swift-sheet-b33.notion.site/DevSpring-Community-Partners-Guide-1787d1f1565b8002adb4d2f1f499217b?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-md bg-[#00a6fb] py-2 text-center text-white"
              >
                Community Partner Guide
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DevSpring;
