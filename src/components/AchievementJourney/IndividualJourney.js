import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';
import achievers from '../../DB/achieversData.json';
import { useParams } from 'react-router-dom';

const AchieverJourneyPage = () => {
  const { id } = useParams();
  const [achieverData, setAchieverData] = useState(null);

  useEffect(() => {
    const item = achievers.find((item) => item.id == id);
    setAchieverData(item);
  }, []);

  if (achieverData == null) {
    return <>Loading ...</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1e2a42] via-[#141d2f] to-[#0d1b2a] p-4 text-white">
      <header className="relative flex items-center justify-between bg-cover bg-center p-4 pt-8">
        <motion.div
          className="relative z-10 flex h-full flex-col items-center justify-center p-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-[#00a6fb]">
            {achieverData.name}'s Journey in {achieverData.domain}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            Working at {achieverData.company} and achieving the following milestones:
          </p>
          <section className="container mt-12 p-8">
            <h2 className="text-2xl font-semibold text-[#00a6fb]">Key Achievements</h2>
            <ul className="list-disc pl-6 text-lg">
              {achieverData.keyAchievements.map((achievement, index) => (
                <li key={index} className="text-lg text-gray-300">
                  {achievement}
                </li>
              ))}
            </ul>
          </section>
        </motion.div>

        <div className="relative z-10">
          <img
            src={achieverData.imageURL}
            alt="Achiever"
            className="h-48 w-48 rounded-full border-4 border-[#00a6fb] object-cover"
          />
        </div>
      </header>

      <section className="mx-auto mt-4 p-8">
        <motion.h2
          className="text-3xl font-bold text-[#00a6fb]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Starting Point
        </motion.h2>
        <p className="mt-4 text-lg text-gray-300">{achieverData.journey.startingPoint.story}</p>
        <h3 className="mt-4 text-xl font-semibold">Challenges Faced:</h3>
        <ul className="list-disc pl-6">
          {achieverData.journey.startingPoint.challenges.map((challenge, index) => (
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
          {achieverData.journey.turningPoints.milestones.map((milestone, index) => (
            <li key={index} className="text-gray-300">
              {milestone}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 text-xl font-semibold">Influences & Mentorship:</h3>
        <ul className="list-disc pl-6">
          {achieverData.journey.turningPoints.influences.map((influence, index) => (
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
          {achieverData.journey.resolutionOfChallenges.solutions.map((solution, index) => (
            <li key={index} className="text-gray-300">
              {solution}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-12 p-8">
        <h2 className="text-2xl font-semibold text-[#00a6fb]">Interview Process</h2>
        <h3 className="mt-4 text-xl font-semibold">Preparation</h3>
        <ul className="list-disc pl-6">
          {achieverData.interviewProcess.preparation.resourcesUsed.map((resource, index) => (
            <li key={index} className="text-gray-300">
              {resource}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-gray-300">Preparation Timeline: {achieverData.interviewProcess.preparation.timeline}</p>

        <h3 className="mt-8 text-xl font-semibold">Sample Interview Questions</h3>
        {Object.keys(achieverData.interviewProcess.interviewQuestions.categories).map((category, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold text-gray-300">{category}</h4>
            <ul className="list-disc pl-6">
              {achieverData.interviewProcess.interviewQuestions.categories[category].map((question, index) => (
                <li key={index} className="text-gray-300">
                  {question}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-gray-300">{achieverData.interviewProcess.interviewQuestions.answers[index]}</p>
          </div>
        ))}

        <h3 className="mt-8 text-xl font-semibold">Tips for Success</h3>
        <ul className="list-disc pl-6">
          {achieverData.interviewProcess.tipsForSuccess.insights.map((insight, index) => (
            <li key={index} className="text-gray-300">
              {insight}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 text-xl font-semibold">Common Mistakes</h3>
        <ul className="list-disc pl-6">
          {achieverData.interviewProcess.tipsForSuccess.commonMistakes.map((mistake, index) => (
            <li key={index} className="text-gray-300">
              {mistake}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-12 p-8">
        <h2 className="text-2xl font-semibold text-[#00a6fb]">Resources for Preparation</h2>
        {achieverData.resources.learningMaterials.map((material, index) => (
          <div key={index} className="mt-4">
            <a href={material.link} className="font-semibold text-[#00a6fb]">
              {material.title}
            </a>
            <span className="ml-2 text-gray-300">{material.type}</span>
          </div>
        ))}

        <h3 className="mt-8 text-xl font-semibold">Study Techniques</h3>
        <ul className="list-disc pl-6">
          {achieverData.resources.studyTechniques.map((technique, index) => (
            <li key={index} className="text-gray-300">
              {technique}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-12 p-8">
        <h2 className="text-2xl font-semibold text-[#00a6fb]">Inspiration & Guidance</h2>
        {achieverData.inspirationAndGuidance.roadmaps.map((roadmap, index) => (
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

      <footer className="bg-gray-900 py-6 text-center">
        <h2 className="mb-4 text-xl text-gray-300">Connect with Me for Guidance</h2>
        <div className="flex justify-center gap-4">
          <a href={achieverData.socialsAndPortfolio.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-300 hover:text-[#00a6fb]" />
          </a>
          <a href={achieverData.socialsAndPortfolio.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-300 hover:text-[#00a6fb]" />
          </a>
          <a href={achieverData.socialsAndPortfolio.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-gray-300 hover:text-[#00a6fb]" />
          </a>
          <a href={achieverData.socialsAndPortfolio.personalPortfolio} target="_blank" rel="noopener noreferrer">
            <FaGlobe className="text-2xl text-gray-300 hover:text-[#00a6fb]" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AchieverJourneyPage;
