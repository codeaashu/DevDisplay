import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Sidebar() {
  const navigate = useNavigate();

  function handleHome() {
    navigate('/Home');
  }

  return (
    <div className="my-7 w-full border-r-2 border-borderSecondary px-7 font-spaceMono dark:border-borderColor md:h-[90vh] md:w-[23%] md:px-2 lg:px-7">
      <div className="mb-2 flex h-12 items-center justify-center gap-2.5">
        <img src="./WordMark.png" alt="DevDisplay Logo" className="h-64 w-auto md:h-72 lg:h-80" />
      </div>
      <div className="text-center text-secondaryColor dark:text-white">
        The First Global Platform for Developers to Fulfill All Their Tech Needs.
      </div>
      <StyledWrapper className="flex flex-row flex-wrap items-center justify-center gap-2 pt-6">
        <button className="button" onClick={handleHome}>
          <div className="blob1" />
          <div className="blob2" />
          <div className="inner">DevDisplay Universe</div>
        </button>
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: 16px;
    border: none;
    padding: 2px;
    background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
    position: relative;
    transition:
      background 0.3s,
      transform 0.3s;
    animation: zoom 3s ease-in-out infinite;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 220px; /* Ensure enough width */
  }

  .button:hover {
    transform: scale(0.98);
    animation-play-state: paused;
  }

  .button::after {
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

  .button:hover::after {
    box-shadow: 0 0 10px #ffffff18;
  }

  .blob1 {
    position: absolute;
    width: 70px;
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

  .button:hover .blob1 {
    box-shadow: -5px 5px 20px #000;
  }

  .inner {
    padding: 14px 25px;
    border-radius: 14px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
    transition: background 0.3s;
    white-space: nowrap; /* Prevents text from wrapping */
  }

  .button:hover .inner {
    background: radial-gradient(circle 80px at 80% -50%, #333333, #0f0f0f);
  }

  .inner::before {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 14px;
    background: radial-gradient(circle 60px at 0% 100%, #00e1ff1a, #0000ff11, transparent);
    position: absolute;
    transition: opacity 0.3s;
  }

  .button:hover .inner::before {
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

export default Sidebar;
