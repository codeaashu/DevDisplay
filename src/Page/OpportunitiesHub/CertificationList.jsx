import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faSignal, faClock, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const shareContent = (url, title, organizer) => {
  if (navigator.share) {
    navigator
      .share({
        title: title,
        text: `Check out this certification organized by ${organizer}!`,
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

// List of all the certifications that matters for developers!

const certification = [
  {
    organizer: 'Freecodecamp',
    title: 'JavaScript Algorithms and DS',
    duration: '4 Weeks',
    level: 'Intermediate',
    skills: ['JavaScript', 'Algorithms', 'Data Structures'],
    referralCode: 'devdisplay',
    ApplyLink: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
    poster: '/assets/Certifications/JavaScript Algorithms and DS.png',
    shareLink: '#javascript-algorithms-ds',
  },
];

const StyledcertificationCard = styled.div`
  position: relative;
  border: 1px solid rgb(182, 228, 250);
  background: linear-gradient(to right, rgba(15, 27, 53, 0.44), rgba(0, 43, 62, 0.43));
  border-radius: 0.5rem;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  width: 100%;
  max-width: 350px; /* Increased width */
  margin: 0.5rem; /* Decreased gap */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 172, 255, 0.6);
  }

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

  .status-user {
    width: 8px;
    height: 8px;
    margin-right: 4px;
    border-radius: 50%;
    outline: solid 2px var(--bg-color, #fff);
    background-color: var(--online-status, #00a6fb);
    transition: var(--btn-transition, 0.5s);
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
`;

const CertificationCardComponent = ({
  organizer,
  title,
  duration,
  level,
  skills,
  referralCode,
  ApplyLink,
  poster,
  shareLink,
}) => {
  return (
    <StyledcertificationCard id={shareLink.substring(1)}>
      <div className="flex items-center justify-between p-2">
        <span className="text-sm font-semibold text-white">
          <FontAwesomeIcon icon={faFlag} className="mr-1 text-[#00a6fb]" /> {organizer}
        </span>
        <a
          href={ApplyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-1000 hover:bg-gray-1000 text-semibold flex items-center rounded-full border border-[#00a6fb] px-2 py-1 text-gray-300"
        >
          <div className="status-user mr-2" />
          Certified Now
        </a>
      </div>

      <div className="h-50 relative w-full overflow-hidden rounded-xl p-2 shadow-md">
        <div className="absolute bottom-3 right-3 z-10">
          <button
            onClick={() => shareContent(window.location.href.split('#')[0] + shareLink)}
            className="bg-gray-1000 hover:bg-slate-1000 flex items-center justify-center gap-2 rounded-xl border border-[#00a6fb] bg-opacity-50 px-2 py-1 text-xs text-white backdrop-blur-md"
          >
            <FontAwesomeIcon icon={faShareAlt} />
            Share
          </button>
        </div>
        <img
          src={poster}
          alt={`${title} Poster`}
          className="h-full w-full rounded-lg object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/assets/Coming Soon.png';
          }}
        />
      </div>

      <h2 className="mt-1 p-1 text-center text-lg font-bold text-white">{title}</h2>

      <div className="flex justify-between p-2 text-sm text-[#00a6fb]">
        <span>
          <FontAwesomeIcon icon={faClock} className="mr-1 text-white" /> {duration}
        </span>
        <span>
          <FontAwesomeIcon icon={faSignal} className="mr-1 text-white" /> {level}
        </span>
      </div>

      <div className="mb-1 text-center text-sm text-gray-400">Referral Code: {referralCode}</div>

      <div className="mt-2 flex flex-wrap justify-center gap-2 p-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-gray-1000 rounded-full border border-[#00a6fb] px-2 py-1 text-xs text-gray-300">
            {skill}
          </span>
        ))}
      </div>
    </StyledcertificationCard>
  );
};

<style>
  {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300&display=swap');

          @font-face {
            font-family: "MerriweatherSans-SemiBold";
            src: url('/fonts/MerriweatherSans-SemiBold.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
                    `}
</style>;

const StyledcertificationListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem; /* Decreased gap */
  padding: 1rem;

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;

  input,
  select {
    padding: 0.75rem 1rem; /* Adjusted padding */
    border: 1px solid #00a6fb;
    border-radius: 9999px; /* fully rounded */
    background: rgba(15, 27, 53, 0.9);
    color: #ffffff;
    font-size: 1rem;
    min-width: 220px;
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: #a0aec0;
    }

    &:hover {
      background: rgba(25, 37, 67, 0.95);
      border-color: #14c8ff;
      transform: scale(1.02);
    }

    &:focus {
      outline: none;
      border-color: #14c8ff;
      box-shadow: 0 0 0 2px rgba(20, 200, 255, 0.4);
    }
  }
`;

const CertificationList = () => {
  const [skillFilter, setSkillFilter] = useState('');
  const [organizerFilter, setOrganizerFilter] = useState('');

  const filteredcertification = certification.filter((certification) => {
    const matchesSkill = skillFilter
      ? certification.skills.some((skill) => skill.toLowerCase().includes(skillFilter.toLowerCase()))
      : true;
    const matchesOrganizer = organizerFilter
      ? certification.organizer.toLowerCase().includes(organizerFilter.toLowerCase())
      : true;
    return matchesSkill && matchesOrganizer;
  });

  return (
    <>
      <FilterContainer>
        <input
          type="text"
          placeholder="Search by Domain or skills"
          value={skillFilter}
          onChange={(e) => setSkillFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by organizer"
          value={organizerFilter}
          onChange={(e) => setOrganizerFilter(e.target.value)}
        />
      </FilterContainer>
      <StyledcertificationListContainer>
        {filteredcertification.map((certification, idx) => (
          <CertificationCardComponent key={idx} {...certification} />
        ))}
      </StyledcertificationListContainer>
    </>
  );
};

export default CertificationList;
