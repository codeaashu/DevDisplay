import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../../components/Footer/Footer';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faShareAlt, faCalendarAlt, faClock, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-800 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/opportunities">
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
  );
};

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this Open Source opportunity!',
        text: 'Join the Open Source Program and contribute to amazing projects.',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

const Hero = () => {
  return (
    <section className="hero-section mb-0 flex min-h-[10vh] flex-col items-center justify-center text-white">
      <div className="flex w-full flex-col items-center justify-center px-8 text-center">
        {/* <h2 className="mb-4 text-6xl font-bold">
          Opportunities <span className="text-[#00a6fb]">Hub</span>
        </h2> */}
        {/* <p className="text-md md:text-md mx-auto max-w-2xl">
         One Platform, Endless Tech Opportunities
        </p> */}
        <div className="my-6"></div>
        {/* <h1 className="mb-2 text-6xl font-bold tracking-widest md:text-4xl"><span className="text-[#00a6fb]">Unlock All Tech Opportunities in One Place</span></h1> */}
        <StyledWrapper>
          <div className="modgp relative inline-block w-full py-3">
            <div className="relative">
              <div className="bg-primary enabled:hover:bg-primary-dark enabled:active:bg-primary-dark enabled:focus:bg-primary-dark px-18 relative inline-flex w-full items-center justify-center rounded-lg py-5 text-6xl font-bold text-white transition-all focus:outline-none enabled:hover:shadow-md disabled:opacity-50">
                <div className="flex w-full items-center justify-center">Open Source Display</div>
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
      </div>
    </section>
  );
};

