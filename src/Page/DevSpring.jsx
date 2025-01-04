import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FaCode, FaUsers } from 'react-icons/fa';

const DevSpring = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000000',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        <div className="animate-char-container">
          <style>{`
            .animate-char-container {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
            }
            .animate-char {
              display: inline-block;
              animation: bounce 1s infinite;
            }
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            .animate-char:nth-child(1) {
              animation-delay: 0s;
            }
            .animate-char:nth-child(2) {
              animation-delay: 0.1s;
            }
            .animate-char:nth-child(3) {
              animation-delay: 0.2s;
            }
            .animate-char:nth-child(4) {
              animation-delay: 0.3s;
            }
            .animate-char:nth-child(5) {
              animation-delay: 0.4s;
            }
            .animate-char:nth-child(6) {
              animation-delay: 0.5s;
            }
            .animate-char:nth-child(7) {
              animation-delay: 0.6s;
            }
            .animate-char:nth-child(8) {
              animation-delay: 0.7s;
            }
            .animate-char:nth-child(9) {
              animation-delay: 0.8s;
            }
          `}</style>

          <img src="./DevSpring.png" alt="DevSpring Logo" className="mt-2 h-[125px] w-[125px]" />
        </div>
        <h1 className="text-4xl font-bold text-[#00a6fb]">Join the Open Source Impact</h1>
        <p className="mt-2 text-lg text-gray-300">Be part of a 2-month open-source journey with DevDisplay.</p>
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
              href="https://forms.gle/orSwwE1LSYi739WT6"
              className="mt-4 inline-block w-full rounded-md bg-[#00a6fb] py-2 text-white"
            >
              Click here to fill the form
            </a>
          </div>
          <div className="rounded-lg bg-[#0f766e] p-6 text-white shadow-lg">
            <FaUsers className="mx-auto mb-4 text-4xl" />
            <h3 className="text-xl font-bold">Calling All Tech Communities</h3>
            <p className="text-sm">Community partners</p>
            <a
              href="https://forms.gle/orSwwE1LSYi739WT6"
              className="mt-4 inline-block w-full rounded-md bg-[#00a6fb] py-2 text-white"
            >
              Click here to fill the form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevSpring;
