import React from 'react';
import Navbar from './commonComponents/Navbar';
import Footer from './commonComponents/Footer';

const resources = [
  {
    id: 1,
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg',
    description: 'A JavaScript library for building user interfaces.',
    link: 'https://react.dev/blog/2023/03/16/introducing-react-dev',
  },
  {
    id: 2,
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/vuedotjs.svg',
    description: 'The Progressive JavaScript Framework.',
    link: 'https://vuejs.org/v2/guide/',
  },
  {
    id: 3,
    name: 'Angular',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/angular.svg',
    description: 'One framework. Mobile & desktop.',
    link: 'https://angular.io/docs',
  },
  {
    id: 4,
    name: 'Svelte',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/svelte.svg',
    description: 'Cybernetically enhanced web apps.',
    link: 'https://svelte.dev/docs',
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/tailwindcss.svg',
    description: 'A utility-first CSS framework.',
    link: 'https://tailwindcss.com/docs',
  },
  {
    id: 6,
    name: 'Bootstrap',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/bootstrap.svg',
    description: 'The most popular HTML, CSS, and JS library.',
    link: 'https://getbootstrap.com/',
  },
  {
    id: 7,
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/nodedotjs.svg',
    description: "JavaScript runtime built on Chrome's V8.",
    link: 'https://nodejs.org/en/docs/',
  },
  {
    id: 8,
    name: 'Express.js',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/express.svg',
    description: 'Fast, unopinionated, minimalist web framework for Node.js.',
    link: 'https://expressjs.com/en/starter/installing.html',
  },
];

const Documentation = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="p-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-[#00a6fb]">Documentation</h1>
        <p className="mb-8 text-center text-lg">
          Find resources and documentation for the most popular libraries and frameworks here.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="flex flex-col items-center rounded-lg bg-gray-800 p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <img src={resource.logo} alt={resource.name} className="mb-4 h-16 w-16" />
              <h2 className="mb-2 text-2xl font-semibold text-[#00a6fb]">{resource.name}</h2>
              <p className="mb-4 text-center text-sm">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#00a6fb] px-4 py-2 text-white transition hover:bg-[#008bca]"
              >
                Visit Documentation
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer contact="Contact Support for Documentation" />
    </div>
  );
};

export default Documentation;
