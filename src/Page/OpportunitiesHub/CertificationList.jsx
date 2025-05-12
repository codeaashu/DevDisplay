'use client';

import { useState } from 'react';
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
    price: 'Free',
  },
  {
    organizer: 'Independent',
    title: 'Ethics of AI',
    duration: 'NA',
    level: 'Beginner',
    skills: ['AI ethics', 'AI Rights?'],
    referralCode: 'devdisplay',
    ApplyLink: 'https://ethics-of-ai.mooc.fi/start',
    poster: '/assets/Certifications/Ethics of AI.png',
    shareLink: '#ethics-of-ai',
    price: 'Free',
  },
  {
    organizer: 'Freecodecamp',
    title: 'Responsive Web Design',
    duration: '4 Weeks',
    level: 'Beginner',
    skills: ['HTML5', 'CSS', 'Responsive Web'],
    referralCode: 'devdisplay',
    ApplyLink: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
    poster: '/assets/Certifications/Responsive Web Design.png',
    shareLink: '#responsive-web-design',
    price: 'Free',
  },
  {
    organizer: 'Openlearn',
    title: 'IT in everyday life',
    duration: '1 Week',
    level: 'Intermediate',
    skills: ['Network', 'Data', 'Internet'],
    referralCode: 'devdisplay',
    ApplyLink:
      'https://www.open.edu/openlearn/science-maths-technology/it-everyday-life/content-section-0?active-tab=description-tab',
    poster: '/assets/Certifications/IT in everyday life.png',
    shareLink: '#it-in-eveRyday-life',
    price: 'Free',
  },
  {
    organizer: 'Google Cloud',
    title: 'Introduction to Generative AI',
    duration: '1 Day',
    level: 'Beginner',
    skills: ['Generative AI', 'Generative AI Quiz'],
    referralCode: 'devdisplay',
    ApplyLink: 'https://www.cloudskillsboost.google/course_templates/536',
    poster: '/assets/Certifications/Introduction to Generative AI.png',
    shareLink: '#introduction-to-generative-ai',
    price: 'Free',
  },
  {
    organizer: 'Codesignal',
    title: 'Understanding LLMs and Basic Prompting Techniques',
    duration: '1 Day',
    level: 'Beginner',
    skills: ['LLMs', 'Effective Prompting', 'LLM Prompting'],
    referralCode: 'devdisplay',
    ApplyLink:
      'https://codesignal.com/learn/courses/understanding-llms-and-basic-prompting-techniques?utm_campaign=classcentral-courses_Q4_25_&utm_medium=referral&utm_source=classcentral&utm_content=go-to-class',
    poster: '/assets/Certifications/Understanding LLMs and Basic Prompting Techniques.png',
    shareLink: '#understanding-llms-and-basic-prompting-techniques',
    price: 'Free',
  },
  {
    organizer: 'Codesignal',
    title: 'Prompt Engineering for Everyone',
    duration: '1 Day',
    level: 'Beginner',
    skills: ['Understanding LLMs', 'Prompt Engineering'],
    referralCode: 'devdisplay',
    ApplyLink:
      'https://codesignal.com/learn/paths/prompt-engineering-for-everyone?utm_campaign=classcentral-courses_Q4_25_&utm_medium=referral&utm_source=classcentral&utm_content=go-to-class',
    poster: '/assets/Certifications/Prompt Engineering for Everyone.png',
    shareLink: '#prompt-engineering-for-everyone',
    price: 'Free',
  },
  {
    organizer: 'Independent',
    title: 'DevOps with Kubernetes',
    duration: '2 Weeks',
    level: 'Intermediate',
    skills: ['Kubernates', 'Deploy', 'GitOps'],
    referralCode: 'devdisplay',
    ApplyLink: 'https://devopswithkubernetes.com/',
    poster: '/assets/Certifications/DevOps with Kubernetes.png',
    shareLink: '#devops-with-kubernetes',
    price: 'Free',
  },
  {
    organizer: 'Kaggle',
    title: 'Intro to Deep Learning',
    duration: '1 Day',
    level: 'Beginner',
    skills: ['DNN', 'Gradient Descent', 'Binay Classification'],
    referralCode: 'devdisplay',
    ApplyLink: 'https://www.kaggle.com/learn/intro-to-deep-learning',
    poster: '/assets/Certifications/Intro to Deep Learning.png',
    shareLink: '#intro-to-deep-learning',
    price: 'Free',
  },
  {
    organizer: 'Freecodecamp',
    title: 'Scientific Computing with Python',
    duration: '4 Week',
    level: 'Intermediate',
    skills: ['Python', 'Data Structures', 'Algorithm', 'OPPs'],
    referralCode: 'devdisplay',
    ApplyLink: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
    poster: '/assets/Certifications/Scientific Computing with Python.png',
    shareLink: '#scientific-computing-with-python',
    price: 'Free',
  },
  {
    organizer: 'Google Cloud',
    title: 'Cloud Digital Leader',
    duration: '4 Weeks',
    level: 'Beginner',
    skills: ['Cloud Computing', 'Google Cloud Products', 'Business Use Cases'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/learn/certification/cloud-digital-leader',
    poster: '/assets/Certifications/CloudDigitalLeader.png',
    shareLink: '#cloud-digital-leader',
    price: '$99',
  },
  {
    organizer: 'Google Cloud',
    title: 'Associate Cloud Engineer',
    duration: '6 Months',
    level: 'Intermediate',
    skills: ['Cloud Computing', 'Application Deployment', 'Operations Monitoring'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/learn/certification/cloud-engineer',
    poster: '/assets/Certifications/AssociateCloudEngineer.png',
    shareLink: '#associate-cloud-engineer',
    price: '$125',
  },
  {
    organizer: 'Google Cloud',
    title: 'Associate Google Workspace Administrator',
    duration: '6 Months',
    level: 'Intermediate',
    skills: ['Google Workspace', 'Cloud Administration', 'User Management'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/certification/associate-google-workspace-administrator',
    poster: '/assets/Certifications/GoogleWorkspaceAdministrator.png',
    shareLink: '#google-workspace-administrator',
    price: '$125',
  },
  {
    organizer: 'Google Cloud',
    title: 'Associate Data Practitioner',
    duration: '6 Months',
    level: 'Intermediate',
    skills: ['Data Management', 'Cloud Computing', 'Data Processing'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/learn/certification/data-practitioner',
    poster: '/assets/Certifications/DataPractitioner.png',
    shareLink: '#data-practitioner',
    price: '$125',
  },
  {
    organizer: 'Google Cloud',
    title: 'Professional Cloud Architect',
    duration: '1 Year',
    level: 'Advanced',
    skills: ['Cloud Architecture', 'Solution Design', 'Infrastructure Management'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/learn/certification/cloud-architect',
    poster: '/assets/Certifications/ProfessionalCloudArchitect.png',
    shareLink: '#professional-cloud-architect',
    price: '$200',
  },
  {
    organizer: 'Google Cloud',
    title: 'Professional Cloud Database Engineer',
    duration: '1 Year',
    level: 'Advanced',
    skills: ['Database Management', 'Cloud Databases', 'Data Optimization'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/certification/cloud-database-engineer',
    poster: '/assets/Certifications/ProfessionalCloudDatabaseEngineer.png',
    shareLink: '#professional-cloud-database-engineer',
    price: '$200',
  },
  {
    organizer: 'Google Cloud',
    title: 'Professional Cloud Developer',
    duration: '1 Year',
    level: 'Advanced',
    skills: ['Cloud Development', 'Application Development', 'Scalability'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/learn/certification/cloud-developer',
    poster: '/assets/Certifications/ProfessionalCloudDeveloper.png',
    shareLink: '#professional-cloud-developer',
    price: '$200',
  },
  {
    organizer: 'Google Cloud',
    title: 'Professional Data Engineer',
    duration: '1 Year',
    level: 'Advanced',
    skills: ['Data Engineering', 'Machine Learning', 'Data Processing'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/learn/certification/data-engineer',
    poster: '/assets/Certifications/ProfessionalDataEngineer.png',
    shareLink: '#professional-data-engineer',
    price: '$200',
  },
  {
    organizer: 'Google Cloud',
    title: 'Professional Cloud DevOps Engineer',
    duration: '1 Year',
    level: 'Advanced',
    skills: ['DevOps', 'CI/CD', 'Site Reliability'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/certification/cloud-devops-engineer',
    poster: '/assets/Certifications/ProfessionalCloudDevOpsEngineer.png',
    shareLink: '#professional-cloud-devops-engineer',
    price: '$200',
  },
  {
    organizer: 'Google Cloud',
    title: 'Professional Cloud Security Engineer',
    duration: '1 Year',
    level: 'Advanced',
    skills: ['Cloud Security', 'Identity Management', 'Compliance'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/certification/cloud-security-engineer',
    poster: '/assets/Certifications/ProfessionalCloudSecurityEngineer.png',
    shareLink: '#professional-cloud-security-engineer',
    price: '$200',
  },
  {
    organizer: 'Google Cloud',
    title: 'Professional Cloud Network Engineer',
    duration: '1 Year',
    level: 'Advanced',
    skills: ['Cloud Networking', 'Network Design', 'Connectivity'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/certification/cloud-network-engineer',
    poster: '/assets/Certifications/ProfessionalCloudNetworkEngineer.png',
    shareLink: '#professional-cloud-network-engineer',
    price: '$200',
  },
  {
    organizer: 'Google Cloud',
    title: 'Professional Machine Learning Engineer',
    duration: '1 Year',
    level: 'Advanced',
    skills: ['Machine Learning', 'AI Model Deployment', 'Data Science'],
    referralCode: 'gcloudcert',
    ApplyLink: 'https://cloud.google.com/certification/machine-learning-engineer',
    poster: '/assets/Certifications/ProfessionalMachineLearningEngineer.png',
    shareLink: '#professional-machine-learning-engineer',
    price: '$200',
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
  max-width: 350px;
  margin: 0.5rem;

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
  price,
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
          src={poster || '/placeholder.svg'}
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

      <div className="mb-1 text-center text-sm text-[#00a6fb]">Price: {price}</div>

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

const StyledcertificationListContainer = styled.div`
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
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  input,
  select {
    padding: 0.75rem 1rem;
    border: 1px solid #00a6fb;
    border-radius: 9999px;
    background: rgba(15, 27, 53, 0.9);
    color: #ffffff;
    font-size: 1rem;
    min-width: 200px;
    flex: 1;
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

  .filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    input,
    select {
      width: 100%;
      min-width: unset;
    }

    .filter-row {
      flex-direction: column;
    }
  }
`;

const CertificationList = () => {
  const [filters, setFilters] = useState({
    search: '',
    organizer: '',
    level: '',
    price: '',
    selectedDomain: '',
  });

  const skillCategories = {
    Cloud: [
      'Cloud Computing',
      'Google Cloud Products',
      'Cloud Administration',
      'Cloud Architecture',
      'Cloud Databases',
      'Cloud Development',
      'Cloud Networking',
      'Cloud Security',
      'Application Deployment',
      'Operations Monitoring',
      'Solution Design',
      'Infrastructure Management',
      'Data Optimization',
      'Scalability',
      'Network Design',
      'Connectivity',
      'Identity Management',
      'Compliance',
      'CI/CD',
      'Site Reliability',
    ],
    AI: [
      'Generative AI',
      'Generative AI Quiz',
      'LLMs',
      'Effective Prompting',
      'LLM Prompting',
      'Understanding LLMs',
      'Prompt Engineering',
      'AI ethics',
      'AI Rights?',
      'Machine Learning',
      'AI Model Deployment',
      'Data Science',
      'DNN',
      'Gradient Descent',
      'Binay Classification',
    ],
    WebDevelopment: ['HTML5', 'CSS', 'Responsive Web', 'JavaScript'],
    DevOps: ['Kubernates', 'Deploy', 'GitOps', 'DevOps'],
    Data: [
      'Data Management',
      'Data Processing',
      'Data Engineering',
      'Data Structures',
      'Network',
      'Data',
      'Internet',
      'Business Use Cases',
      'User Management',
    ],
    Programming: ['Python', 'Algorithm', 'OPPs', 'Algorithms'],
  };

  const skillToCategory = {};
  Object.entries(skillCategories).forEach(([category, skills]) => {
    skills.forEach((skill) => {
      skillToCategory[skill] = category;
    });
  });

  const uniqueOrganizers = [...new Set(certification.map((cert) => cert.organizer))];
  const uniqueLevels = [...new Set(certification.map((cert) => cert.level))];
  const uniqueCategories = Object.keys(skillCategories);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      search: value,
    }));
  };

  const handleOrganizerChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      organizer: e.target.value,
    }));
  };

  const handleLevelChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      level: e.target.value,
    }));
  };

  const handlePriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      price: e.target.value,
    }));
  };

  const handleDomainChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      selectedDomain: e.target.value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      organizer: '',
      level: '',
      price: '',
      selectedDomain: '',
    });
  };

  const filteredCertifications = certification.filter((cert) => {
    const searchMatch =
      filters.search === '' ||
      cert.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      cert.organizer.toLowerCase().includes(filters.search.toLowerCase()) ||
      cert.skills.some((skill) => skill.toLowerCase().includes(filters.search.toLowerCase()));

    const organizerMatch = filters.organizer === '' || cert.organizer === filters.organizer;

    const levelMatch = filters.level === '' || cert.level === filters.level;

    const priceMatch =
      filters.price === '' ||
      (filters.price === 'Free' ? cert.price === 'Free' : filters.price === 'Paid' ? cert.price !== 'Free' : true);

    const domainMatch =
      filters.selectedDomain === '' || cert.skills.some((skill) => skillToCategory[skill] === filters.selectedDomain);

    return searchMatch && organizerMatch && levelMatch && priceMatch && domainMatch;
  });

  return (
    <>
      <FilterContainer>
        <div className="filter-row">
          <input
            type="text"
            placeholder="Search by title, provider or skills"
            value={filters.search}
            onChange={handleSearchChange}
          />

          <select value={filters.selectedDomain} onChange={handleDomainChange}>
            <option value="">All Domains</option>
            {uniqueCategories.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-row">
          <select value={filters.organizer} onChange={handleOrganizerChange}>
            <option value="">All Providers</option>
            {uniqueOrganizers.map((org, idx) => (
              <option key={idx} value={org}>
                {org}
              </option>
            ))}
          </select>

          <select value={filters.level} onChange={handleLevelChange}>
            <option value="">All Levels</option>
            {uniqueLevels.map((level, idx) => (
              <option key={idx} value={level}>
                {level}
              </option>
            ))}
          </select>

          <select value={filters.price} onChange={handlePriceChange}>
            <option value="">All Prices</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
        </div>
      </FilterContainer>

      {(filters.search || filters.organizer || filters.level || filters.price || filters.selectedDomain) && (
        <div className="mb-4 flex justify-center">
          <button onClick={clearFilters} className="rounded-full bg-red-600 px-3 py-1 text-sm text-white">
            Clear Filters
          </button>
        </div>
      )}

      {filteredCertifications.length === 0 ? (
        <div className="p-8 text-center text-white">
          <h3 className="mb-2 text-xl font-bold">No certifications found</h3>
          <p>Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <StyledcertificationListContainer>
          {filteredCertifications.map((cert, idx) => (
            <CertificationCardComponent key={idx} {...cert} />
          ))}
        </StyledcertificationListContainer>
      )}

      <div className="mt-4 text-center text-gray-400">
        Showing {filteredCertifications.length} of {certification.length} certifications
      </div>
    </>
  );
};

export default CertificationList;
