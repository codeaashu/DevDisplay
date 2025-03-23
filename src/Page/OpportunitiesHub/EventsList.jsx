import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarkerAlt, faCalendarAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this event!',
        text: 'Explore and participate on this amazing tech events opportunity.',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

// List of Global Tech Events & Fest

const techevents = [
  {
    organizer: 'Hack4Bihar',
    title: 'Hack4Bihar - Lucknow Hacking Tour',
    location: 'Lucknow, UP, India',
    date: 'March 28',
    domains: ['AI', 'Web3 & Blockchain', 'Cyber security', 'Game devlopment', 'Open Innovation'],
    applyLink: 'https://dorahacks.io/hackathon/luckhnowhackingtour/',
    poster: '/assets/Hackathons/Hack4Bihar.png',
    shareLink: '#hack4bihar-lucknow-hacking-tour',
  },
  {
    organizer: 'GDG On Campus MIET',
    title: 'Hack Heist',
    location: 'Meerut, UP, India',
    date: 'March 29 - 30',
    domains: ['AI/ML', 'Web3 & Blockchain', 'IOT', 'AR/VR', 'App Development', 'Open Innovation'],
    applyLink: 'https://dorahacks.io/hackathon/hackheist/',
    poster: '/assets/Hackathons/Hack Heist.png',
    shareLink: '#hack-heist',
  },
  {
    organizer: 'GDG On Campus LNMIIT',
    title: 'HackCrux',
    location: 'Jaipur, Rājasthān, India',
    date: 'March 29 - 30',
    domains: ['AI', 'Web Development', 'IOT', 'Full Stack', 'Cloud and DevOps', 'Open Innovation'],
    applyLink: 'https://dorahacks.io/hackathon/gdg-hackcrux/',
    poster: '/assets/Hackathons/HackCrux.png',
    shareLink: '#hackcrux',
  },
  {
    organizer: 'AceHack',
    title: 'AceHack 4.0',
    location: 'UEM Jaipur, India',
    date: 'March 29 - 30',
    domains: [
      'AI/ML',
      'Web3, Blockchain & Crypto',
      'IOT',
      'Web & Mobile Dev',
      'Cloud & DevOps',
      'AR/VR',
      'Open Innovation',
    ],
    applyLink: 'https://dorahacks.io/hackathon/acehack4/',
    poster: '/assets/Hackathons/AceHack 4.0.jpg',
    shareLink: '#acehack-4-0',
  },
  {
    organizer: 'Espresso',
    title: 'Build & Brew - Global Hackathon',
    location: 'Virtual',
    date: 'March 31',
    domains: ['Blockchain', 'Infrastructure', 'Rollups', 'Composability', 'Interop', 'Ethereum'],
    applyLink: 'https://dorahacks.io/hackathon/build-and-brew/',
    poster: '/assets/Hackathons/Build & Brew.jpg',
    shareLink: '#build-and-brew-global-hackathon',
  },
  {
    organizer: 'ETHBucharest',
    title: 'ETHBucharest 2025',
    location: 'Bucharest, Bucureşti, Romania',
    date: 'April 2 - 5',
    domains: ['Blockchain', 'web3', 'crypto', 'Arbitrum', 'Ethereum'],
    applyLink: 'https://dorahacks.io/hackathon/ethbucharest2025/',
    poster: '/assets/Hackathons/ETHBucharest 2025.jpeg',
    shareLink: '#ethbucharest-2025',
  },
  {
    organizer: 'Code Rangers X Geek Room',
    title: 'Code Nakshatra',
    location: 'Greater Noida, India',
    date: 'Apr 3 - 4',
    domains: ['Open Innovation', 'No Restrictions'],
    applyLink: 'https://code-nakshatra.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/Code Nakshatra.jpg',
    shareLink: '#code-nakshatra',
  },
  {
    organizer: 'Chandigarh University',
    title: 'whatthehack',
    location: 'Chandigarh, India',
    date: 'Apr 4 - 5',
    domains: ['AI', 'Blockchain', 'IOT', 'Open Innovation', 'web tech'],
    applyLink: 'https://dorahacks.io/hackathon/whatthehack/',
    poster: '/assets/Hackathons/whatthehack.jpg',
    shareLink: '#whatthehack',
  },
  {
    organizer: 'ABES Institute of Technology',
    title: 'Hacknovate 6.0',
    location: 'Ghaziabad - Offline, Online',
    date: 'Apr 4 - 5',
    domains: ['Open Innovation', 'No Restrictions'],
    applyLink: 'https://hacknovate6.devfolio.co/',
    poster: '/assets/Hackathons/Hacknovate 6.0.jpg',
    shareLink: '#hacknovate-6-0',
  },
  {
    organizer: 'IIIT Jabalpur',
    title: 'HackByte 3.0',
    location: 'Jabalpur, India',
    date: 'Apr 4 - 6',
    domains: ['Open Innovation', 'No Restrictions'],
    applyLink: 'https://hackbyte3.devfolio.co/',
    poster: '/assets/Hackathons/HackByte 3.0.jpg',
    shareLink: '#hackbyte-3-0',
  },
  {
    organizer: 'Bennett University',
    title: 'Hackaccino',
    location: 'Bennett University, Greater Noida',
    date: 'Apr 5 - 6',
    domains: ['AI/ML', 'Cloud Computing', 'AR/VR', 'Web3/Blockchain', 'Open Innovation'],
    applyLink: 'https://www.hackquest.io/hackathons/Hackaccino',
    poster: '/assets/Hackathons/Hackaccino.jpg',
    shareLink: '#hackaccino',
  },
  {
    organizer: 'GDGoC - NIT Jalandhar',
    title: 'HackMOL 6.0',
    location: 'Jalandhar, India',
    date: 'Apr 10 - 11',
    domains: ['Open Innovation', 'No Restrictions'],
    applyLink: 'https://hackmol-6.devfolio.co/',
    poster: '/assets/Hackathons/jalandhhar.png',
    shareLink: '#hackmol-6-0',
  },
  {
    organizer: 'AppTeam - NIT Hamirpur',
    title: 'Hack On Hills 6.0',
    location: 'Hamirpur, India',
    date: 'Apr 11 - 13',
    domains: ['AI/ML', 'Web', 'Blockchain', 'IoT', 'Cybersecurity'],
    applyLink: 'https://hack-on-hills.devfolio.co/',
    poster: '/assets/Hackathons/Hack On Hills 6.0.jpg',
    shareLink: '#hack-on-hills-6-0',
  },
  {
    organizer: 'NAMESPACE Community',
    title: 'HACKHAZARDS 25',
    location: 'Online',
    date: 'Apr 11 - 20',
    domains: ['Open Innovation', 'No Restrictions'],
    applyLink: 'https://hackhazards25.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/HACKHAZARDS 25.jpg',
    shareLink: '#HACKHAZARDS-25',
  },
  {
    organizer: 'BIT Sindri',
    title: 'HACKATRON 2K25',
    location: 'Sindri, Dhanbad, Jharkhand',
    date: 'Apr 13 - 14',
    domains: ['Open Innovation', 'No Restrictions'],
    applyLink: 'https://hackatron-k.devfolio.co/',
    poster: '/assets/Hackathons/HACKATRON 2K25.jpg',
    shareLink: '#hackatron-2k25',
  },
  {
    organizer: 'ACE',
    title: 'HackVSIT6.0',
    location: 'New Delhi, India',
    date: 'Apr 25 - 26',
    domains: ['Open Innovation', 'No Restrictions'],
    applyLink: 'https://hackvsit-6.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/HackVSIT6.0.jpg',
    shareLink: '#hackvsit6-0',
  },
  {
    organizer: 'Anveshan BPIT',
    title: 'HackBlitz 2k25',
    location: 'New Delhi, India',
    date: 'Apr 26 - 27',
    domains: ['AI/ML', 'Web', 'Mobile', 'Web3', 'Health', 'FinTech'],
    applyLink: 'https://hackblitz2k25.devfolio.co/',
    poster: '/assets/Hackathons/HackBlitz 2k25.jpg',
    shareLink: '#hackblitz-2k25',
  },
  {
    organizer: 'Blockchain Pioneer Club',
    title: 'Cardano Blockchain Hackathon 2025',
    location: 'Hanoi, Hà Nội, Vietnam',
    date: 'May 6',
    domains: ['web3', 'Blockchain', 'aiken', 'plutus', 'vietnam', 'Cardano'],
    applyLink: 'https://dorahacks.io/hackathon/cardano-blockchain-hackathon2025/',
    poster: '/assets/Hackathons/Cardano Blockchain Hackathon 2025.png',
    shareLink: '#cardano-blockchain-hackathon-2025',
  },
  {
    organizer: 'Sui Foundation',
    title: 'Sui Overflow 2025',
    location: 'Online',
    date: 'May 11',
    domains: ['Web3', 'Blockchain'],
    applyLink: 'https://overflowportal.sui.io/',
    poster: '/assets/Hackathons/Sui Overflow 2025.jpg',
    shareLink: '#sui-overflow-2025',
  },
  {
    organizer: 'NITTE MIT',
    title: 'NMIT HACKS 2025',
    location: 'Bengaluru, India',
    date: 'May 16 - 18',
    domains: ['AI/ML', 'Blockchain', 'IOT', 'Game Development', 'Open Innovation'],
    applyLink: 'https://nmithacks25.devfolio.co/',
    poster: '/assets/Hackathons/NMIT HACKS 2025.jpg',
    shareLink: '#nmit-hacks-2025',
  },
  {
    organizer: 'Hack With Gujarat',
    title: 'Hack With Gujarat',
    location: 'Online',
    date: 'May 26 - 29',
    domains: ['Open Innovation', 'No Restrictions'],
    applyLink: 'https://hack-with-gujarat.devfolio.co/?ref=37575e18b3',
    poster: '/assets/Hackathons/Hack With Gujarat.jpg',
    shareLink: '#hack-with-gujarat',
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
          className="bg-gray-1000 hover:bg-gray-1000 text-semibold relative flex items-center rounded-full border border-[#00a6fb] px-2 py-1 text-gray-300"
        >
          <div className="status-user" style={{ marginRight: '8px' }} />
          Apply Now
        </a>
      </div>

      <div className="h-50 relative w-full overflow-hidden rounded-xl p-2 shadow-md">
        <div className="absolute bottom-3 right-3 z-10">
          <button
            onClick={() => shareContent(window.location.href.split('#')[0] + shareLink)}
            className="bg-gray-1000 hover:bg-slate-1000 flex items-center justify-center gap-2 rounded-xl border border-[#00a6fb] bg-opacity-50 px-2 py-1 text-xs text-white backdrop-blur-md transition-colors"
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
    </StyledHackathonCard>
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

const HackathonList = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [domainFilter, setDomainFilter] = useState('');

  const filteredHackathons = hackathons.filter((hackathon) => {
    const matchesLocation = locationFilter
      ? hackathon.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;
    const matchesMonth = monthFilter
      ? new Date(hackathon.date.split(' - ')[0]).getMonth() + 1 === parseInt(monthFilter)
      : true;
    const matchesDomain = domainFilter
      ? hackathon.domains.some((domain) => domain.toLowerCase().includes(domainFilter.toLowerCase()))
      : true;
    return matchesLocation && matchesMonth && matchesDomain;
  });

  return (
    <>
      <FilterContainer>
        <input
          type="text"
          placeholder="Search by location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <select value={monthFilter} onChange={(e) => setMonthFilter(e.target.value)}>
          <option value="">Select month</option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <input
          type="text"
          placeholder="Search by domain"
          value={domainFilter}
          onChange={(e) => setDomainFilter(e.target.value)}
        />
      </FilterContainer>
      <HackathonListContainer>
        {filteredHackathons.map((hackathon, idx) => (
          <HackathonCardComponent key={idx} {...hackathon} />
        ))}
      </HackathonListContainer>
    </>
  );
};

export default HackathonList;
