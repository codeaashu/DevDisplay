import React, { useState, useEffect, useRef } from 'react';
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
    organizer: 'GDG New Delhi',
    title: 'Google I/O Extended New Delhi 2025',
    location: 'ThoughtWorks, Gurugram, India',
    date: 'Sep 13',
    domains: ['Technology', 'Developer', 'GDG', 'Google I/O'],
    applyLink: 'https://www.commudle.com/communities/gdg-new-delhi/events/google-i-o-extended-new-delhi',
    poster: '/assets/Events/Google IO Delhi.jpg',
    shareLink: '#googleiodelhi',
  },
  {
    organizer: 'GDG Gurugram',
    title: 'DevFest Gurugram 2025',
    location: 'Gurugram, India',
    date: 'Sep 27',
    domains: ['Technology', 'Developer', 'GDG', 'DevFest'],
    applyLink: 'https://www.commudle.com/fill-form/3759',
    poster: '/assets/Events/DevFestGurugram.png',
    shareLink: '#devfestgurugram',
  },
  {
    organizer: 'GDG Cloud New Delhi',
    title: 'SheSecures',
    location: 'New Delhi, India',
    date: 'Sep 27',
    domains: ['Technology', 'Developer', 'AI', 'Cloud', 'DevOps', 'Networking'],
    applyLink: 'https://www.commudle.com/communities/gdgcloudnd/events/shesecures',
    poster: '/assets/Events/SheSecures.png',
    shareLink: '#shesecures',
  },
  {
    organizer: 'GDG Noida',
    title: 'Design Samvaad',
    location: 'TBD, Noida, India',
    date: 'Sep 20',
    domains: ['Technology', 'Developer', 'AI', 'Design'],
    applyLink: 'https://www.commudle.com/communities/gdg-noida/events/design-samvaad',
    poster: '/assets/Events/Design Samvaad.png',
    shareLink: '#designsamvaad',
  },
  {
    organizer: 'GDG Ludhiana',
    title: 'DevFest Ludhiana 2025',
    location: 'GNDEC, Ludhiana, India',
    date: 'Oct 11',
    domains: ['Technology', 'Developer', 'GDG', 'DevFest', 'Networking'],
    applyLink:
      'https://gdg.community.dev/events/details/google-gdg-ludhiana-presents-devfest-ludhiana-2025-train-the-trainer-edition/',
    poster: '/assets/Events/DevFest Ludhiana 2025.png',
    shareLink: '#devfestludhiana',
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

const TecheventsCardComponent = React.forwardRef(
  ({ organizer, title, location, date, domains, applyLink, poster, shareLink }, ref) => {
    return (
      <StyledtecheventsCard id={shareLink.substring(1)} ref={ref}>
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
              className="hover:bg-slate-1000 flex items-center justify-center gap-2 rounded-xl border border-[#00a6fb] bg-gray-700 bg-opacity-50 px-2 py-1 text-xs text-white backdrop-blur-md transition-colors"
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
              className="bg-gray-1000 rounded-full border border-[#00a6fb] px-2 py-1 text-xs text-gray-300"
            >
              {domain}
            </span>
          ))}
        </div>
      </StyledtecheventsCard>
    );
  },
);

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

// ...existing code...

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
  flex-direction: column; /* Default: stacked for mobile */
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  input,
  select {
    padding: 0.75rem 1rem;
    border: 1px solid #00a6fb;
    border-radius: 9999px;
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

  @media (min-width: 768px) {
    flex-direction: row; /* Horizontal layout for tablets and larger */
  }
`;

// ...existing code...

const TecheventsList = () => {
  const [locationFilter, setLocationFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [highlightId, setHighlightId] = useState(null);
  const cardRefs = useRef({});

  // Filter logic
  const filteredtechevents = techevents.filter((event) => {
    const matchesLocation = locationFilter ? event.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
    const matchesMonth = monthFilter
      ? new Date(event.date.split(' - ')[0]).getMonth() + 1 === parseInt(monthFilter)
      : true;
    const matchesDomain = domainFilter
      ? event.domains.some((domain) => domain.toLowerCase().includes(domainFilter.toLowerCase()))
      : true;
    return matchesLocation && matchesMonth && matchesDomain;
  });

  // Always include the card with the hash if present
  let displayEvents = filteredtechevents;
  let hashId = null;
  if (typeof window !== 'undefined' && window.location.hash) {
    hashId = window.location.hash.substring(1);
    const exists = filteredtechevents.some((e) => e.shareLink.substring(1) === hashId);
    if (!exists) {
      const card = techevents.find((e) => e.shareLink.substring(1) === hashId);
      if (card) displayEvents = [card, ...filteredtechevents];
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      setHighlightId(window.location.hash.substring(1));
    }
  }, [locationFilter, monthFilter, domainFilter]);

  useEffect(() => {
    if (highlightId && cardRefs.current[highlightId]) {
      const el = cardRefs.current[highlightId];
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.style.boxShadow = '0 0 0 4px #00a6fb, 0 0 20px #00a6fb';
      el.style.transition = 'box-shadow 0.5s';
      setTimeout(() => {
        el.style.boxShadow = '';
      }, 2000);
    }
  }, [highlightId, displayEvents.length]);

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
        {displayEvents.map((event) => (
          <TecheventsCardComponent
            key={event.shareLink}
            ref={(el) => (cardRefs.current[event.shareLink.substring(1)] = el)}
            {...event}
          />
        ))}
      </StyledtecheventsListContainer>
    </>
  );
};

export default TecheventsList;