const Tags = () => {
  const tags = [
    'Google Summer of Code',
    'MLH Fellowship',
    'Outreachy',
    'Hacktoberfest',
    'Season of Docs',
    'Linux Kernel Mentorship Program',
    'Open Mainframe Project Mentorship Program',
    'Free Software Foundation Internship',
    'Mozilla Open Source Support Program',
    'Apache Software Foundation Mentorship',
    'Red Hat Open Source Contest',
    'GirlScript Summer of Code',
    'KOSS Winter of Code',
    'Script Winter of Code',
    'Social Summer of Code',
    'DevScript Winter of Code',
    'LetsGrowMore Summer of Code',
    'CodePeak',
    'Delta Winter of Code',
    'PClub Summer of Code',
    'NJACK Winter of Code',
    'Amrita InCTF Open',
    'OpenCode',
    'Hack In The North Open Source Program',
    'IIT-BHU Open Source Program',
  ];

  return (
    <section id="tags" className="mb-0 w-full pt-12 sm:py-16">
      <h4 className="text-md text-primary font-lg mb-8 text-center text-[#00a6fb] lg:text-2xl">
        Explore the World of Open Source Opportunities!
      </h4>

      {/* Right to Left Scrolling */}
      <Marquee gradient={false} speed={60} pauseOnHover={true} loop={0} className="w-full">
        <div className="flex w-full flex-nowrap items-center">
          {[...tags, ...tags, ...tags].map((text, index) => (
            <span key={index} className="tag-item mr-6">
              {text}
            </span>
          ))}
        </div>
      </Marquee>

      <div className="my-4"></div>

      {/* Left to Right Scrolling */}
      <Marquee gradient={false} speed={60} pauseOnHover={true} loop={0} direction="right" className="w-full">
        <div className="flex w-full flex-nowrap items-center">
          {[...tags, ...tags, ...tags].map((text, index) => (
            <span key={index} className="tag-item mr-6">
              {text}
            </span>
          ))}
        </div>
      </Marquee>

      <style jsx>{`
        .tag-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          border: 1px solid #00a6fb;
          background-color: rgba(1, 11, 31, 0.58);
          color: #e2e8f0;
          font-size: 0.915rem;
          text-align: center;
          min-width: max-content;
        }
      `}</style>
    </section>
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

  :backdrop {
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
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

  button {
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    width: 300px !important;
  }

  button {
    text-transform: none;
  }

  button {
    cursor: pointer;
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
    --tw-bg-opacity: 1;
    background-color: rgba(15, 27, 53, 0);
  }

  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .py-2\.5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .font-medium {
    font-weight: 500;
  }

  .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
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

  /* Keyframes for sparkle animation */
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

  /* Add animation to sparkle elements */
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

const StyledOSProgramCard = styled.div`
  display: flex;
  flex-direction: column; /* Default to column for smaller screens */
  border: 1px solid rgb(182, 228, 250);
  background: linear-gradient(to right, rgba(15, 27, 53, 0.44), rgba(0, 43, 62, 0.43));
  border-radius: 0.5rem;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 90%; /* Adjust width for better responsiveness */
  max-width: 800px;
  margin: 1rem auto;
  padding: 1rem;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 20px rgba(0, 172, 255, 0.6);
  }

  .poster {
    width: 100%; /* Full width for smaller screens */
    height: auto;
    flex-shrink: 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;

    img {
      width: 100%; /* Ensure the image scales properly */
      max-height: 200px;
      object-fit: cover;
      display: block;
      border: 1px solid white;
      border-radius: 8px;
    }
  }

  .apply-button-wrapper {
    margin-top: 0.5rem;
    text-align: center; /* Center-align the button */

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: 1px solid #00a6fb;
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      color: #00a6fb;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.875rem;
      transition: background-color 0.3s;

      &:hover {
        background-color: rgba(0, 166, 251, 0.2);
      }

      .status-user {
        width: 8px;
        height: 8px;
        margin-right: 8px;
        border-radius: 50%;
        outline: solid 2px #fff;
        background-color: #00a6fb;
        animation: active-status 2s ease-in-out infinite;
      }

      @keyframes active-status {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.2;
        }
      }
    }
  }

  .content {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .organizer {
      font-size: 1rem;
      font-weight: bold;
      color: white;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: rgba(0, 166, 251, 0.2);
      border: 1px solid #00a6fb;
      border-radius: 0.5rem;
      padding: 0.4rem 0.8rem;
      color: white;
      font-size: 0.8rem;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: rgba(0, 166, 251, 0.4);
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h2 {
      color: white;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: white;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .info {
      display: grid;
      grid-template-columns: 1fr; /* Single column for smaller screens */
      gap: 0.5rem;
      font-size: 0.9rem;
      color: #00a6fb;

      span,
      a {
        display: flex;
        align-items: center;

        svg {
          margin-right: 0.5rem;
          color: white;
        }
      }
    }
  }

  /* Responsive styles */
  @media (min-width: 768px) {
    flex-direction: row; /* Side-by-side layout for tablets and above */
    .poster {
      width: 300px; /* Fixed width for larger screens */
    }

    .details .info {
      grid-template-columns: repeat(2, 1fr); /* Two columns for medium screens */
    }
  }

  @media (min-width: 1024px) {
    .details h2 {
      font-size: 1.5rem; /* Larger title for desktops */
    }

    .details p {
      font-size: 1rem; /* Larger description for desktops */
    }

    .details .info {
      grid-template-columns: repeat(3, 1fr); /* Three columns for larger screens */
    }
  }
`;

const OSProgramCardComponent = ({
  organizer,
  title,
  description,
  timeline,
  Duration,
  guidelines,
  applyLink,
  poster,
  shareLink,
}) => {
  const shareContent = (url) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <StyledOSProgramCard id={shareLink.substring(1)}>
      <div className="poster">
        <img
          src={poster}
          alt={`${title} Poster`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default.png';
          }}
        />
        <div className="apply-button-wrapper">
          <a href={applyLink} target="_blank" rel="noopener noreferrer">
            <div className="status-user" />
            Apply Now
          </a>
          <div className="mt-2 flex flex-col items-start gap-1 rounded-lg border border-[#00a6fb] bg-gray-900 bg-opacity-50 px-14 py-3 text-sm text-xs text-white shadow-lg backdrop-blur-md transition-all hover:bg-gray-800">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-[#00a6fb]" />
              <span className="font-medium">{timeline}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2 text-[#00a6fb]" />
              <span className="font-medium">{Duration}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <span className="organizer">
            <FontAwesomeIcon icon={faFlag} className="mr-1 text-[#00a6fb]" /> {organizer}
          </span>
          <button
            onClick={() => shareContent(window.location.href.split('#')[0] + shareLink)}
            className="bg-gray-1000 hover:bg-slate-1000 flex items-center justify-center gap-2 rounded-xl border border-[#00a6fb] bg-opacity-50 px-2 py-1 text-xs text-white backdrop-blur-md transition-colors"
          >
            <FontAwesomeIcon icon={faShareAlt} />
            Share
          </button>
        </div>
        <div className="details flex flex-col items-center gap-4">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <p className="text-center text-sm text-gray-300">{description}</p>
          <div className="info mt-2 flex flex-col items-center gap-1 rounded-lg border border-[#00a6fb] bg-gray-900 bg-opacity-50 px-14 py-3 text-sm text-white shadow-lg backdrop-blur-md transition-all hover:bg-gray-800">
            <a href={guidelines} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBookOpen} className="text-[#00a6fb]" />
              <span className="font-medium">Guidelines</span>
            </a>
          </div>
        </div>
      </div>
    </StyledOSProgramCard>
  );
};

const OSProgramList = [
  {
    organizer: 'Social and Reskilll',
    title: 'Social Summer of Code (SSoC)',
    description:
      'Social Summer of Code (SSoC) is an open-source program organized by Social and Reskilll, designed to connect students with open-source organizations and projects. It aims to promote open-source participation and provide mentorship to students.',
    timeline: 'JUN 10',
    Duration: '10 June - 23 Aug',
    type: 'Beginner-friendly, Open Source',
    guidelines: 'https://reskilll.com/hack/ssoc4',
    applyLink: 'https://reskilll.com/hack/ssoc4',
    poster: '/assets/opensourceProgram/SSOC4.png',
    shareLink: '#ssoc4',
  },
  {
    organizer: 'MLH',
    title: 'MLH Fellowship Spring 2025',
    description:
      'Collaborate with peers in a remote team to contribute to real open-source software projects under mentorship. Get paid while gaining practical development experience.',
    timeline: 'May 31',
    Duration: 'Starts May 19th',
    type: 'Student-friendly, Open Source',
    guidelines:
      'https://docs.google.com/document/d/e/2PACX-1vQ4m8tMZKfc9ZvwGXOGJOUkfGHHVpQsaLfwA2Ky1gpjK_8B9jltbs5H8jCfOS_1M-eBGmymiZL_n0TT/pub',
    applyLink: 'https://fellowship.mlh.io/',
    poster: '/assets/opensourceProgram/MLH.jpg',
    shareLink: '#mlh-fellowship',
  },
  {
    organizer: 'GirlScript Foundation',
    title: 'GirlScript Summer of Code 2025',
    description:
      'An open-source program where you can contribute to various projects and get mentorship, swags, and certifications. It’s beginner-friendly and inclusive.',
    timeline: 'July 2025',
    Duration: 'July - August 2025',
    type: 'Beginner-friendly, Open Source',
    guidelines: 'https://gssoc.girlscript.tech/',
    applyLink: 'https://gssoc.girlscript.tech/',
    poster: '/assets/opensourceProgram/GSSOC.jpg',
    shareLink: '#gssoc2025',
  },
  {
    organizer: 'DigitalOcean',
    title: 'Hacktoberfest 2025',
    description:
      'Annual event in October that encourages contributions to open source via GitHub. Complete PRs and earn swag or plant a tree!',
    timeline: 'October 1 - October 31',
    Duration: '1 Month',
    type: 'Global, Open Source',
    guidelines: 'https://hacktoberfest.com/',
    applyLink: 'https://hacktoberfest.com/',
    poster: '/assets/opensourceProgram/Hacktoberfest.jpg',
    shareLink: '#hacktoberfest2025',
  },
  // {
  //   organizer: 'Outreachy',
  //   title: 'Outreachy May 2025 Cohort',
  //   description:
  //     'Paid internships in open-source and open science for underrepresented groups. Work remotely with mentors on impactful projects.',
  //   timeline: 'January 2025',
  //   Duration: 'May - August 2025',
  //   type: 'Inclusive, Open Source, Paid',
  //   guidelines: 'https://www.outreachy.org/',
  //   applyLink: 'https://www.outreachy.org/apply/',
  //   poster: '/assets/opensourceProgram/Outreachy.jpg',
  //   shareLink: '#outreachy',
  // },
  // {
  //   organizer: 'Kharagpur Open Source Society',
  //   title: 'KOSS Winter of Code 2024-25',
  //   description:
  //     'Winter-long open-source program for students to learn and contribute to FOSS projects with mentorship and rewards.',
  //   timeline: 'November 2024',
  //   Duration: 'December - February',
  //   type: 'Student-friendly, Open Source',
  //   guidelines: 'https://kossiitkgp.org/woc',
  //   applyLink: 'https://kossiitkgp.org/woc',
  //   poster: '/assets/opensourceProgram/KOSS.jpg',
  //   shareLink: '#woc2024',
  // },
];

const OpenSourceProgram = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="background-wrapper min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Tags />
      <div className="my-4"></div>
      <div className="flex flex-wrap justify-center gap-4">
        {OSProgramList.map((program, index) => (
          <OSProgramCardComponent
            key={index}
            organizer={program.organizer}
            title={program.title}
            description={program.description}
            timeline={program.timeline}
            Duration={program.Duration}
            type={program.type}
            guidelines={program.guidelines}
            applyLink={program.applyLink}
            poster={program.poster}
            shareLink={program.shareLink}
          />
        ))}
      </div>
      <div className="my-8"></div> {/* Adds vertical spacing */}
      <Footer />
    </div>
  );
};

export default OpenSourceProgram;
