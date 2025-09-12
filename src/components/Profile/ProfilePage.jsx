import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import profilesList from '../../ProfilesList.json';

const GlobalFont = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');
  .custom-font {
    font-family: 'Merriweather Sans', sans-serif;
  }
`;

const ProfilePage = () => {
  const { name } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileFile = profilesList.find((file) => file.replace('.json', '') === name);
        if (!profileFile) {
          setProfileData(null);
          setLoading(false);
          return;
        }
        const response = await fetch(`/data/${profileFile}`);
        const data = await response.json();
        setProfileData({ ...data, fileName: profileFile.replace('.json', '') });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [name]);

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center bg-[#0e1a34] text-white">Loading...</div>;
  }

  if (!profileData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0e1a34] text-white">Profile not found</div>
    );
  }

  return (
    <>
      <GlobalFont />
      <div className="custom-font min-h-screen bg-[#0e1a34] pt-12 text-white">
        <div className="mx-2 md:mx-16">
          <Profile data={profileData} />
        </div>
        <div className="mt-8 flex justify-center">
          <a href="https://www.devdisplay.org" target="_blank" rel="noopener noreferrer">
            <StyledButton>
              <div className="blob1" />
              <div className="inner">Visit DevDisplay</div>
            </StyledButton>
          </a>
        </div>
      </div>
    </>
  );
};

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
  animation: zoom 2s ease-in-out infinite;
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

export default ProfilePage;
