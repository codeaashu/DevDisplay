import React, { useState, useEffect } from 'react';
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
    platform: 'YouTube',
    title: 'Javascript - Hindi | part 1',
    instructor: 'Hitesh Choudhary',
    duration: '9 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'Javascript', 'JS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/sscX432bMZo?si=5ig6-ErKPW97NU5L',
    shareLink: '#javascript-part-1-hc',
  },
  {
    platform: 'YouTube',
    title: 'Javascript - Hindi | part 2',
    instructor: 'Hitesh Choudhary',
    duration: '10 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'Javascript', 'JS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/_TjtAyMkiTI?si=XwtFRiCPTWQNgAOH',
    shareLink: '#javascript-part-2-hc',
  },
  {
    platform: 'YouTube',
    title: 'JavaScript Full Course for Beginners - English',
    instructor: 'FreeCodeCamp.org',
    duration: '4 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'Javascript', 'JS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/PkZNo7MFNFg?si=4ehxCo6jkkiewD-1',
    shareLink: '#javascriptbyfreecodecamp',
  },
  {
    platform: 'YouTube',
    title: 'JavaScript Full Course - English',
    instructor: 'Bro Code',
    duration: '8 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'Javascript', 'JS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/8dWL3wF_OMw?si=s0GckMSp8QK024Sj',
    shareLink: '#javascriptbybrocode',
  },
  {
    platform: 'YouTube',
    title: 'HTML - Hindi',
    instructor: 'Prashant Jain',
    duration: '4 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'HTML', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/rklidcZ-aLU?si=2iv5ZV0EypTpTsw7',
    shareLink: '#htmlbyprashantJain',
  },
  {
    platform: 'YouTube',
    title: 'CSS - Hindi',
    instructor: 'Prashant Jain',
    duration: '8 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'CSS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/OpWjt_wbV4E?si=u_Z9BbUrhim4Ne9_',
    shareLink: '#cssbyprashantJain',
  },
  {
    platform: 'YouTube',
    title: 'HTML - Hindi',
    instructor: 'Love Babbar',
    duration: '6 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'HTML', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/k7ELO356Npo?si=YYhRTsCFGLGbFF1h',
    shareLink: '#htmlbylovebabbar',
  },
  {
    platform: 'YouTube',
    title: 'CSS - Hindi',
    instructor: 'Love Babbar',
    duration: '11 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'CSS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/dSJM4Gyh8jE?si=0DA97_AKrV3bfKFo',
    shareLink: '#cssbylovebabbar',
  },
  {
    platform: 'YouTube',
    title: 'HTML CSS - English',
    instructor: 'Simon Bao',
    duration: '7 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'HTML', 'CSS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/G3e-cpL7ofc?si=D5xPjvKi7AnfDFft',
    shareLink: '#htmlcssbysupersimpledev',
  },
  {
    platform: 'YouTube',
    title: 'Best HTML CSS Course - English',
    instructor: 'Kevin Powell',
    duration: '50 Videos',
    level: 'Beginner',
    domain: ['Web Development', 'HTML', 'CSS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/1L2YiWdaUDM?si=ZjQmd8SmAUisctP6',
    shareLink: '#htmlcssbykevinpowell',
  },
  {
    platform: 'YouTube',
    title: 'CSS - English',
    instructor: 'Dave Gray',
    duration: '11 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'CSS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/OXGznpKZ_sA?si=_2uGEik_pdGQM_Ks',
    shareLink: '#htmlbydavegray',
  },
  {
    platform: 'YouTube',
    title: 'Namaste JavaScript - Hindi + English',
    instructor: 'Akshay Saini',
    duration: '12 Hour+',
    level: 'Beginner',
    domain: ['Web Development', 'Javascript', 'JS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/pN6jk0uUrD8?si=89uQMPPR2rZvjfnY',
    shareLink: '#namastejs',
  },
  {
    platform: 'YouTube',
    title: 'React JS Full Course - Hindi',
    instructor: 'Hitesh Choudhary',
    duration: '9 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'ReactJS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/FxgM9k1rg0Q?si=vZmwfwh3d6mGymPS',
    shareLink: '#reactjs-hc',
  },
  {
    platform: 'YouTube',
    title: 'Complete ReactJS Course - Hindi',
    instructor: 'Sarthak Sharma',
    duration: '4 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'ReactJS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/E6tAtRi82QY?si=KUOqEZ_c_rujUNQY',
    shareLink: '#reactjs-sheryians',
  },
  {
    platform: 'YouTube',
    title: 'React & Redux Full Course - Hindi',
    instructor: 'Prashant Jain',
    duration: '20 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'ReactJS', 'Redux', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/eILUmCJhl64?si=yuhUO0jjYMb7mahQ',
    shareLink: '#reactjsbyprashantJain',
  },
  {
    platform: 'YouTube',
    title: 'Tailwind CSS - Hindi',
    instructor: 'Hitesh Choudhary',
    duration: '2 Hour',
    level: 'Beginner',
    domain: ['Web Development', 'Tailwind CSS', 'Frontend', 'Free'],
    courseLink: 'https://youtu.be/_9mTJ84uL1Q?si=3xxaXdAaN8u52n0w',
    shareLink: '#tailwindcss-hc',
  },
  {
    platform: 'YouTube',
    title: 'Full Stack Web Development - English',
    instructor: 'Mehul - Codedamn',
    duration: '22 Hour',
    level: 'Intermediate',
    domain: ['Web Development', 'Full Stack', 'Backend', 'Frontend', 'Database', 'Free'],
    courseLink: 'https://youtu.be/ZxKM3DCV2kE?si=kF4sGU0z-RREMgps',
    shareLink: '#fullstackbymehul',
  },
  {
    platform: 'Udemy',
    title: 'Complete Full-Stack Web Development - English',
    instructor: 'Dr. Angela Yu',
    duration: '61 hours',
    level: 'Intermediate',
    domain: ['Web Development', 'Full Stack', 'Backend', 'Frontend', 'Database', 'Paid'],
    poster: '/assets/Courses/AngelaFullStackDev.png',
    courseLink:
      'https://www.udemy.com/share/1013gG3@3wgcoIB2pBwIOUfeSk4Z42gqBYC3uvHGnbWHJnZDmoMmWtixq1om-ZBvibtqhW-LqQ==/',
    shareLink: '#fullstackbyangela',
  },
  {
    platform: 'Udemy',
    title: 'Python With DSA + LEETCODE Exercises',
    instructor: 'Krish Naik, Mayank Aggarwal',
    duration: '61 hours',
    level: 'Intermediate',
    domain: ['Python', 'DSA', 'Data Structures', 'Algorithms', 'Paid'],
    poster: '/assets/Courses/KrishPythonWithDSA.png',
    courseLink:
      'https://www.udemy.com/share/10bPPF3@u19KFpL6vN7IwhSrJN5cYFVFa4wyBFF0FWt0kxtj3520J2P4WzcUK3R_NXptnbDGeQ==/',
    shareLink: '#pythonwithdsakrish',
  },
  {
    platform: 'Udemy',
    title: 'Complete MLOps With 10+ End To End ML Projects',
    instructor: 'Krish Naik',
    duration: '51 hours',
    level: 'Intermediate',
    domain: ['Machine Learning', 'MLOps', 'Data Science', 'Paid'],
    poster: '/assets/Courses/KrishMLOps.png',
    courseLink:
      'https://www.udemy.com/share/10bYlh3@jqduaaieDl1nKdgWzD6GL3HGAFzvk-YSluGWEzDbBUAhWKr7E5jgmZlLEcznFHZ3qA==/',
    shareLink: '#mlopsbykrish',
  },
  {
    platform: 'Udemy',
    title: 'Complete Data Science, Machine Learning, DL, NLP',
    instructor: 'Krish Naik',
    duration: '99 hours',
    level: 'Intermediate',
    domain: ['Machine Learning', 'Deep Learning', 'NLP', 'MLOps', 'Data Science', 'Paid'],
    poster: '/assets/Courses/KrishMLDLNLP.png',
    courseLink:
      'https://www.udemy.com/share/10b9km3@ajJzHRVlS-BdTOaTGMG8iUl8QmGRJOLb3L3t-_UEPViitrhkG7j59ROC3DMhNCQJkg==/',
    shareLink: '#ml-dl-nlp-bykrish',
  },
  {
    platform: 'Udemy',
    title: 'Complete Generative AI Course With Langchain and Huggingface',
    instructor: 'Krish Naik',
    duration: '54 hours',
    level: 'Intermediate',
    domain: ['Generative AI', 'Langchain', 'Huggingface', 'MLOps', 'Data Science', 'Paid'],
    poster: '/assets/Courses/KrishGenerativeAI.png',
    courseLink:
      'https://www.udemy.com/share/10bnAf3@AMuXiKfGJ1iHhOn_64-IBiWsHEJbI9LKoxWkWzeUzjZQpJ3hcUrJ16CqVddiVWl-Hg==/',
    shareLink: '#generativeaibykrish',
  },
  {
    platform: 'Udemy',
    title: 'Complete Data Analyst - Basics To Advanced',
    instructor: 'Krish Naik, Jayant Topnani',
    duration: '71 hours',
    level: 'Intermediate',
    domain: ['Data Analysis', 'Data Science', 'Python', 'Pandas', 'Numpy', 'Paid'],
    poster: '/assets/Courses/KrishDataAnalyst.png',
    courseLink:
      'https://www.udemy.com/share/10bEjb3@GyVBilNH4BklWqgyIenUi5VzcdzWAaR_51cwFR8YVP_nbvU9h60JJigyqIeTF2Rvsw==/',
    shareLink: '#dataanalystbykrish',
  },
  {
    platform: 'ineuron',
    title: 'Full Stack Data Science BootCamp 2.0',
    instructor: 'Krish Naik, Sunny Savita',
    duration: 'n/a',
    level: 'Intermediate',
    domain: ['Data Science', 'Python', 'Pandas', 'Numpy', 'Paid'],
    poster: '/assets/Courses/IneuronFullStackDataScience.png',
    courseLink: 'https://ineuron.ai/course/full-stack-data-science-bootcamp-20',
    shareLink: '#fullstackdatascience',
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
  const getYouTubeThumbnail = (url) => {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/,
    );
    return videoIdMatch ? `https://img.youtube.com/vi/${videoIdMatch[1]}/hqdefault.jpg` : poster;
  };

  const thumbnail = platform === 'YouTube' ? getYouTubeThumbnail(courseLink) : poster;

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
          src={thumbnail}
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

const skillFilters = ['HTML', 'CSS', 'JavaScript', 'Python', 'React'];

const CoursesList = () => {
  const [platformFilter, setPlatformFilter] = useState('');
  const [instructorFilter, setInstructorFilter] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [shuffledCourses, setShuffledCourses] = useState([]);

  // Function to shuffle the courses array
  const shuffleArray = (array) => {
    return array
      .map((item) => ({ ...item, sortKey: Math.random() }))
      .sort((a, b) => a.sortKey - b.sortKey)
      .map(({ sortKey, ...item }) => item);
  };

  // Shuffle courses on component mount and every 5 seconds if no filter is active
  useEffect(() => {
    if (!platformFilter && !instructorFilter && !domainFilter && !skillFilter) {
      setShuffledCourses(shuffleArray(courses));

      const interval = setInterval(() => {
        setShuffledCourses(shuffleArray(courses));
      }, 5000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    } else {
      // If a filter is active, show the original filtered courses
      setShuffledCourses(courses);
    }
  }, [platformFilter, instructorFilter, domainFilter, skillFilter]);

  const filteredCourses = shuffledCourses.filter((course) => {
    const matchesPlatform = platformFilter
      ? course.platform.toLowerCase().includes(platformFilter.toLowerCase())
      : true;

    const matchesInstructor = instructorFilter
      ? course.instructor.toLowerCase().includes(instructorFilter.toLowerCase())
      : true;

    const matchesDomain = domainFilter
      ? course.domain.some((d) => d.toLowerCase().includes(domainFilter.toLowerCase()))
      : true;

    const matchesSkill = skillFilter ? course.domain.some((d) => d.toLowerCase() === skillFilter.toLowerCase()) : true;

    return matchesPlatform && matchesInstructor && matchesDomain && matchesSkill;
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

      <div className="mb-4 flex justify-center gap-2">
        {skillFilters.map((skill) => (
          <button
            key={skill}
            onClick={() => setSkillFilter(skill)}
            className={`rounded-full border border-[#00a6fb] px-2 py-1 text-xs ${
              skillFilter === skill ? 'bg-[#00a6fb] text-white' : 'bg-gray-1000 text-[#00a6fb]'
            } transition hover:bg-[#00a6fb] hover:text-white`}
          >
            {skill}
          </button>
        ))}
        {skillFilter && (
          <button
            onClick={() => setSkillFilter('')}
            className="rounded-full border bg-red-500 px-2 py-1 text-xs text-white transition hover:bg-red-600"
          >
            Clear Filter
          </button>
        )}
      </div>

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
