import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarkerAlt, faCalendarAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const shareContent = (url, imageUrl) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this hackathon!',
        text: 'I found this amazing hackathon opportunity.',
        url: url,
        files: [new File([imageUrl], 'poster.jpg', { type: 'image/jpeg' })],
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

const hackathons = [
  {
    organizer: 'NAMESPACE Community',
    title: 'HACKHAZARDS 25',
    location: 'Online',
    date: 'Apr 11 - 20',
    domains: ['Open Innovation', 'No Restrictions'],
    applyLink: 'https://hackhazards25.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/HACKHAZARDS 25.webp',
    shareLink: '#HACKHAZARDS-25',
  },
  {
    organizer: 'Code Rangers X Geek Room',
    title: 'Code Nakshatra',
    location: 'Greater Noida, India',
    date: 'Apr 3 - 4',
    domains: ['Open Innovation', 'No Restrictions'],
    applyLink: 'https://code-nakshatra.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/Code Nakshatra.webp',
    shareLink: '#Code-Nakshatra',
  },
  {
    organizer: 'Oracle',
    title: 'Hack Heist',
    location: 'Canava',
    date: '10 May',
    domains: ['AI/ML', 'Web'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
    shareLink: '#hack-heist',
  },
  {
    organizer: 'Google',
    title: 'Code With Google',
    location: 'Online',
    date: '12 April',
    domains: ['Blockchain', 'Web', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
    shareLink: '#code-with-google',
  },
  {
    organizer: 'HackClub',
    title: 'Technovate 2025',
    location: 'Delhi, India',
    date: '30 May',
    domains: ['Gaming', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
    shareLink: '#technovate-2025',
  },
  {
    organizer: 'Oracle',
    title: 'Hack Heist',
    location: 'Canava',
    date: '10 May',
    domains: ['AI/ML', 'Web'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
    shareLink: '#hack-heist',
  },
  {
    organizer: 'Hacknexus 2025',
    title: 'Technovate 2025',
    location: 'Delhi, India',
    date: '30 May',
    domains: ['Gaming', 'Mobile'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
    shareLink: '#Hacknexus-2025',
  },
  {
    organizer: 'Oracle',
    title: 'Hack nest',
    location: 'Canava',
    date: '10 May',
    domains: ['AI/ML', 'Web'],
    applyLink: '#',
    poster: '/assets/FeaturedIn/ieeeIGDTUW.jpg',
    shareLink: '#hack-nest',
  },
  // ... Add others similarly
];

const StyledHackathonCard = styled.div`
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

const HackathonCardComponent = ({ organizer, title, location, date, domains, applyLink, poster, shareLink }) => {
  return (
    <StyledHackathonCard id={shareLink.substring(1)}>
      {/* <div className="dot"></div> */}
      <div className="flex items-center justify-between p-2">
        <span className="text-sm font-semibold text-white">
          <FontAwesomeIcon icon={faFlag} className="mr-1 text-[#00a6fb]" /> {organizer}
        </span>
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-1000 hover:bg-gray-1000 relative flex items-center rounded-full border border-[#00a6fb] px-2 py-1 text-xs text-gray-300"
        >
          <div className="status-user" style={{ marginRight: '8px' }} />
          Apply Now
        </a>
      </div>

      <div className="h-50 w-full overflow-hidden rounded-xl p-2 shadow-md">
        <img
          src={poster}
          alt={`${title} Poster`}
          className="h-full w-full rounded-lg object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default.png';
          }}
        />
      </div>

      <h2 className="mt-1 p-1 text-center text-lg font-bold text-white">{title}</h2>

      <div className="flex justify-between p-2 text-sm text-[#00a6fb]">
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1 text-white" /> {location}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 text-white" /> {date}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap justify-center gap-2 p-2">
        {domains.map((domain, idx) => (
          <span
            key={idx}
            className="bg-gray-1000 rounded-full border border-[#00a6fb]  px-2 py-1 text-xs text-gray-300"
          >
            {domain}
          </span>
        ))}
      </div>

      <div className="mt-2 flex justify-center gap-2 p-2">
        <button
          onClick={() => shareContent(window.location.href.split('#')[0] + shareLink, poster)}
          className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white transition-colors hover:bg-slate-800"
        >
          <FontAwesomeIcon icon={faShareAlt} />
          Share
        </button>
      </div>
    </StyledHackathonCard>
  );
};

const HackathonListContainer = styled.div`
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

const HackathonList = () => {
  return (
    <HackathonListContainer>
      {hackathons.map((hackathon, idx) => (
        <HackathonCardComponent key={idx} {...hackathon} />
      ))}
    </HackathonListContainer>
  );
};

export default HackathonList;
