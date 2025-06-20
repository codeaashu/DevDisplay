import React, { useEffect } from 'react';
import { ArrowLeft, Github } from 'lucide-react';
import projectsData from '../DB/projects.json';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import confetti from 'canvas-confetti';

const leaderboard = projectsData
  .map((user) => ({
    username: user.github_username,
    avatar: user.Projects?.[0]?.maker_image || '',
    projectCount: user.Projects ? user.Projects.length : 0,
  }))
  .sort((a, b) => b.projectCount - a.projectCount);

const trophyColors = ['bg-yellow-400', 'bg-purple-500', 'bg-orange-400'];

const Leaderboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.3 },
    });
  }, []);

  return (
    <div className="background-wrapper min-h-screen bg-gray-900">
      <nav className="sticky top-0 z-50 w-full bg-gray-900 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-3">
          <a href="/ProjectShowcase">
            <button className="flex items-center gap-2 rounded-full border border-white p-2 hover:bg-gray-700">
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden md:inline">Back</span>
            </button>
          </a>
          <div className="text-2xl font-bold">
            <img src="./DevDisplay ICON.png" alt="DevDisplay" className="h-12 w-12" />
          </div>
        </div>
      </nav>
      <div className="px-4 py-8 text-white">
        <div className="mb-10 text-center">
          <StyledWrapper>
            <div className="modgp relative inline-block w-full py-3">
              <div className="relative">
                <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                  <div className="flex w-full items-center justify-center">Top Project Builder</div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0">
                <div id="style-AQliM" className="animate-magic-sparkle style-AQliM pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={8}
                    width={8}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-WCb99" className="animate-magic-sparkle style-WCb99 pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={11}
                    width={11}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-dBNZV" className="animate-magic-sparkle style-dBNZV pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={9}
                    width={9}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-tiisO" className="animate-magic-sparkle style-tiisO pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={8}
                    width={8}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-re9B7" className="animate-magic-sparkle style-re9B7 pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={11}
                    width={11}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-BKG4G" className="animate-magic-sparkle style-BKG4G pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={7}
                    width={7}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-NaoVe" className="animate-magic-sparkle style-NaoVe pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={8}
                    width={8}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-pwIlv" className="animate-magic-sparkle style-pwIlv pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={11}
                    width={11}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-QmcAd" className="animate-magic-sparkle style-QmcAd pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={7}
                    width={7}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
                <div id="style-VG2eL" className="animate-magic-sparkle style-VG2eL pointer-events-none absolute z-10">
                  <svg
                    style={{ filter: 'drop-shadow(rgb(96, 165, 250) 0px 0px 2px)' }}
                    fill="none"
                    viewBox="0 0 68 68"
                    height={11}
                    width={11}
                    className="animate-spin-slow"
                  >
                    <path
                      fill="white"
                      d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </StyledWrapper>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-lg font-semibold text-[#00a6fb]">Live Global Leaderboard</span>
            {/* <img
                            src="https://d8it4huxumps7.cloudfront.net/uploads/images/66ebce3b69885_leaderboard.svg"
                            alt="Leaderboard Icon"
                            className="h-6 w-6"
                        /> */}
          </div>
        </div>

        {/* Top 3 Leaderboard Cards */}
        <div className="mb-12 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3">
          {leaderboard.slice(0, 3).map((user, idx) => (
            <StyledDot key={user.username}>
              <div className="project-card group relative block h-full w-80 rounded-lg border border-white bg-gradient-to-r from-[rgba(15,27,53,0.9)] to-[rgba(0,43,62,0.6)] p-6 shadow-lg transition duration-300 hover:scale-105 hover:transform">
                <span className="absolute inset-0"></span>
                <div className="custom-font project-card-inner relative z-10 flex h-full flex-col justify-between rounded-lg p-[2px]">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <a href={`https://github.com/${user.username}`} target="_blank" rel="noopener noreferrer">
                        <img
                          src={user.avatar}
                          alt={user.username}
                          className="h-24 w-24 cursor-pointer rounded-full border-4 border-solid"
                          style={{ borderColor: '#00a6fb', objectFit: 'cover' }}
                        />
                      </a>
                      <div
                        className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full border-2 text-3xl"
                        style={{
                          background: 'rgba(0, 34, 48, 0.96)',
                          color: '#00a6fb',
                          borderColor: '#00a6fb',
                        }}
                      >
                        {idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}
                      </div>
                    </div>
                    <h3 className="mb-4 mt-2 text-lg font-semibold text-[#00a6fb]">
                      <a
                        href={`https://github.com/${user.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 no-underline"
                        style={{ textDecoration: 'none' }}
                      >
                        <i className="fab fa-github" style={{ color: '#00a6fb', fontSize: 18 }}></i>
                        <span style={{ fontSize: 18 }}>{user.username}</span>
                      </a>
                    </h3>
                    <StyledButton style={{ marginTop: 0 }}>
                      <div className="blob1" />
                      <div className="inner">{user.projectCount} Projects</div>
                    </StyledButton>
                  </div>
                </div>
                <div className="dot" />
              </div>
            </StyledDot>
          ))}
        </div>

        {/* Other Leaderboard Table */}
        <div className="overflow-x-auto rounded-xl bg-gray-900 p-4 shadow-md">
          <table className="min-w-full divide-y divide-gray-700 text-sm">
            <thead className="text-left text-gray-300">
              <tr>
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Builder</th>
                <th className="px-4 py-2">Projects</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {leaderboard.slice(3).map((user, idx) => (
                <tr key={user.username} className="hover:bg-gray-800">
                  <td className="px-4 py-3 font-bold text-[#00a6fb]">#{idx + 4}</td>
                  <td className="flex items-center gap-3 px-4 py-3">
                    <img src={user.avatar} alt={user.username} className="h-8 w-8 rounded-full border" />
                    <span>{user.username}</span>
                  </td>
                  <td className="px-4 py-3">{user.projectCount} projects</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .relative {
    position: relative;
  }
  .inline-block {
    display: inline-block;
  }
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .inset-0 {
    inset: 0;
  }
  .inline-flex {
    display: inline-flex;
  }
  .justify-center {
    justify-content: center;
  }
  .rounded-lg {
    border-radius: 0.5rem;
  }
  .bg-primary {
    background-color: rgba(15, 27, 53, 0);
  }
  .py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }
  .font-bold {
    font-weight: 700;
  }
  .text-white {
    color: #fff;
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }
  #style-AQliM.style-AQliM {
    top: 1%;
    left: 99%;
  }
  #style-WCb99.style-WCb99 {
    top: 7%;
    left: 1%;
  }
  #style-dBNZV.style-dBNZV {
    top: 93%;
    left: 23%;
  }
  #style-tiisO.style-tiisO {
    top: 43%;
    left: 15%;
  }
  #style-re9B7.style-re9B7 {
    top: 93%;
    left: 9%;
  }
  #style-BKG4G.style-BKG4G {
    top: 21%;
    left: 88%;
  }
  #style-NaoVe.style-NaoVe {
    top: 99%;
    left: 95%;
  }
  #style-pwIlv.style-pwIlv {
    top: 64%;
    left: 99%;
  }
  #style-QmcAd.style-QmcAd {
    top: 14%;
    left: 45%;
  }
  #style-VG2eL.style-VG2eL {
    top: 2%;
    left: 48%;
  }
  @keyframes sparkle {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .animate-magic-sparkle {
    animation: sparkle 2s infinite;
  }
  .style-AQliM {
    animation-delay: 0.5s;
  }
  .style-WCb99 {
    animation-delay: 0.33s;
  }
  .style-dBNZV {
    animation-delay: 0.6s;
  }
  .style-tiisO {
    animation-delay: 0.9s;
  }
  .style-re9B7 {
    animation-delay: 1.2s;
  }
  .style-BKG4G {
    animation-delay: 1.5s;
  }
  .style-NaoVe {
    animation-delay: 1.8s;
  }
  .style-pwIlv {
    animation-delay: 1.9s;
  }
  .style-QmcAd {
    animation-delay: 1.4s;
  }
  .style-VG2eL {
    animation-delay: 1.7s;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  padding: 1px;
  background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
  position: relative;
  transition:
    background 0.3s,
    transform 0.3s;
  animation: zoom 3s ease-in-out infinite;
  margin-top: 16px;

  &:hover {
    transform: scale(0.98);
    animation-play-state: paused;
  }

  &::after {
    content: '';
    position: absolute;
    width: 65%;
    height: 60%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
    transition: box-shadow 0.3s;
  }

  &:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }

  .blob1 {
    position: absolute;
    width: 50px;
    height: 100%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(circle 60px at 0% 100%, #3fe9ff, #0000ff80, transparent);
    box-shadow: -10px 10px 30px #0051ff2d;
    transition:
      background 0.3s,
      box-shadow 0.3s;
  }

  &:hover .blob1 {
    box-shadow: -5px 5px 20px #000;
  }

  .inner {
    padding: 10px 20px;
    border-radius: 12px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
    transition: background 0.3s;
  }

  &:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }

  .inner::before {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    background: radial-gradient(circle 60px at 0% 100%, #00e1ff1a, #0000ff11, transparent);
    position: absolute;
    transition: opacity 0.3s;
  }

  &:hover .inner::before {
    opacity: 0;
  }

  @keyframes zoom {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

const StyledDot = styled.div`
  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 0;
    top: 0;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0% {
      top: 0;
      right: 0;
    }
    25% {
      top: 0;
      right: calc(100% - 5px);
    }
    50% {
      top: calc(100% - 5px);
      right: calc(100% - 5px);
    }
    75% {
      top: calc(100% - 5px);
      right: 0;
    }
    100% {
      top: 0;
      right: 0;
    }
  }
`;

export default Leaderboard;
