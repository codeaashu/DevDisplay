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
  }, [id]);

  if (!achieverData) {
    return <div className="flex h-screen items-center justify-center bg-[#0d1b2a] text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e2a42] via-[#141d2f] to-[#0d1b2a] font-sans text-white">
      {/* Header Section */}
      <header className="relative flex flex-col items-center gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <motion.div
          className="z-10 max-w-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-extrabold leading-snug text-[#00a6fb] md:text-5xl">
            {achieverData.name}'s Journey in <span className="text-white">{achieverData.domain}</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Working at <span className="font-semibold text-white">{achieverData.company}</span> and achieving the
            following milestones:
          </p>
        </motion.div>

        <motion.img
          src={achieverData.imageURL}
          alt="Achiever"
          className="h-48 w-48 rounded-full border-4 border-[#00a6fb] object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </header>

      {/* Key Achievements */}
      <section className="container mx-auto px-6 py-8">
        <motion.div
          className="rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-2xl font-semibold text-[#00a6fb]">Key Achievements</h2>
          <ul className="list-disc space-y-2 pl-6 text-lg text-gray-300">
            {achieverData.keyAchievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </motion.div>
      </section>
      {/* Journey Sections */}
      <section className="container mx-auto space-y-12 px-6">
        {[
          {
            title: 'Starting Point',
            story: achieverData.journey.startingPoint.story,
            listTitle: 'Challenges Faced',
            list: achieverData.journey.startingPoint.challenges,
          },
          {
            title: 'Turning Points in My Journey',
            list: achieverData.journey.turningPoints.milestones,
            extraTitle: 'Influences & Mentorship',
            extraList: achieverData.journey.turningPoints.influences,
          },
          {
            title: 'Overcoming Challenges',
            list: achieverData.journey.resolutionOfChallenges.solutions,
          },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            className="rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-[#00a6fb]">{section.title}</h2>
            {section.story && <p className="mt-4 text-gray-300">{section.story}</p>}
            {section.list && (
              <>
                {section.listTitle && <h3 className="mt-4 text-lg font-semibold text-white">{section.listTitle}:</h3>}
                <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-300">
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            {section.extraTitle && (
              <>
                <h3 className="mt-4 text-lg font-semibold text-white">{section.extraTitle}:</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-300">
                  {section.extraList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        ))}
      </section>
      <section className="mx-auto mt-12 rounded-xl bg-gray-900 p-8 shadow-lg">
        {/* Section Title */}
        <h2 className="mb-6 border-b border-gray-700 pb-3 text-3xl font-bold text-[#00a6fb]">Interview Process</h2>

        {/* Preparation */}
        <div className="mb-8">
          <h3 className="mb-3 text-2xl font-semibold text-white">Preparation</h3>
          <ul className="list-disc space-y-2 pl-6">
            {achieverData.interviewProcess.preparation.resourcesUsed.map((resource, index) => (
              <li key={index} className="leading-relaxed text-gray-300">
                {resource}
              </li>
            ))}
          </ul>
          <p className="mt-3 italic text-gray-400">⏳ Timeline: {achieverData.interviewProcess.preparation.timeline}</p>
        </div>

        {/* Sample Interview Questions */}
        <div className="mb-8">
          <h3 className="mb-4 text-2xl font-semibold text-white">Sample Interview Questions</h3>
          {Object.keys(achieverData.interviewProcess.interviewQuestions.categories).map((category, index) => (
            <div key={index} className="mb-6 rounded-lg bg-gray-800 p-4">
              <h4 className="mb-2 text-lg font-semibold text-[#00a6fb]">{category}</h4>
              <ul className="list-disc space-y-1 pl-6">
                {achieverData.interviewProcess.interviewQuestions.categories[category].map((question, idx) => (
                  <li key={idx} className="text-gray-300">
                    {question}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-gray-400">💡 {achieverData.interviewProcess.interviewQuestions.answers[index]}</p>
            </div>
          ))}
        </div>
        {/* Tips for Success */}
        <div className="mb-8">
          <h3 className="mb-3 text-2xl font-semibold text-white">Tips for Success</h3>
          <ul className="list-disc space-y-2 pl-6">
            {achieverData.interviewProcess.tipsForSuccess.insights.map((insight, index) => (
              <li key={index} className="text-gray-300">
                {insight}
              </li>
            ))}
          </ul>
        </div>

        {/* Common Mistakes */}
        <div>
          <h3 className="mb-3 text-2xl font-semibold text-white">Common Mistakes</h3>
          <ul className="list-disc space-y-2 pl-6">
            {achieverData.interviewProcess.tipsForSuccess.commonMistakes.map((mistake, index) => (
              <li key={index} className="text-red-400">
                {mistake}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-lg">
        <h2 className="mb-6 text-3xl font-bold tracking-wide text-[#00a6fb]">Inspiration & Guidance</h2>
        {achieverData.inspirationAndGuidance.roadmaps.map((roadmap, index) => (
          <div
            key={index}
            className="mt-8 rounded-xl border border-gray-700 bg-gray-900 p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="mb-4 text-2xl font-semibold text-gray-100">{roadmap.goal}</h3>
            <ul className="list-disc space-y-2 pl-6">
              {roadmap.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="leading-relaxed text-gray-300 transition-colors hover:text-[#00a6fb]">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-gray-900 py-8 text-center">
        <h2 className="mb-4 text-xl text-gray-300">Connect with Me for Guidance</h2>
        <div className="flex justify-center gap-6">
          {[
            { icon: FaGithub, link: achieverData.socialsAndPortfolio.github },
            { icon: FaLinkedin, link: achieverData.socialsAndPortfolio.linkedin },
            { icon: FaTwitter, link: achieverData.socialsAndPortfolio.twitter },
            { icon: FaGlobe, link: achieverData.socialsAndPortfolio.personalPortfolio },
          ].map(({ icon: Icon, link }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 transition-colors hover:text-[#00a6fb]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default AchieverJourneyPage;
