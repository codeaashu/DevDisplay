import React from 'react';
import Navbar from './commonComponents/Navbar';
import Footer from './commonComponents/Footer';

const roadmapData = [
  {
    path: 'Front-End Developer',
    stages: [
      {
        title: 'Stage 1: Basics of Web Development',
        content: 'Learn HTML, CSS, and basic JavaScript to understand how websites are structured and styled.',
      },
      {
        title: 'Stage 2: Advanced JavaScript',
        content:
          'Master JavaScript, learn concepts like ES6, DOM manipulation, and asynchronous programming (Promises, async/await).',
      },
      {
        title: 'Stage 3: Responsive Web Design',
        content: 'Learn to create responsive layouts using media queries, Flexbox, and CSS Grid.',
      },
      {
        title: 'Stage 4: CSS Preprocessors & Frameworks',
        content: 'Learn CSS preprocessors like SASS and frameworks like Bootstrap and Tailwind CSS.',
      },
      {
        title: 'Stage 5: Front-End Frameworks',
        content:
          'Learn modern front-end frameworks like React, Vue, or Angular for building dynamic and scalable web applications.',
      },
      {
        title: 'Stage 6: Version Control & Deployment',
        content:
          'Learn Git for version control and platforms like GitHub, GitLab, or Bitbucket. Learn to deploy projects using Netlify, Vercel, or GitHub Pages.',
      },
      {
        title: 'Stage 7: Continuous Learning',
        content:
          'Stay updated with new web technologies, best practices, and tools. Build real-world projects to improve your skills.',
      },
    ],
  },
  {
    path: 'Back-End Developer',
    stages: [
      {
        title: 'Stage 1: Learn Basic Programming',
        content:
          'Start with a programming language like Python, Java, or JavaScript (Node.js). Learn about variables, loops, functions, and data structures.',
      },
      {
        title: 'Stage 2: Databases',
        content:
          'Learn about databases, including SQL (MySQL, PostgreSQL) and NoSQL (MongoDB). Understand how to design and interact with databases.',
      },
      {
        title: 'Stage 3: Web Servers & APIs',
        content: 'Learn how web servers work (e.g., Express.js, Flask, Django). Build and consume RESTful APIs.',
      },
      {
        title: 'Stage 4: Authentication & Security',
        content:
          'Understand user authentication (JWT, OAuth) and security practices like data encryption and prevention of common vulnerabilities (SQL injection, XSS).',
      },
      {
        title: 'Stage 5: Advanced Topics',
        content:
          'Learn about advanced topics like GraphQL, WebSockets, microservices architecture, and serverless functions.',
      },
      {
        title: 'Stage 6: Version Control & Deployment',
        content:
          'Learn Git for version control, and explore deployment platforms such as Heroku, AWS, or DigitalOcean for hosting your backend.',
      },
      {
        title: 'Stage 7: Continuous Learning',
        content:
          'Stay updated with best practices, new frameworks, and libraries. Contribute to open-source projects to improve your skills.',
      },
    ],
  },
  {
    path: 'Full-Stack Developer',
    stages: [
      {
        title: 'Stage 1: Learn Front-End and Back-End',
        content:
          'Combine the front-end and back-end skills to build dynamic, full-stack applications. Understand both client-side and server-side logic.',
      },
      {
        title: 'Stage 2: Learn Full-Stack Frameworks',
        content:
          'Learn full-stack frameworks like MERN (MongoDB, Express.js, React, Node.js) or Django with React/Vue for complete web applications.',
      },
      {
        title: 'Stage 3: Understand Version Control',
        content: 'Use Git for version control and learn to manage projects on GitHub, GitLab, or Bitbucket.',
      },
      {
        title: 'Stage 4: Understand Deployment & Hosting',
        content:
          'Learn how to deploy both front-end and back-end using platforms like Heroku, Netlify, AWS, or DigitalOcean.',
      },
      {
        title: 'Stage 5: Continuous Integration & Delivery (CI/CD)',
        content:
          'Learn about CI/CD pipelines and tools like Jenkins, CircleCI, and GitHub Actions for automating tests and deployment.',
      },
      {
        title: 'Stage 6: Advanced Topics',
        content:
          'Explore advanced concepts like microservices, containerization (Docker), and cloud computing (AWS, Azure).',
      },
      {
        title: 'Stage 7: Continuous Learning',
        content:
          'Stay updated with the latest technologies, tools, and best practices. Work on personal and open-source projects to sharpen your skills.',
      },
    ],
  },
  {
    path: 'DevOps Engineer',
    stages: [
      {
        title: 'Stage 1: Learn Scripting & Automation',
        content:
          'Start with shell scripting, PowerShell, or Python for automation tasks like backup, deployment, and server management.',
      },
      {
        title: 'Stage 2: Version Control & Collaboration',
        content: 'Master Git and GitHub for version control. Learn how to collaborate in a team environment using Git.',
      },
      {
        title: 'Stage 3: Infrastructure as Code (IaC)',
        content: 'Learn about tools like Terraform and Ansible for automating cloud infrastructure deployment.',
      },
      {
        title: 'Stage 4: Continuous Integration & Delivery',
        content:
          'Understand CI/CD tools like Jenkins, Travis CI, or CircleCI. Automate testing and deployment of applications.',
      },
      {
        title: 'Stage 5: Monitoring & Logging',
        content:
          'Learn about monitoring tools like Prometheus, Grafana, and ELK Stack for logging and monitoring infrastructure and applications.',
      },
      {
        title: 'Stage 6: Containerization & Orchestration',
        content: 'Master Docker for containerization and Kubernetes for container orchestration.',
      },
      {
        title: 'Stage 7: Cloud Computing',
        content:
          'Gain expertise in cloud platforms like AWS, Azure, or Google Cloud. Learn how to deploy and manage infrastructure on the cloud.',
      },
      {
        title: 'Stage 8: Continuous Learning',
        content:
          'Stay updated with the latest DevOps tools and practices. Work on automating your workflow and deploying applications in a real-world environment.',
      },
    ],
  },
];

const RoadmapGuide = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="min-h-[70vh] p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#00a6fb]">Developer Roadmaps & Guides</h1>
        <div className="space-y-8">
          {roadmapData.map((path, index) => (
            <div key={index} className="rounded-lg bg-gray-800 p-8 shadow-lg transition hover:shadow-xl">
              <h2 className="mb-4 text-3xl font-semibold text-[#00a6fb]">{path.path}</h2>
              {path.stages.map((stage, stageIndex) => (
                <div key={stageIndex} className="mb-6">
                  <h3 className="text-2xl font-semibold text-[#00a6fb]">{stage.title}</h3>
                  <p className="text-gray-300">{stage.content}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Footer contact="Contact Support for Developer Roadmap" />
    </div>
  );
};

export default RoadmapGuide;
