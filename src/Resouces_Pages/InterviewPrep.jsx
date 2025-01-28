import React from 'react';
import Navbar from './commonComponents/Navbar';

const InterviewPrep = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="min-h-[70vh] p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#00a6fb]">Interview Preparation Guide</h1>
        <div className="space-y-8">
          <p className="text-lg text-gray-300">
            Preparing for an interview is essential to land your dream job. It’s not just about knowing the technical
            skills, but also about being mentally prepared, having the right attitude, and knowing how to showcase your
            strengths. Here's a comprehensive guide to help you prepare for your next interview.
          </p>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">1. Research the Company</h2>
          <p className="text-lg text-gray-300">
            Before you even think about the interview questions, take time to research the company you're interviewing
            with. Understand their products, services, values, and culture.
          </p>
          <p className="text-lg text-gray-300">
            Some key points to research:
            <ul className="ml-8 list-disc text-gray-300">
              <li>Company mission and vision</li>
              <li>Latest news and product launches</li>
              <li>Company culture and values</li>
              <li>The team you’ll be working with (if possible)</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">2. Review Common Interview Questions</h2>
          <p className="text-lg text-gray-300">
            It’s essential to prepare answers for common interview questions like:
          </p>
          <ul className="ml-8 list-disc text-lg text-gray-300">
            <li>Tell me about yourself</li>
            <li>Why do you want to work here?</li>
            <li>What are your strengths and weaknesses?</li>
            <li>Where do you see yourself in 5 years?</li>
            <li>Why should we hire you?</li>
          </ul>
          <p className="text-lg text-gray-300">
            Practice your responses, but don’t memorize them. You want to sound natural and conversational during the
            interview.
          </p>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">3. Prepare for Technical Questions</h2>
          <p className="text-lg text-gray-300">
            If you're interviewing for a technical role, expect to face coding questions, algorithms, or system design
            challenges. Here’s how to get ready:
          </p>
          <ul className="ml-8 list-disc text-lg text-gray-300">
            <li>Practice coding problems on platforms like LeetCode, HackerRank, or CodeSignal.</li>
            <li>Understand basic algorithms and data structures (arrays, linked lists, trees, graphs, etc.).</li>
            <li>
              Be comfortable with system design interviews (e.g., designing a URL shortener, scalable systems, etc.).
            </li>
            <li>Practice explaining your thought process and coding out solutions clearly.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">4. Mock Interviews</h2>
          <p className="text-lg text-gray-300">
            Mock interviews are a great way to simulate the interview environment and get feedback on your performance.
            You can do mock interviews with peers, mentors, or use platforms like Pramp and Interviewing.io.
          </p>
          <p className="text-lg text-gray-300">
            Focus on:
            <ul className="ml-8 list-disc text-gray-300">
              <li>Improving your communication skills</li>
              <li>Learning to handle pressure and thinking on your feet</li>
              <li>Handling technical questions and coding on a whiteboard (if applicable)</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">5. Review Your Resume and Portfolio</h2>
          <p className="text-lg text-gray-300">
            Your resume is your personal marketing document. Be prepared to discuss every detail listed on it. Review
            your projects, work experience, and skills in detail. Be ready to answer questions like:
          </p>
          <ul className="ml-8 list-disc text-lg text-gray-300">
            <li>Why did you choose a particular technology for your project?</li>
            <li>How did you solve specific problems in your previous roles?</li>
            <li>What was your biggest achievement in your last position?</li>
          </ul>
          <p className="text-lg text-gray-300">
            If you have a portfolio or GitHub, make sure to showcase your best work, including side projects,
            open-source contributions, or anything else that highlights your skills.
          </p>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">6. Prepare Questions for the Interviewer</h2>
          <p className="text-lg text-gray-300">
            Interviews are a two-way street. Prepare thoughtful questions to ask the interviewer. This shows your
            interest in the role and the company.
          </p>
          <ul className="ml-8 list-disc text-lg text-gray-300">
            <li>What does a typical day look like for someone in this role?</li>
            <li>What are the biggest challenges the team is currently facing?</li>
            <li>How does the company support professional growth and development?</li>
            <li>What is the team culture like?</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">7. Dress Professionally and Be Punctual</h2>
          <p className="text-lg text-gray-300">
            Whether it’s a virtual or in-person interview, always dress professionally. Your attire should reflect the
            company’s culture. For virtual interviews, ensure you have a quiet environment and a stable internet
            connection.
          </p>
          <p className="text-lg text-gray-300">
            Be punctual for the interview. Aim to join the interview a few minutes early to ensure everything is set up.
          </p>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">8. Stay Calm and Confident</h2>
          <p className="text-lg text-gray-300">
            It’s natural to feel nervous before an interview, but remember that the interviewer wants you to succeed.
            Stay calm, breathe, and answer questions confidently. Don’t be afraid to ask for clarification if you don’t
            understand a question.
          </p>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">Best Practices for Interview Success</h2>
          <ul className="ml-8 list-disc text-lg text-gray-300">
            <li>Practice active listening during the interview.</li>
            <li>Don’t rush your answers; take your time to think.</li>
            <li>Show enthusiasm for the role and the company.</li>
            <li>Be prepared to discuss your strengths and how they align with the role.</li>
            <li>Follow up with a thank-you email after the interview.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default InterviewPrep;
