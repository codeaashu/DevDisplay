import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer/Footer';

export default function About() {
  const navigateToGitHub = () => {
    window.location.href = 'https://github.com/codeaashu/DevDisplay';
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#0d1b2a] text-white">
        <header
          className="relative h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              backgroundImage: 'linear-gradient(135deg, #1e2a42, #141d2f)',
              backgroundSize: '400% 400%',
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <motion.div
            className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mx-auto max-w-4xl">
              <h1 className="text-6xl font-bold">DevDisplay</h1>
              <p className="mt-4 text-xl">Connect ▸ Collab ▸ Code ▸ Create ▸ Conquer</p>
              <p className="mt-6 text-lg">
                DevDisplay is a global open-source tech community and organization that brings together all your tech
                needs in one place.
              </p>
            </div>
          </motion.div>
        </header>

        <section className="container mx-auto mt-12 p-8 text-center">
          <motion.h2
            className="text-2xl font-bold text-[#00a6fb]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            We're on a mission to unite all your tech needs under one platform and establish DevDisplay as the Tech
            Enthusiast and Developer's First Platform. DevDisplay serves as the ultimate hub for developers to Connect ▸
            Collab ▸ Code ▸ Create ▸ Conquer in the tech ecosystem.
          </motion.h2>

          <div className="mt-6 rounded-lg bg-[#e3f2fd] p-6 text-left text-gray-900 shadow-md">
            <p>One platform to discover extraordinary tech talent.</p>
            <p>One platform to connect with like-minded tech enthusiasts.</p>
            <p>One platform to collaborate on innovative, groundbreaking ideas.</p>
            <p>One platform to build next-gen projects with a community of innovators.</p>
            <p>One platform to spark inspiration and unleash creativity.</p>
            <p>One platform to access curated tech resources in a single space.</p>
            <p>One platform to explore the latest opportunities in the tech world.</p>
            <p>One platform to bring your ideas to life and turn concepts into reality.</p>
            <p>One platform to showcase your projects to a global audience.</p>
            <p>One platform to highlight your skills and expertise like never before.</p>
            <p>One platform to promote your work and gain unparalleled visibility.</p>
            <p>One platform to learn, grow, and thrive alongside a vibrant community.</p>
            <p>One platform to earn rewards and monetize your tech skills.</p>
            <p>One platform to enjoy exclusive benefits as a valued tech enthusiast.</p>
          </div>
        </section>

        <section className="container mx-auto mt-12 p-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-[#00a6fb]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Proposed Implementation Ideas for GSoC Contributors
          </motion.h2>

          {/* Idea List - 1*/}
          <div className="mt-6 rounded-lg bg-[#e3f2fd] p-6 text-left text-gray-900 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800">1. Opportunities Hub Feature</h3>
            <p className="mt-4 text-lg">
              Create a Centralized and Interactive feature on DevDisplay Platform for Tech Opportunities. Develop a
              comprehensive and user-friendly feature for developers, designers, and tech enthusiasts to explore diverse
              opportunities within the tech industry. This platform will serve as a one-stop hub for discovering:
            </p>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">
              Dynamic Opportunity Categories – Effortlessly organize opportunities into clearly defined, interactive
              categories for easy navigation:
            </h4>

            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>
                <strong>Hybrid & Onsite Jobs:</strong> Allow users to filter roles by job type, location, experience
                level, and company, making it easy to find their ideal position.
              </li>
              <li>
                <strong>Remote Jobs:</strong> Showcase work-from-anywhere roles, emphasizing flexible and
                location-independent opportunities.
              </li>
              <li>
                <strong>Internships:</strong> Include paid and unpaid opportunities for students, fresh graduates, and
                early-career professionals.
              </li>
              <li>
                <strong>Freelance Work:</strong> Highlight project-specific and contract-based roles ideal for
                independent contributors.
              </li>
              <li>
                <strong>Hackathons:</strong> Provide detailed information on themes, deadlines, rewards, team
                requirements, and registration links.
              </li>
              <li>
                <strong>Open-Source Projects:</strong> Promote beginner-friendly and advanced projects seeking
                contributors, encouraging community collaboration.
              </li>
              <li>
                <strong>Tech Events & DevFests:</strong> Feature a curated list of webinars, conferences, summits, and
                local or global developer meetups.
              </li>
              <li>
                <strong>Bootcamps & Courses:</strong> Highlight immersive learning programs, both free and paid,
                tailored for skill-building and career growth.
              </li>
              <li>
                <strong>Certifications & Skill Development:</strong> Showcase courses and training that provide
                industry-recognized certifications to boost career prospects.
              </li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 2*/}
            <h3 className="text-2xl font-bold text-gray-800">2. Idea Submission Features</h3>
            <p className="mt-4 text-lg">
              Add the Project Idea Submission and Voting System to DevDisplay can make it a hub for innovation and
              collaboration. This feature allows users to submit ideas, vote on their favorites, and actively
              participate in bringing top-voted ideas to life through collaborative development. Here's a detailed
              overview of the feature, enhanced with functionalities to ensure engagement and utility.
            </p>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">
              Idea Submission Window - First Week of Every Month:
            </h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>Allow users to submit their project ideas within the first week of every month.</li>
              <li>Display a countdown timer on the homepage indicating the time left to submit ideas.</li>
              <li>Ideas are displayed publicly for voting immediately after submission.</li>
            </ul>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">Voting Phase - Throughout the Month:</h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>Users can like or upvote their favorite ideas to boost their ranking.</li>
              <li>A "Trending Now" Section highlights the top-voted ideas dynamically.</li>
            </ul>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">End-of-Month Selection - Final Week:</h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>At the end of the month, the top 1 most-voted idea is selected for community implementation.</li>
              <li>Recognize contributors with badges like "Innovator of the Month" for the selected idea.</li>
            </ul>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">Community Collaboration - Next Month:</h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>
                The selected idea is moved to a “Project Development Hub” where the community collaborates to implement
                it.
              </li>
              <li>Users can join specific tasks like design, development, testing, or documentation.</li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 3*/}
            <h3 className="text-2xl font-bold text-gray-800">3. Tech Resources Features</h3>
            <p className="mt-4 text-lg">
              Add a feature where all the tech resources are available like a hub of resources. Where users can share
              and discover useful resources like articles, tutorials, documentation, tools, or libraries related to
              development. How it works: Users can submit a resource with a title, description, link, and tags (e.g.,
              "React," "JavaScript," "CSS"). Resources are displayed in a feed with upvoting/downvoting functionality.
              Users can filter resources by tags or search for specific topics. The most upvoted resources appear at the
              top of the feed.
            </p>

            <h4 className="mt-4 text-xl font-semibold text-gray-800">
              Add a feature on this Page where all the tech resources are available like:
            </h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>Tech-Related Notes</li>
              <li>Programming Language Courses</li>
              <li>Top GitHub Repositories</li>
              <li>AI Tools Directory</li>
              <li>Affordable Learning</li>
              <li>Open Source Libraries and Frameworks</li>
              <li>Bootcamp Listings</li>
              <li>Roadmaps and Guides</li>
              <li>Interview Preparation Kits, e.t.c..</li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 4*/}
            <h3 className="text-2xl font-bold text-gray-800">4. Project Showcase Features</h3>
            <p className="mt-4 text-lg">
              Add a feature where developers can showcase their projects. Developers first add their projects through
              open-source contributions, and then the projects are showcased here. Also, add an Interactive Voting and
              Liking System: Each showcased project will have a voting or liking mechanism. Users can cast votes or like
              projects they find impressive, helping highlight the most popular and trending projects within the
              community. This feature will foster engagement and provide visibility to standout projects.
            </p>
            <h4 className="mt-4 text-xl font-semibold text-gray-800">Purpose of this feature:</h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>Enable developers to add their projects to the showcase via open-source contributions.</li>
              <li>Projects submitted by contributors will be listed on the ProjectShowcase page after review.</li>
              <li>Each showcased project will feature a voting and liking mechanism to drive engagement.</li>
              <li>Users can upvote or like projects they find impressive, helping boost visibility and credibility.</li>
              <li>
                A Trending Projects section will dynamically highlight the most popular and top-voted contributions.
              </li>
              <li>The system will dynamically highlight the most popular and trending projects in the community.</li>
              <li>This feature will foster engagement and increase visibility for standout projects.</li>
              <li>
                The platform can feature "Project of the Month" badges for standout submissions, encouraging
                participation.
              </li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 5*/}
            <h3 className="text-2xl font-bold text-gray-800">5. Portfolio Ideas Features</h3>
            <p className="mt-4 text-lg">
              Add a feature that enables developers, designers, and tech enthusiasts to showcase their portfolios
              through open-source contributions. Contributors can submit live project links, source code repositories,
              and project details, helping others discover their work and build their own portfolios. This feature will
              serve as a hub for inspiration and resources, allowing the community to learn from real-world examples,
              improve their personal branding, nd connect with like-minded individuals.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>
                Portfolio Submissions - Allows developers and designers to contribute their portfolios via open-source
                submissions.
              </li>
              <li>
                Live Project & Code Integration - Users can showcase their projects with direct links to demos and
                repositories.
              </li>
              <li>Community Inspiration - Helps others learn from well-crafted portfolios and improve their own.</li>
              <li>
                Skill Development - Encourages contributors to refine their design, development, and presentation
                skills.
              </li>
              <li>
                Networking & Collaboration - Creates opportunities for professionals to connect with like-minded
                individuals.
              </li>
              <li>
                Featured Portfolios Section - Recognizes standout portfolios with a "Portfolio of the Month" badge to
                encourage participation. Users can upvote or like projects they find impressive, helping boost
                visibility and credibility.
              </li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 6*/}
            <h3 className="text-2xl font-bold text-gray-800">6. Portfolio Building Features</h3>
            <p className="mt-4 text-lg">
              Add Portfolio Builder features an innovative, no-code tool designed to empower individuals—whether they
              are developers, designers, tech enthusiasts, or anyone in between—to easily create stunning,
              fully-responsive portfolio websites. Users can simply input their information, such as skills, projects,
              experiences, and achievements, and the tool generates a beautiful, professional portfolio website tailored
              to their needs. No coding skills required. The tool even includes live hosting, ensuring the portfolio is
              online and accessible to potential employers or collaborators.
            </p>
            <h4 className="mt-4 text-xl font-semibold text-gray-800">Purpose of this feature:</h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>
                The Portfolio Builder feature exists to provide an easy, intuitive solution for anyone seeking to create
                a professional, visually appealing portfolio without the need for coding knowledge. By offering a
                streamlined, no-code solution, this feature empowers users to showcase their personal and professional
                brand in a polished and modern way, increasing their chances of standing out in the competitive tech
                industry and beyond.
              </li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 7*/}
            <h3 className="text-2xl font-bold text-gray-800">7. Resume Building Features</h3>
            <p className="mt-4 text-lg">
              Add the ATS-Optimized Resume Builder feature to help users create professional, ATS-friendly resumes
              effortlessly. With pre-designed templates optimized specifically for Applicant Tracking Systems - ATS,
              users can quickly fill in their details, generate a polished resume, and download it instantly, ready for
              recruitment processes. Whether you're a developer, designer, or professional in any industry, this tool
              ensures your resume is tailored for the modern job market. Also add a feature in this page to check the
              strength of their existing resumes through a built-in analysis tool.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>Dynamic Suggestions: Use AI to suggest skills or keywords based on the user's input.</li>
              <li>
                Effortless Resume Creation: Choose from a variety of professionally designed templates optimized for
                ATS, making sure your resume gets noticed by automated systems and human recruiters alike. Offer
                templates tailored for different fields. e.g., design, development, data science.
              </li>
              <li>
                ATS Score and Resume Checker: Upload your existing resume and receive an ATS score based on
                industry-standard keywords, formatting, and structure. The tool will provide detailed suggestions for
                improvements to help your resume pass ATS screenings and stand out to hiring managers. Provide a tool to
                score resumes against common ATS standards and suggest improvements.
              </li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 8*/}
            <h3 className="text-2xl font-bold text-gray-800">8. Community Discussion Features</h3>
            <p className="mt-4 text-lg">
              Add the Community Discussion Features on DevDisplay for cultivate a thriving, interactive space where
              developers, designers, and tech enthusiasts can come together to share knowledge, collaborate, and engage
              in meaningful conversations. These features foster an open and inclusive environment, enabling users to
              discuss tech trends, career opportunities, project collaborations, and more. Whether you're brainstorming
              new ideas, seeking advice, or connecting with like-minded professionals, the Community Discussion features
              make DevDisplay the ultimate platform for dynamic collaboration.
            </p>
            <h4 className="mt-4 text-xl font-semibold text-gray-800">Features to Include:</h4>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>Real-Time Chat: Implement channels for discussions.</li>
              <li>Threaded Conversations: Allow users to create threads for specific topics.</li>
              <li>Reactions System: Users can react to messages with emojis 👍, ❤️, 🚀.</li>
              <li>
                Mentions and Notifications: Enable users to tag others with @username, sending them notifications.
              </li>
              <li>Searchable History: Add a search bar to browse past discussions quickly.</li>
              <li>
                Moderation Tools: Include moderation capabilities like blocking inappropriate content and banning users.
              </li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 9*/}
            <h3 className="text-2xl font-bold text-gray-800">9. Tech Quiz Features </h3>
            <p className="mt-4 text-lg">
              Add the Tech Quiz Features on DevDisplay for engage and challenge the community with monthly quizzes that
              test users' knowledge across a wide array of tech topics. Whether you're an expert in a specific field or
              just getting started, these quizzes provide a fun and competitive way to showcase your skills, learn new
              concepts, and earn rewards. By incorporating thematic quizzes, real-time leaderboards, and
              community-generated content, DevDisplay ensures that learning and growth never stop.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>
                Monthly Thematic Quizzes: New quizzes each month focusing on in-demand skills like Python, Web3, DevOps,
                and more.
              </li>
              <li>
                Real-Time Leaderboards: Track your progress and compare scores globally or within specific communities.
              </li>
              <li>
                Community-Generated Quizzes: Users can create and share their own quizzes, fostering collaboration and
                knowledge sharing.
              </li>
              <li>
                Interactive Learning: Engaging quizzes with multiple-choice, fill-in-the-blank, and visual aids to
                enhance learning.
              </li>
              <li>
                Monthly Rewards: Top scorers get recognition and exclusive prizes like tech course discounts or premium
                content access
              </li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 10*/}
            <h3 className="text-2xl font-bold text-gray-800">10. AI Career Navigator Features</h3>
            <p className="mt-4 text-lg">
              Add the AI Career Navigator on DevDisplay to help students and professionals navigate their career
              journeys with clarity and confidence. Choosing a career path and learning new skills can be overwhelming,
              but this feature simplifies the process. By analyzing your current skills and desired role, the AI Career
              Navigator provides a personalized roadmap, identifies skill gaps, and recommends relevant resources to
              help you succeed. Whether you're just starting out or looking to level up, the AI Career Navigator ensures
              you're on the right path with the support you need to achieve your career goals.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>
                AI-Powered Skill Assessment: Analyze the user's current skills and match them to the requirements of
                their desired role.
              </li>
              <li>
                Personalized Career Roadmaps: Provide step-by-step guides for different career paths, highlighting key
                skills and certifications needed.
              </li>
              <li>
                Skill Gap Analysis: Identify missing skills and recommend specific actions or resources to bridge those
                gaps.
              </li>
              <li>
                Resource Recommendations: Suggest tailored learning materials, such as courses, tutorials, and articles,
                based on the user's career goals.
              </li>
              <li>
                Mentorship Matching: Connect users with experienced professionals for personalized career guidance.
              </li>
              <li>
                Career Path Exploration: Allow users to explore various tech careers, including job roles, salary
                expectations, and required skills.
              </li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 11*/}
            <h3 className="text-2xl font-bold text-gray-800">11. Online Compiler Feature</h3>
            <p className="mt-4 text-lg">
              Add the Online Compiler feature on DevDisplay allows users to write, compile, and execute code directly
              within the platform, without needing to set up a local development environment. This feature supports
              multiple programming languages and provides an easy, convenient way for developers, students, and learners
              to test and run their code in real-time. Whether you're learning a new language, practicing coding
              challenges, or testing snippets, the online compiler makes coding more accessible and efficient.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>
                Multi-Language Support: Enable compilation for multiple programming languages like Python, Java, C++,
                JavaScript, and more.
              </li>
              <li>
                Real-Time Code Execution: Allow users to execute code and view the output instantly, making it easy to
                test ideas quickly.
              </li>
              <li>
                Syntax Highlighting & Auto-Completion: Provide syntax highlighting and code suggestions to enhance the
                coding experience and reduce errors.
              </li>
              <li>
                Error Detection & Debugging: Show clear error messages and debugging tools to help users identify and
                fix issues in their code.
              </li>
              <li>
                Code Sharing: Allow users to share their code snippets or projects with others via links, enabling
                collaboration and learning.
              </li>
              <li>
                Collaborative Coding: Add features for real-time collaboration, where users can code together in shared
                sessions.
              </li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Idea List - 12*/}
            <h3 className="text-2xl font-bold text-gray-800">12. Journey Showcase Feature</h3>
            <p className="mt-4 text-lg">
              Add the Journey Showcase feature on DevDisplay allows users to share their personal success stories,
              offering detailed insights into how they cracked jobs, internships, or freelancing opportunities. By
              highlighting their preparation strategies, challenges faced, and interview experiences, this feature
              provides practical guidance and inspiration for others on similar paths. It helps users connect with
              real-world success stories, learn from their peers, and gain actionable advice, making it an essential
              resource for anyone looking to advance in their career.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-lg">
              <li>
                User-Generated Success Stories: Allow users to submit their own stories, showcasing their preparation,
                challenges, and key takeaways from job interviews or internships.
              </li>
              <li>
                Step-by-Step Roadmap: Present each journey in a clear, structured format that breaks down the key steps
                taken, resources used, and challenges overcome.
              </li>
              <li>
                Search & Filter Options: Enable users to search stories based on role, industry, or skill set, helping
                them find relevant journeys that align with their aspirations.
              </li>
              <li>
                Engagement & Interaction: Allow other users to comment, ask questions, and share their thoughts on each
                story, fostering community engagement and knowledge-sharing.
              </li>
              <li>
                Journey Ratings & Reviews: Let users rate and review the usefulness of each journey to help others find
                the most helpful stories.
              </li>
            </ul>
            <hr className="border-t-5 mt-12 border-gray-500" />

            {/* Contribute Beyond the Core Features*/}
            <h3 className="text-center text-2xl font-bold text-gray-800">Contribute Beyond the Core Features</h3>
            <p className="mt-4 text-center text-lg">
              While we have 12 key features that define our platform, we believe innovation is limitless. As a
              contributor, you're encouraged to think beyond and add new, innovative features that can make a difference
              in the tech ecosystem. Think outside the box and introduce features that can be revolutionary for tech
              enthusiasts worldwide. If you spot a gap in the tech world, DevDisplay can be the solution.
            </p>
            <h4 className="mt-4 text-center text-xl font-semibold text-gray-800">For Every Tech Enthusiast</h4>
            <p className="mt-4 list-inside list-disc space-y-2 text-center text-lg">
              Whatever you need as a techy, DevDisplay has it all. Build your profile, find resources, collaborate, and
              create without limitations.
            </p>

            <h4 className="mt-4 text-center text-xl font-semibold text-gray-800">Become Part of the Global Vision</h4>
            <p className="mt-4 list-inside list-disc space-y-2 text-center text-lg">
              Your contributions will help us provide everything developers need in one place—no more hopping between
              multiple websites to find the resources you need. With your input, DevDisplay will grow into the go-to
              platform for developers worldwide, fostering collaboration, learning, and innovation. One Platform.
              Endless Opportunities.
            </p>

            <h4 className="mt-4 text-center text-xl font-semibold text-gray-800">Be a Global Innovator</h4>
            <p className="mt-4 list-inside list-disc space-y-2 text-center text-lg">
              As a contributor, you're not just adding features to a platform—you’re becoming part of a global community
              that’s pushing the boundaries of technology.
            </p>
            <hr className="border-t-5 mt-12 border-gray-500" />
          </div>
        </section>

        <section className="container mx-auto grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="rounded-lg bg-[#1e2a42] p-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-[#00a6fb]">Our Mission</h3>
            <p className="text-gray-300">
              We aim to connect developers globally, enabling them to collaborate on impactful projects, share
              knowledge, and solve real-world problems together.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg bg-[#1e2a42] p-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-[#00a6fb]">Our Vision</h3>
            <p className="text-gray-300">
              We envision a world where developers thrive through collaboration, driving innovation, diversity, and
              inclusivity in the tech industry.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg bg-[#1e2a42] p-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-[#00a6fb]">Core Principles</h3>
            <ul className="list-inside list-disc space-y-2 text-left text-gray-300">
              <li>Collaboration Over Competition</li>
              <li>Open Source Contribution</li>
              <li>Diversity & Inclusion</li>
              <li>Innovation & Creativity</li>
              <li>Knowledge Sharing</li>
            </ul>
          </motion.div>
        </section>

        <section className="bg-gradient-to-r from-[#2e3b4e] via-[#1e2a42] to-[#141d2f] py-16 text-center">
          <h2 className="text-4xl font-bold text-[#00a6fb]">Join Our Community</h2>
          <p className="mt-4 text-lg text-gray-300">
            Ready to collaborate, innovate, and grow? Become a part of the DevDisplay community today.
          </p>
          <button
            onClick={navigateToGitHub}
            className="mt-8 rounded-lg bg-[#00a6fb] px-6 py-3 text-lg font-bold text-white hover:bg-[#008dc9]"
          >
            Get Started
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
}
