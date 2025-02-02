import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const achieverData = {
  name: 'John Doe',
  imageURL:
    'https://media.licdn.com/dms/image/v2/D4D03AQHJBwrQB7MN_w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713861595241?e=1743638400&v=beta&t=DvJ89rAbsO5Pr2GQwX7mcs5XPm3Ibn5Sj9uZ56Eo6q8',
  domain: 'Software Development',
  company: 'Google',
  keyAchievements: [
    'FAANG placement at Google',
    'Selected for Google Summer of Code (GSoC) 2024',
    'Winner of National Coding Competition',
  ],
  journey: {
    startingPoint: {
      story:
        'I started my journey in tech with limited resources, coding on a second-hand laptop. My first encounter with programming was during my second year of college, where I learned the fundamentals of algorithms and data structures.',
      challenges: [
        'Lack of resources and mentorship in the early stages.',
        'Limited exposure to competitive programming and real-world projects.',
      ],
    },
    turningPoints: {
      milestones: [
        'Successfully built and deployed my first open-source project on GitHub.',
        'Attended my first tech meetup, where I connected with like-minded developers.',
      ],
      influences: [
        'Guidance from senior developers and mentors who helped shape my learning path.',
        'Active participation in open-source communities, where I contributed to several impactful projects.',
      ],
    },
    resolutionOfChallenges: {
      solutions: [
        'I leveraged free online resources like Coursera, YouTube tutorials, and coding platforms to improve my skills.',
        'I implemented effective time management by breaking down larger goals into smaller, achievable tasks.',
      ],
    },
  },
  interviewProcess: {
    preparation: {
      resourcesUsed: [
        'LeetCode for regular coding practice and algorithm challenges.',
        "The book 'Cracking the Coding Interview' for in-depth preparation on interview questions.",
        'Mock interviews with peers and online platforms to simulate real interview scenarios.',
      ],
      timeline:
        '6 months of consistent and focused preparation, prioritizing data structures, algorithms, and system design concepts.',
    },
    interviewQuestions: {
      categories: {
        DSA: [
          'Find the kth largest element in an unsorted array.',
          'Solve a dynamic programming problem related to finding the shortest path in a graph.',
        ],
        systemDesign: ['Design a URL shortening service with scalability and high availability.'],
        HR: [
          'Tell me about yourself and your journey into software development.',
          'Why do you want to work at Google, and how do you align with our mission?',
        ],
      },
      answers: [
        'For DSA, I emphasized my approach to breaking down problems into smaller sub-problems and optimizing solutions using dynamic programming and greedy algorithms.',
        "For system design, I walked the interviewers through the design of a scalable system, discussing trade-offs, fault tolerance, and redundancy to ensure the system's reliability.",
      ],
    },
    tipsForSuccess: {
      insights: [
        'Focus not just on writing code, but on problem-solving and optimizing your solutions.',
        'Clearly articulate your thought process during interviews, especially when faced with tough problems.',
      ],
      commonMistakes: [
        'Not asking clarifying questions when the problem statement is ambiguous.',
        'Overlooking edge cases and testing thoroughly before finalizing a solution.',
      ],
    },
  },
  resources: {
    learningMaterials: [
      {
        type: 'Book',
        title: 'Cracking the Coding Interview',
        link: 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850',
      },
      {
        type: 'Course',
        title: 'LeetCode Premium',
        link: 'https://leetcode.com/subscribe/',
      },
    ],
    studyTechniques: [
      'Start with the fundamentals of data structures and algorithms, then gradually move to advanced topics.',
      "Consistency is key—dedicate a fixed time each day for coding practice, even if it's just 1-2 hours.",
    ],
  },
  inspirationAndGuidance: {
    roadmaps: [
      {
        goal: 'Google Summer of Code (GSoC)',
        steps: [
          'Understand the structure of open-source contributions and the impact of GSoC projects.',
          'Identify organizations that align with your interests and passions and apply to them.',
          'Contribute to smaller open-source projects to gain experience before applying.',
          'Network with mentors and previous GSoC participants for guidance.',
          'Keep up-to-date with GSoC deadlines and follow all instructions in the application process.',
        ],
      },
      {
        goal: 'FAANG Placement',
        steps: [
          'Build a strong foundation in problem-solving, focusing on data structures and algorithms.',
          'Practice system design problems to prepare for technical interviews.',
          'Take part in mock interviews and challenges to improve problem-solving speed.',
          'Follow industry blogs and stay informed about the latest technology trends.',
          'Develop communication skills to effectively explain solutions during interviews.',
        ],
      },
    ],
    filters: {
      domain: 'Software Development',
      achievements: ['FAANG placement', 'GSoC'],
    },
  },
  socialsAndPortfolio: {
    github: 'https://github.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    personalPortfolio: 'https://johndoe.dev',
  },
};

