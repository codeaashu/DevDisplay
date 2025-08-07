import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarkerAlt, faCalendarAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this event!',
        text: 'Explore and participate on this amazing tech events!',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

// List of Global Tech Events

const techevents = [
  {
    organizer: 'IETE Organization',
    title: 'ICSMS 2025',
    location: 'New Delhi, India',
    date: 'April 26 - 27',
    domains: ['Smart Mobility Systems', 'International Conference'],
    applyLink: 'https://iete.org/icsms2025/',
    poster: '/assets/Events/ICSMS 2025.png',
    shareLink: '#icsms2025',
  },

  {
    organizer: 'Project Kitab',
    title: 'The Kitab Cup',
    location: 'Noida Sec-119',
    date: 'April 18, 2025',
    domains: ['Sports', 'Book Reading'],
    applyLink: 'https://lu.ma/jzdpwdy6?tk=05iN8M',
    poster: '/assets/Events/The Kitab Cup.png',
    shareLink: '#the-kitab-cup',
  },
  {
    organizer: 'Shalaka Kulkarni',
    title: 'Tadow',
    location: 'Gurugram, Haryana',
    date: 'April 18, 2025',
    domains: ['Book Reading'],
    applyLink: 'https://lu.ma/d6oz10f0',
    poster: '/assets/Events/Tadow  Book Reading.png',
    shareLink: '#tadow',
  },
  {
    organizer: 'Shift',
    title: 'Infobip Tech Connect: Workshop #2',
    location: 'JSS Academy, Noida',
    date: 'April 19, 2025',
    domains: ['Workshop', 'Web3'],
    applyLink: 'https://lu.ma/xw43ge3t',
    poster: '/assets/Events/Infobip Tech Connect Workshop.png',
    shareLink: '#infobip-tech-connect-workshop-2',
  },
  {
    organizer: 'Blockchained India',
    title: 'The HODL On Tour: Bitget',
    location: 'Unwind Cafe, New Delhi',
    date: 'April 19, 2025',
    domains: ['Web3', 'Crypto'],
    applyLink: 'https://lu.ma/4xke8cn0?tk=9xot7T',
    poster: '/assets/Events/The HODL On Tour Level Up Your Web3 Game with Bitget.png',
    shareLink: '#the-hodl-on-tour-bitget',
  },
  {
    organizer: 'ActualOne',
    title: 'LocalHost India Tour: NCR',
    location: 'New Delhi',
    date: 'April 19, 2025',
    domains: ['Tech Networking'],
    applyLink: 'https://lu.ma/wzyhdwxe?tk=8G4W3I',
    poster: '/assets/Events/LocalHost India Tour NCR.png',
    shareLink: '#local-host-india-tour-ncr',
  },
  {
    organizer: 'NSUT Delhi',
    title: 'Kagazi Sher: A Paper Dancing Event',
    location: 'NSUT Delhi',
    date: 'April 19, 2025',
    domains: ['Shayari', 'Songs', 'Pickup Lines'],
    applyLink:
      'https://unstop.com/events/kagazi-sher-a-paper-dancing-event-moksha-netaji-subhas-university-of-technology-nsut-delhi-1459793?lb=i8K8QT8Y&utm_medium=Share&utm_source=shortUrl',
    poster: '/assets/Events/Kagazi Sher A Paper Dancing Event.png',
    shareLink: '#kagazi-sher-a-paper-dancing-event',
  },
  {
    organizer: 'Kaggle Days',
    title: 'Meetup Delhi NCR #53',
    location: 'Gurugram, Haryana',
    date: 'April 20, 2025',
    domains: ['AI/ML', 'Open Minds'],
    applyLink: 'https://lu.ma/55tn683m?tk=TLo5IH',
    poster: '/assets/Events/Meetup #53.png',
    shareLink: '#meetup-delhi-ncr',
  },
  {
    organizer: 'Capxly',
    title: 'AI Demo Day X D2C',
    location: 'Gurugram, Haryana',
    date: 'April 26, 2025',
    domains: ['AI Startups', 'D2C Brands'],
    applyLink: 'https://lu.ma/hho9lk5y',
    poster: '/assets/Events/AI Demo Day X D2C.png',
    shareLink: '#ai-demo-day-x-d2c',
  },
  {
    organizer: 'ML Chandigarh',
    title: 'Build With AI: Chandigarh Edition',
    location: 'Chandigarh University',
    date: 'May 3, 2025',
    domains: ['AI', 'Gemini'],
    applyLink: 'https://www.commudle.com/communities/tfug-chandigarh/events/build-with-ai-chandigarh-edition',
    poster: '/assets/Events/Build With AI Chandigarh Edition.png',
    shareLink: '#build-with-ai-chandigarh-edition',
  },
];

const StyledtecheventsCard = styled.div`
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

const TecheventsCardComponent = ({ organizer, title, location, date, domains, applyLink, poster, shareLink }) => {
  return (
    <StyledtecheventsCard id={shareLink.substring(1)}>
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
          <span key={idx} className="bg-gray-1000 rounded-full border border-[#00a6fb] px-2 py-1 text-xs text-gray-300">
            {domain}
          </span>
        ))}
      </div>
    </StyledtecheventsCard>
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

const StyledtecheventsListContainer = styled.div`
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

const TecheventsList = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [domainFilter, setDomainFilter] = useState('');

  const filteredtechevents = techevents.filter((techevents) => {
    const matchesLocation = locationFilter
      ? techevents.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;
    const matchesMonth = monthFilter
      ? new Date(techevents.date.split(' - ')[0]).getMonth() + 1 === parseInt(monthFilter)
      : true;
    const matchesDomain = domainFilter
      ? techevents.domains.some((domain) => domain.toLowerCase().includes(domainFilter.toLowerCase()))
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
      <StyledtecheventsListContainer>
        {filteredtechevents.map((techevents, idx) => (
          <TecheventsCardComponent key={idx} {...techevents} />
        ))}
      </StyledtecheventsListContainer>
    </>
  );
};

export default TecheventsList;
