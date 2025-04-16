import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUser, faClock, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this courses!',
        text: 'I found this amazing courses that might interest you!',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

// List of Best Tech Courses on the Internet

const courses = [
  {
    platform: 'Coursera',
    title: 'Machine Learning',
    instructor: 'Andrew Ng',
    duration: '11 weeks',
    level: 'Beginner',
    domain: ['AI/ML'],
    courseLink: 'https://www.coursera.org/learn/machine-learning',
    poster: '/assets/Coming Soon.png',
    shareLink: '#ml-course',
  },
  {
    platform: 'Udemy',
    title: 'The Complete Web Developer Bootcamp',
    instructor: 'Colt Steele',
    duration: '63 hours',
    level: 'Beginner to Intermediate',
    domain: ['Web Development'],
    courseLink: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
    poster: '/assets/Coming Soon.png',
    shareLink: '#web-dev-course',
  },
  {
    platform: 'edX (MIT)',
    title: 'Introduction to Computer Science and Programming',
    instructor: 'Prof. Eric Grimson',
    duration: '9 weeks',
    level: 'Introductory',
    domain: ['Computer Science'],
    courseLink: 'https://www.edx.org/course/introduction-to-computer-science-and-programming-7',
    poster: '/assets/Coming Soon.png',
    shareLink: '#intro-cs',
  },
  // Add more courses similarly...
];

const StyledCoursesCard = styled.div`
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
const CoursesCardComponent = ({
  platform,
  title,
  instructor,
  duration,
  level,
  domain,
  courseLink,
  poster,
  shareLink,
}) => {
  return (
    <StyledCoursesCard id={shareLink.substring(1)}>
      <div className="flex items-center justify-between p-2">
        <span className="text-sm font-semibold text-white">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-1 text-[#00a6fb]" /> {platform}
        </span>
        <a
          href={courseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-1000 hover:bg-gray-1000 text-semibold relative flex items-center rounded-full border border-[#00a6fb] px-2 py-1 text-gray-300"
        >
          <div className="status-user" style={{ marginRight: '8px' }} />
          View Course
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
          <FontAwesomeIcon icon={faUser} className="mr-1 text-white" /> {instructor}
        </span>
        <span>
          <FontAwesomeIcon icon={faClock} className="mr-1 text-white" /> {duration}
        </span>
      </div>

      <div className="pb-2 text-center text-xs text-gray-300">Level: {level}</div>

      <div className="mt-2 flex flex-wrap justify-center gap-2 p-2">
        {domain.map((d, idx) => (
          <span key={idx} className="bg-gray-1000 rounded-full border border-[#00a6fb] px-2 py-1 text-xs text-gray-300">
            {d}
          </span>
        ))}
      </div>
    </StyledCoursesCard>
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

const CoursesListContainer = styled.div`
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

const CoursesList = () => {
  const [platformFilter, setPlatformFilter] = useState('');
  const [instructorFilter, setInstructorFilter] = useState('');
  const [domainFilter, setDomainFilter] = useState('');

  const filteredCourses = courses.filter((course) => {
    const matchesPlatform = platformFilter
      ? course.platform.toLowerCase().includes(platformFilter.toLowerCase())
      : true;

    const matchesInstructor = instructorFilter
      ? course.instructor.toLowerCase().includes(instructorFilter.toLowerCase())
      : true;

    const matchesDomain = domainFilter
      ? course.domain.some((d) => d.toLowerCase().includes(domainFilter.toLowerCase()))
      : true;

    return matchesPlatform && matchesInstructor && matchesDomain;
  });

  return (
    <>
      <FilterContainer className="flex flex-wrap gap-2 p-4">
        <input
          type="text"
          placeholder="Search by platform"
          value={platformFilter}
          onChange={(e) => setPlatformFilter(e.target.value)}
          className="rounded-md border border-[#00a6fb] bg-gray-900 p-2 text-sm text-white"
        />
        <input
          type="text"
          placeholder="Search by instructor"
          value={instructorFilter}
          onChange={(e) => setInstructorFilter(e.target.value)}
          className="rounded-md border border-[#00a6fb] bg-gray-900 p-2 text-sm text-white"
        />
        <input
          type="text"
          placeholder="Search by domain"
          value={domainFilter}
          onChange={(e) => setDomainFilter(e.target.value)}
          className="rounded-md border border-[#00a6fb] bg-gray-900 p-2 text-sm text-white"
        />
      </FilterContainer>

      <CoursesListContainer className="flex flex-wrap justify-center">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, idx) => <CoursesCardComponent key={idx} {...course} />)
        ) : (
          <p className="mt-4 w-full text-center text-white">No courses found matching your filters.</p>
        )}
      </CoursesListContainer>
    </>
  );
};

export default CoursesList;
