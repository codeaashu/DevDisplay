import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaDiscord,
  FaStackOverflow,
  FaYoutube,
  FaDev,
  FaBehance,
  FaDribbble,
  FaFigma,
  FaCoffee,
  FaProductHunt,
  FaMedium,
  FaReddit,
} from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiHashnode, SiReplit } from 'react-icons/si';

const UnstopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 225 225" xmlns="http://www.w3.org/2000/svg">
    <circle cx="112.5" cy="112.5" r="112.5" fill="transparent" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      fill="transparent"
      fontSize="140"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      dy=".35em"
    >
      un
    </text>
  </svg>
);

const pulse = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const ProfileSkeletonWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');

  font-family: 'Merriweather Sans', sans-serif;

  .skeleton {
    background-color: rgb(13, 25, 53);
    animation: ${pulse} 1.5s infinite ease-in-out;
    border-radius: 8px;
  }

  .skeleton-circle {
    border-radius: 50%;
  }

  .skeleton-line {
    height: 1rem;
    margin-bottom: 0.5rem;
  }

  .skeleton-skill {
    height: 2rem;
    width: 4rem;
    margin-right: 0.5rem;
  }

  .skeleton-icon {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(13, 25, 53);
    border-radius: 0.25rem;
    animation: ${pulse} 1.5s infinite ease-in-out;
  }
`;

const socialIcons = {
  GitHub: <div className="skeleton-icon" />,
  Twitter: <div className="skeleton-icon" />,
  LinkedIn: <div className="skeleton-icon" />,
  Instagram: <div className="skeleton-icon" />,
  Email: <div className="skeleton-icon" />,
  Discord: <div className="skeleton-icon" />,
  LeetCode: <div className="skeleton-icon" />,
  Codeforces: <div className="skeleton-icon" />,
  StackOverflow: <div className="skeleton-icon" />,
  YouTube: <div className="skeleton-icon" />,
  DevTo: <div className="skeleton-icon" />,
  Hashnode: <div className="skeleton-icon" />,
  Behance: <div className="skeleton-icon" />,
  Dribbble: <div className="skeleton-icon" />,
  Figma: <div className="skeleton-icon" />,
  Replit: <div className="skeleton-icon" />,
  BuyMeACoffee: <div className="skeleton-icon" />,
  ProductHunt: <div className="skeleton-icon" />,
  Medium: <div className="skeleton-icon" />,
  Reddit: <div className="skeleton-icon" />,
  Unstop: <div className="skeleton-icon" />,
};

function ProfileSkeleton() {
  const skeletonData = {
    name: '',
    location: '',
    bio: '',
    avatar: '',
    portfolio: '',
    skills: ['', '', '', ''],
    social: {
      GitHub: '',
      Twitter: '',
      LinkedIn: '',
      Instagram: '',
      Email: '',
      Discord: '',
      LeetCode: '',
      Codeforces: '',
      StackOverflow: '',
      YouTube: '',
      DevTo: '',
      Hashnode: '',
      Behance: '',
      Dribbble: '',
      Figma: '',
      Replit: '',
      BuyMeACoffee: '',
      ProductHunt: '',
      Medium: '',
      Reddit: '',
      Unstop: '',
    },
    verified: false,
  };

  return (
    <ProfileSkeletonWrapper>
      <div className="font-MerriweatherSans-Light mb-[1.5rem] h-auto rounded-[10px] pb-[0rem] pl-[1rem] pr-[1rem] pt-[1rem] shadow-lg">
        <div className="flex gap-[1rem]">
          <div className="skeleton skeleton-circle h-[6.1rem] w-[6.1rem] flex-shrink-0"></div>
          <div className="w-[80%] overflow-hidden">
            <h3 className="skeleton skeleton-line w-full">
              {skeletonData.name}
              {skeletonData.verified && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  style={{ marginLeft: '8px' }}
                >
                  <circle cx="12" cy="12" r="10" fill="rgb(24, 186, 255)" />
                  <path fill="#fff" d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
                </svg>
              )}
            </h3>
            <p className="skeleton skeleton-line w-full">{skeletonData.location}</p>
            <div className="flex gap-[1rem] overflow-hidden">
              {skeletonData.skills &&
                skeletonData.skills.map((skill, index) => (
                  <div className="skeleton skeleton-skill" key={index}>
                    {skill}
                  </div>
                ))}
            </div>
          </div>
          <div className="w-[10%] justify-end overflow-hidden">
            <div className="skeleton skeleton-line h-[6rem] w-[4rem]"></div>
          </div>
        </div>
        <div className="mt-[1rem]">
          <div className="skeleton skeleton-line w-full">{skeletonData.bio}</div>
          <div className="mt-[0.5rem] flex h-[3rem] flex-wrap gap-[1rem]">
            {Object.keys(skeletonData.social).map((platform, index) => socialIcons[platform])}
          </div>
        </div>
      </div>
    </ProfileSkeletonWrapper>
  );
}

export default ProfileSkeleton;
