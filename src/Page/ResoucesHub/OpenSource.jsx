import React from 'react';
import Navbar from './commonComponents/Navbar';
import { Footer } from '../../components/Footer/Footer';

const openSourceProjects = [
  {
    title: 'FreeCodeCamp',
    description:
      'FreeCodeCamp is an open-source community that helps you learn to code for free. It provides thousands of tutorials and coding challenges.',
    url: 'https://github.com/freeCodeCamp/freeCodeCamp',
  },
  {
    title: 'React',
    description:
      'React is a JavaScript library for building user interfaces. It is one of the most popular front-end frameworks used by developers.',
    url: 'https://github.com/facebook/react',
  },
  {
    title: 'Bootstrap',
    description:
      'Bootstrap is an open-source CSS framework for building responsive, mobile-first websites and web applications.',
    url: 'https://github.com/twbs/bootstrap',
  },
  {
    title: 'Vue.js',
    description:
      'Vue.js is a progressive JavaScript framework used for building user interfaces. It is known for its simplicity and flexibility.',
    url: 'https://github.com/vuejs/vue',
  },
  {
    title: 'TensorFlow',
    description:
      'TensorFlow is an open-source platform for machine learning. It provides a comprehensive ecosystem for building AI models.',
    url: 'https://github.com/tensorflow/tensorflow',
  },
  {
    title: 'Django',
    description:
      'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    url: 'https://github.com/django/django',
  },
  {
    title: 'Node.js',
    description:
      'Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It is used to build scalable server-side applications.',
    url: 'https://github.com/nodejs/node',
  },
  {
    title: 'Material-UI',
    description:
      'Material-UI is a popular React UI framework that implements Google’s Material Design. It provides a set of customizable and accessible components.',
    url: 'https://github.com/mui/material-ui',
  },
  {
    title: 'GraphQL',
    description:
      'GraphQL is a data query language for APIs and a runtime for executing those queries. It provides a more efficient and flexible alternative to REST.',
    url: 'https://github.com/graphql/graphql-js',
  },
  {
    title: 'GitHub CLI',
    description:
      'GitHub CLI is a command-line interface for GitHub that allows you to interact with GitHub repositories directly from the terminal.',
    url: 'https://github.com/cli/cli',
  },
  {
    title: 'Jupyter Notebooks',
    description:
      'Jupyter is an open-source tool for creating and sharing live code, equations, visualizations, and narrative text in an interactive notebook.',
    url: 'https://github.com/jupyter/notebook',
  },
  {
    title: 'Next.js',
    description:
      'Next.js is a React framework for building production-ready web applications. It supports static site generation and server-side rendering.',
    url: 'https://github.com/vercel/next.js',
  },
  {
    title: 'Nginx',
    description:
      'Nginx is an open-source web server that also functions as a reverse proxy, load balancer, and HTTP cache.',
    url: 'https://github.com/nginx/nginx',
  },
  {
    title: 'Home Assistant',
    description:
      'Home Assistant is an open-source home automation platform that focuses on privacy and local control. It supports thousands of devices.',
    url: 'https://github.com/home-assistant/core',
  },
  {
    title: 'VSCode',
    description:
      'Visual Studio Code (VSCode) is a lightweight, powerful code editor that is widely used by developers. It has support for numerous languages and extensions.',
    url: 'https://github.com/Microsoft/vscode',
  },
  {
    title: 'Electron',
    description: 'Electron is a framework for building cross-platform desktop apps using JavaScript, HTML, and CSS.',
    url: 'https://github.com/electron/electron',
  },
  {
    title: 'The Odin Project',
    description:
      'The Odin Project offers a free full-stack web development curriculum that includes projects and challenges to master web development.',
    url: 'https://github.com/TheOdinProject',
  },
];

const OpenSource = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="min-h-[70vh] p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#00a6fb]">Open Source Projects</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {openSourceProjects.map((project, index) => (
            <div key={index} className="rounded-lg bg-gray-800 p-8 shadow-lg transition hover:shadow-xl">
              <h2 className="mb-4 text-2xl font-semibold text-[#00a6fb]">{project.title}</h2>
              <p className="mb-4 text-sm text-gray-300">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#00a6fb] hover:underline"
              >
                Explore Project
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OpenSource;
