import React from 'react';
import styled from 'styled-components';

const GsocLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader-wrapper">
        <span className="loader-letter">G</span>
        <span className="loader-letter">S</span>
        <span className="loader-letter">o</span>
        <span className="loader-letter">C</span>
        <span className="loader-letter">&nbsp;</span>
        <span className="loader-letter">2</span>
        <span className="loader-letter">0</span>
        <span className="loader-letter">2</span>
        <span className="loader-letter">6</span>
        <div className="loader" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Container to reserve space for the scaled element */
  min-height: 150px;
  @media (min-width: 480px) {
    min-height: 200px;
  }
  @media (min-width: 768px) {
    min-height: 240px;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  .loader-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: auto;
    /* margin: 2rem; Removed to prevent excessive spacing when scaled */

    font-family: 'Poppins', sans-serif;
    font-size: 1.6em;
    font-weight: 600;
    user-select: none;
    color: #fff;

    scale: 1.2;

    @media (min-width: 480px) {
      scale: 1.8;
    }
    @media (min-width: 768px) {
      scale: 2.5;
    }
    @media (min-width: 1280px) {
      scale: 3;
    }
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;

    background-color: transparent;
    mask: repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px);
  }

  .loader::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image:
      radial-gradient(circle at 50% 50%, #ff0 0%, transparent 50%),
      radial-gradient(circle at 45% 45%, #f00 0%, transparent 45%),
      radial-gradient(circle at 55% 55%, #0ff 0%, transparent 45%),
      radial-gradient(circle at 45% 55%, #0f0 0%, transparent 45%),
      radial-gradient(circle at 55% 45%, #00f 0%, transparent 45%);
    mask: radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%);
    animation:
      transform-animation 2s infinite alternate,
      opacity-animation 4s infinite;
    animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
  }

  @keyframes transform-animation {
    0% {
      transform: translate(-55%);
    }
    100% {
      transform: translate(55%);
    }
  }

  @keyframes opacity-animation {
    0%,
    100% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    65% {
      opacity: 0;
    }
  }

  .loader-letter {
    display: inline-block;
    opacity: 0;
    animation: loader-letter-anim 4s infinite linear;
    z-index: 2;
  }

  .loader-letter:nth-child(1) {
    animation-delay: 0.1s;
  }
  .loader-letter:nth-child(2) {
    animation-delay: 0.205s;
  }
  .loader-letter:nth-child(3) {
    animation-delay: 0.31s;
  }
  .loader-letter:nth-child(4) {
    animation-delay: 0.415s;
  }
  .loader-letter:nth-child(5) {
    animation-delay: 0.521s;
  }
  .loader-letter:nth-child(6) {
    animation-delay: 0.626s;
  }
  .loader-letter:nth-child(7) {
    animation-delay: 0.731s;
  }
  .loader-letter:nth-child(8) {
    animation-delay: 0.837s;
  }
  .loader-letter:nth-child(9) {
    animation-delay: 0.942s;
  }
  .loader-letter:nth-child(10) {
    animation-delay: 1.047s;
  }

  @keyframes loader-letter-anim {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      text-shadow: 0 0 4px #fff;
      transform: scale(1.1) translateY(-2px);
    }
    20% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default GsocLoader;