const AchieverJourneyPage = () => {
  const {
    name,
    domain,
    company,
    keyAchievements,
    imageURL,
    journey,
    interviewProcess,
    resources,
    inspirationAndGuidance,
    socialsAndPortfolio,
  } = achieverData;

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1e2a42] via-[#141d2f] to-[#0d1b2a] p-4 text-white">
      {/* Header Section */}
      <header className="relative flex items-center justify-between bg-cover bg-center p-4 pt-8">
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center p-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-[#00a6fb]">
            {name}'s Journey in {domain}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            Working at {company} and achieving the following milestones:
          </p>
          <section className="container mt-12 p-8">
            <h2 className="text-2xl font-semibold text-[#00a6fb]">Key Achievements</h2>
            <ul className="list-disc pl-6 text-lg">
              {keyAchievements.map((achievement, index) => (
                <li key={index} className="text-lg text-gray-300">
                  {achievement}
                </li>
              ))}
            </ul>
          </section>
        </motion.div>

        <div className="relative z-10">
          <img
            src={imageURL}
            alt="Achiever"
            className="h-48 w-48 rounded-full border-4 border-[#00a6fb] object-cover"
          />
        </div>
      </header>

      {/* Starting Point Section */}
      <section className=" mx-auto mt-4 p-8">
        <motion.h2
          className="text-3xl font-bold text-[#00a6fb]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Starting Point
        </motion.h2>
        <p className="mt-4 text-lg text-gray-300">{journey.startingPoint.story}</p>
        <h3 className="mt-4 text-xl font-semibold">Challenges Faced:</h3>
        <ul className="list-disc pl-6">
          {journey.startingPoint.challenges.map((challenge, index) => (
            <li key={index} className="text-gray-300">
              {challenge}
            </li>
          ))}
        </ul>

        <motion.h2
          className="mt-8 text-3xl font-bold text-[#00a6fb]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Turning Points in My Journey
        </motion.h2>
        <ul className="list-disc pl-6">
          {journey.turningPoints.milestones.map((milestone, index) => (
            <li key={index} className="text-gray-300">
              {milestone}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 text-xl font-semibold">Influences & Mentorship:</h3>
        <ul className="list-disc pl-6">
          {journey.turningPoints.influences.map((influence, index) => (
            <li key={index} className="text-gray-300">
              {influence}
            </li>
          ))}
        </ul>

        <motion.h2
          className="mt-8 text-3xl font-bold text-[#00a6fb]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Overcoming Challenges
        </motion.h2>
        <ul className="list-disc pl-6">
          {journey.resolutionOfChallenges.solutions.map((solution, index) => (
            <li key={index} className="text-gray-300">
              {solution}
            </li>
          ))}
        </ul>
      </section>

      {/* Interview Process */}
      <section className=" mx-auto mt-12 p-8">
        <h2 className="text-2xl font-semibold text-[#00a6fb]">Interview Process</h2>
        <h3 className="mt-4 text-xl font-semibold">Preparation</h3>
        <ul className="list-disc pl-6">
          {interviewProcess.preparation.resourcesUsed.map((resource, index) => (
            <li key={index} className="text-gray-300">
              {resource}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-gray-300">Preparation Timeline: {interviewProcess.preparation.timeline}</p>

        <h3 className="mt-8 text-xl font-semibold">Sample Interview Questions</h3>
        {Object.keys(interviewProcess.interviewQuestions.categories).map((category, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold text-gray-300">{category}</h4>
            <ul className="list-disc pl-6">
              {interviewProcess.interviewQuestions.categories[category].map((question, index) => (
                <li key={index} className="text-gray-300">
                  {question}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-gray-300">{interviewProcess.interviewQuestions.answers[index]}</p>
          </div>
        ))}

        <h3 className="mt-8 text-xl font-semibold">Tips for Success</h3>
        <ul className="list-disc pl-6">
          {interviewProcess.tipsForSuccess.insights.map((insight, index) => (
            <li key={index} className="text-gray-300">
              {insight}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 text-xl font-semibold">Common Mistakes</h3>
        <ul className="list-disc pl-6">
          {interviewProcess.tipsForSuccess.commonMistakes.map((mistake, index) => (
            <li key={index} className="text-gray-300">
              {mistake}
            </li>
          ))}
        </ul>
      </section>

      {/* Resources for Preparation */}
      <section className=" mx-auto mt-12 p-8">
        <h2 className="text-2xl font-semibold text-[#00a6fb]">Resources for Preparation</h2>
        {resources.learningMaterials.map((material, index) => (
          <div key={index} className="mt-4">
            <a href={material.link} className="font-semibold text-[#00a6fb]">
              {material.title}
            </a>
            <span className="ml-2 text-gray-300">{material.type}</span>
          </div>
        ))}

        <h3 className="mt-8 text-xl font-semibold">Study Techniques</h3>
        <ul className="list-disc pl-6">
          {resources.studyTechniques.map((technique, index) => (
            <li key={index} className="text-gray-300">
              {technique}
            </li>
          ))}
        </ul>
      </section>

      {/* Inspirational Journey */}
      <section className=" mx-auto mt-12 p-8">
        <h2 className="text-2xl font-semibold text-[#00a6fb]">Inspiration & Guidance</h2>
        {inspirationAndGuidance.roadmaps.map((roadmap, index) => (
          <div key={index} className="mt-8">
            <h3 className="text-xl font-semibold text-gray-300">{roadmap.goal}</h3>
            <ul className="list-disc pl-6">
              {roadmap.steps.map((step, index) => (
                <li key={index} className="text-gray-300">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Socials & Portfolio */}
      <footer className="bg-gray-900 py-6 text-center">
        <h2 className="mb-4 text-xl text-gray-300">Connect with Me for Guidance</h2>
        <div className="flex justify-center gap-4">
          <a href={socialsAndPortfolio.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-300 hover:text-[#00a6fb]" />
          </a>
          <a href={socialsAndPortfolio.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-300 hover:text-[#00a6fb]" />
          </a>
          <a href={socialsAndPortfolio.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-gray-300 hover:text-[#00a6fb]" />
          </a>
          <a href={socialsAndPortfolio.personalPortfolio} target="_blank" rel="noopener noreferrer">
            <FaGlobe className="text-2xl text-gray-300 hover:text-[#00a6fb]" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AchieverJourneyPage;
