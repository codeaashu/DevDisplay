import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faSignal, faClock, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const shareContent = (url, organizer, title) => {
  if (navigator.share) {
    navigator
      .share({
        title: title,
        text: `Check out this bootcamp organized by ${organizer}!`,
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

// List of Global Tech Bootcamps

const bootcamp = [
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

  {
    organizer: 'HubSpot Academy',
    title: 'CRM Customization Bootcamp for Developers',
    duration: '6 Weeks',
    level: 'Intermediate',
    skills: ['HubSpot API', 'React-based custom cards'],
    applyLink:
      'https://events.academy.hubspot.com/events/details/hubspot-academy-crm-customization-bootcamp-for-developers-spring-2025-presents-crm-customization-bootcamp-for-developers-spring-2025-2025-05-07/',
    poster: '/assets/Bootcamps/CRM Customization Bootcamp for Developers Spring 2025.png',
    shareLink: '#crm-customization-bootcamp-for-developers',
  },
  {
    organizer: 'HubSpot Academy',
    title: 'Account-Based Marketing Bootcamp',
    duration: '6 Weeks',
    level: 'Intermediate',
    skills: ['Sales & Marketing', 'ABM dashboards'],
    applyLink:
      'https://events.academy.hubspot.com/events/details/hubspot-academy-account-based-marketing-bootcamp-spring-2025-presents-account-based-marketing-bootcamp-spring-2025-2025-05-06/',
    poster: '/assets/Bootcamps/Account-Based Marketing Bootcamp Spring 2025.png',
    shareLink: '#account-based-marketing-bootcamp',
  },
  {
    organizer: 'HubSpot Academy',
    title: 'Video Bootcamp for Marketing, Sales, and Service',
    duration: '4 Weeks',
    level: 'Intermediate',
    skills: ['Marketing', 'Sales', 'Customer Service'],
    applyLink:
      'https://events.academy.hubspot.com/events/details/hubspot-academy-video-bootcamp-for-marketing-sales-and-service-spring-2025-presents-video-bootcamp-for-marketing-sales-and-service-spring-2025-2025-05-07/',
    poster: '/assets/Bootcamps/Video Bootcamp for Marketing, Sales, and Service - Spring 2025.png',
    shareLink: '#video-bootcamp-for-marketing-sales--services',
  },
  {
    organizer: 'HubSpot Academy',
    title: 'Super Admin Bootcamp',
    duration: '6 Weeks',
    level: 'Intermediate',
    skills: ['Setting up HubSpot', 'Configuration and Security'],
    applyLink:
      'https://events.academy.hubspot.com/events/details/hubspot-academy-super-admin-bootcamp-spring-2025-presents-super-admin-bootcamp-spring-2025-2025-05-08/',
    poster: '/assets/Bootcamps/Super Admin Bootcamp - Spring 2025.png',
    shareLink: '#super-admin-bootcamp',
  },
  {
    organizer: 'HubSpot Academy',
    title: 'RevOps Bootcamp',
    duration: '6 Weeks',
    level: 'Intermediate',
    skills: ['RevOps Process Mapping', 'RevOps Strategy'],
    applyLink:
      'https://events.academy.hubspot.com/events/details/hubspot-academy-revops-bootcamp-spring-2025-presents-revops-bootcamp-spring-2025-2025-05-08/',
    poster: '/assets/Bootcamps/RevOps Bootcamp - Spring 2025.png',
    shareLink: '#revops-bootcamp',
  },
  {
    organizer: 'HubSpot Academy',
    title: 'Pipeline Generation Bootcamp',
    duration: '6 Weeks',
    level: 'Intermediate',
    skills: ['HubSpot Flywheel', 'Lead Identification'],
    applyLink:
      'https://events.academy.hubspot.com/events/details/hubspot-academy-pipeline-generation-bootcamp-spring-2025-presents-pipeline-generation-bootcamp-spring-2025-2025-05-07/',
    poster: '/assets/Bootcamps/Pipeline Generation Bootcamp - Spring 2025.png',
    shareLink: '#pipeline-generation-bootcamp',
  },
  {
    organizer: 'Coursera',
    title: 'Fundamentals of Computing Specialization',
    duration: '2 Months',
    level: 'Beginner',
    skills: ['Python Programming', 'Algorithms', 'Mathematics'],
    applyLink: 'https://www.coursera.org/specializations/computer-fundamentals?action=enroll',
    poster: '/assets/Bootcamps/Fundamentals of Computing Specialization.pngg',
    shareLink: '#fundamentals-of-computing-specialization',
  },
  {
    organizer: 'Coursera',
    title: 'Python for Everybody Specialization',
    duration: '2 Months',
    level: 'Beginner',
    skills: ['Python', 'Data Structures', 'Data Analysis'],
    applyLink: 'https://www.coursera.org/specializations/python',
    poster: '/assets/Bootcamps/Python for Everybody Specialization.png',
    shareLink: '#python-for-everyday-specialization',
  },
  {
    organizer: 'Coursera',
    title: 'Google Project Management: Professional Certificate',
    duration: '6 Months',
    level: 'Beginner',
    skills: ['Communication', 'Leadership', 'Collaboration'],
    applyLink: 'https://www.coursera.org/professional-certificates/google-project-management',
    poster: '/assets/Bootcamps/Google Project Management Professional Certificate.png',
    shareLink: '#google-project-management-professional-certificate',
  },
  {
    organizer: 'Udemy',
    title: 'Complete Full-Stack Web Development Bootcamp',
    duration: '61 hours',
    level: 'Intermediate',
    skills: ['Web Development', 'Full Stack', 'Backend', 'Frontend', 'Database', 'Paid'],
    applyLink:
      'https://www.udemy.com/share/1013gG3@vFw3WU1bEGYVy7rvGUXmeKb5WYPRqfmhxr8gYIuu5ul-QyKkjjv8GH_oYgs2tTnDKg==/',
    poster: '/assets/Courses/AngelaFullStackDev.png',
    shareLink: '#complete-full-stack-web-development-bootcamp',
  },
  // {
  //   organizer: 'Udemy',
  //   title: 'Complete Python Pro Bootcamp',
  //   duration: '52 hours',
  //   level: 'Intermediate',
  //   skills: ['Python', 'Backend', 'Data Science', 'Machine Learning', 'Paid'],
  //   applyLink:
  //     'https://www.udemy.com/share/103IHM3@PpzlFKvoy_U8C44nS4mcr3ctFo9qRxCWrgOqCDeXLdFS6ybdfqRrtt4QuxJwC5Rhdw==/',
  //   poster: '/assets/Courses/AngelaPython.png',
  //   shareLink: '#complete-python-pro-bootcamp',
  // },
];

const StyledbootcampCard = styled.div`
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

const BootcampCardComponent = ({
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
    <StyledbootcampCard id={shareLink.substring(1)}>
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
          Apply Now
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
    </StyledbootcampCard>
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

const StyledbootcampListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
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

const BootcampsList = () => {
  const [skillFilter, setSkillFilter] = useState('');
  const [organizerFilter, setOrganizerFilter] = useState('');

  const filteredbootcamp = bootcamp.filter((bootcamp) => {
    const matchesSkill = skillFilter
      ? bootcamp.skills.some((skill) => skill.toLowerCase().includes(skillFilter.toLowerCase()))
      : true;
    const matchesOrganizer = organizerFilter
      ? bootcamp.organizer.toLowerCase().includes(organizerFilter.toLowerCase())
      : true;
    return matchesSkill && matchesOrganizer;
  });

  return (
    <>
      <FilterContainer>
        <input
          type="text"
          placeholder="Search by domain or skills"
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
      <StyledbootcampListContainer>
        {filteredbootcamp.map((bootcamp, idx) => (
          <BootcampCardComponent key={idx} {...bootcamp} />
        ))}
      </StyledbootcampListContainer>
    </>
  );
};

export default BootcampsList;
