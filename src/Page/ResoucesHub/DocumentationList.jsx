import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this awesome Dev Tool!',
        text: 'I found this amazing tool that might help you in your development work.',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

// List of documentation resources

const documentationData = [
  {
    name: 'React',
    description: 'Official React documentation for building user interfaces.',
    category: ['Frontend', 'JavaScript'],
    link: 'https://react.dev/',
    image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    shareLink: '#react',
  },
  {
    name: 'Node.js',
    description: 'Node.js official documentation for server-side JavaScript runtime.',
    category: ['Backend', 'JavaScript'],
    link: 'https://nodejs.org/en/docs',
    image: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
    shareLink: '#nodejs',
  },
  {
    name: 'Python',
    description: 'Comprehensive Python documentation including standard library references.',
    category: ['Programming Language'],
    link: 'https://docs.python.org/3/',
    image: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
    shareLink: '#python',
  },
  {
    name: 'MongoDB',
    description: 'Official MongoDB documentation for database developers.',
    category: ['Database'],
    link: 'https://www.mongodb.com/docs/',
    image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
    shareLink: '#mongodb',
  },
  {
    name: 'Vue.js',
    description: 'Official Vue.js documentation for building reactive interfaces.',
    category: ['Frontend', 'JavaScript'],
    link: 'https://vuejs.org/guide/introduction.html',
    image: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
    shareLink: '#vuejs',
  },
  {
    name: 'Angular',
    description: 'Angular’s documentation for building scalable frontend apps.',
    category: ['Frontend', 'JavaScript'],
    link: 'https://angular.io/docs',
    image: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
    shareLink: '#angular',
  },
  {
    name: 'TypeScript',
    description: 'Official docs for TypeScript, a typed superset of JavaScript.',
    category: ['Programming Language'],
    link: 'https://www.typescriptlang.org/docs/',
    image: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
    shareLink: '#typescript',
  },
  {
    name: 'Express',
    description: 'Minimal and flexible Node.js web application framework.',
    category: ['Backend', 'JavaScript'],
    link: 'https://expressjs.com/en/starter/installing.html',
    image: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
    shareLink: '#express',
  },
  {
    name: 'Next.js',
    description: 'React framework for production with hybrid static & server rendering.',
    category: ['Frontend', 'React'],
    link: 'https://nextjs.org/docs',
    image: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
    shareLink: '#nextjs',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework documentation for rapid UI development.',
    category: ['CSS', 'Frontend'],
    link: 'https://tailwindcss.com/docs',
    image: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
    shareLink: '#tailwind',
  },
  {
    name: 'Django',
    description: 'High-level Python web framework documentation.',
    category: ['Backend', 'Python'],
    link: 'https://docs.djangoproject.com/en/stable/',
    image: 'https://cdn.worldvectorlogo.com/logos/django.svg',
    shareLink: '#django',
  },
  {
    name: 'Flask',
    description: 'Lightweight Python web framework documentation.',
    category: ['Backend', 'Python'],
    link: 'https://flask.palletsprojects.com/en/latest/',
    image: 'https://cdn.worldvectorlogo.com/logos/flask.svg',
    shareLink: '#flask',
  },
  {
    name: 'PostgreSQL',
    description: 'PostgreSQL documentation for developers and DBAs.',
    category: ['Database'],
    link: 'https://www.postgresql.org/docs/',
    image: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
    shareLink: '#postgresql',
  },
  {
    name: 'MySQL',
    description: 'MySQL reference manual and guides.',
    category: ['Database'],
    link: 'https://dev.mysql.com/doc/',
    image: 'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.svg',
    shareLink: '#mysql',
  },
  {
    name: 'Docker',
    description: 'Docker documentation for building, sharing, and running containers.',
    category: ['DevOps', 'Tools'],
    link: 'https://docs.docker.com/',
    image: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
    shareLink: '#docker',
  },
  {
    name: 'Redis',
    description: 'In-memory data store documentation for caching and more.',
    category: ['Database', 'Caching'],
    link: 'https://redis.io/docs/',
    image: 'https://cdn.worldvectorlogo.com/logos/redis.svg',
    shareLink: '#redis',
  },
  {
    name: 'Firebase',
    description: 'Google’s Firebase docs for backend services and app development.',
    category: ['Cloud', 'Backend'],
    link: 'https://firebase.google.com/docs',
    image: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
    shareLink: '#firebase',
  },
  {
    name: 'AWS',
    description: 'Amazon Web Services developer documentation for all services.',
    category: ['Cloud', 'DevOps'],
    link: 'https://docs.aws.amazon.com/',
    image: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
    shareLink: '#aws',
  },
  {
    name: 'SASS',
    description: 'CSS preprocessor documentation for writing maintainable styles.',
    category: ['CSS', 'Frontend'],
    link: 'https://sass-lang.com/documentation/',
    image: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
    shareLink: '#sass',
  },
  {
    name: 'Webpack',
    description: 'Webpack documentation for JavaScript module bundling.',
    category: ['Frontend', 'Build Tool'],
    link: 'https://webpack.js.org/concepts/',
    image: 'https://cdn.worldvectorlogo.com/logos/webpack.svg',
    shareLink: '#webpack',
  },
  {
    name: 'Babel',
    description: 'JavaScript compiler documentation for writing next-gen code.',
    category: ['Frontend', 'Tooling'],
    link: 'https://babeljs.io/docs/',
    image: 'https://cdn.worldvectorlogo.com/logos/babel-10.svg',
    shareLink: '#babel',
  },
  {
    name: 'C++',
    description: 'C++ reference documentation for standard library and language features.',
    category: ['Programming Language'],
    link: 'https://en.cppreference.com/w/',
    image: 'https://cdn.worldvectorlogo.com/logos/c.svg',
    shareLink: '#cpp',
  },
  {
    name: 'HTML',
    description: 'HTML documentation for building the structure of web pages.',
    category: ['Frontend', 'Markup Language'],
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    image: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    shareLink: '#html',
  },
  {
    name: 'CSS',
    description: 'CSS documentation for styling web pages.',
    category: ['Frontend', 'Styling'],
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    image: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
    shareLink: '#css',
  },
  {
    name: 'JavaScript',
    description: 'JavaScript documentation for programming web pages.',
    category: ['Frontend', 'Programming Language'],
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    image: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
    shareLink: '#javascript',
  },
  {
    name: 'Go',
    description: 'The Go programming language official docs.',
    category: ['Programming Language'],
    link: 'https://golang.org/doc/',
    image: 'https://cdn.worldvectorlogo.com/logos/go-6.svg',
    shareLink: '#golang',
  },
  {
    name: 'Rust',
    description: 'Systems programming with Rust — official documentation.',
    category: ['Programming Language'],
    link: 'https://doc.rust-lang.org/',
    image: 'https://cdn.worldvectorlogo.com/logos/rust.svg',
    shareLink: '#rust',
  },
  {
    name: 'Bootstrap',
    description: 'Bootstrap docs for building responsive web UIs.',
    category: ['CSS', 'Frontend'],
    link: 'https://getbootstrap.com/docs/',
    image: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg',
    shareLink: '#bootstrap',
  },
  {
    name: 'Jenkins',
    description: 'Jenkins automation server documentation for CI/CD pipelines.',
    category: ['DevOps', 'CI/CD'],
    link: 'https://www.jenkins.io/doc/',
    image: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg',
    shareLink: '#jenkins',
  },
  {
    name: 'Laravel',
    description: 'Elegant PHP framework for web artisans — official docs.',
    category: ['Backend', 'PHP'],
    link: 'https://laravel.com/docs',
    image: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
    shareLink: '#laravel',
  },
  {
    name: 'PHP',
    description: 'Official documentation for the PHP scripting language.',
    category: ['Programming Language'],
    link: 'https://www.php.net/docs.php',
    image: 'https://seeklogo.com/images/P/php-logo-ADE513E748-seeklogo.com.svg',
    shareLink: '#php',
  },
  {
    name: 'Ruby on Rails',
    description: 'Rails is a full-stack framework for the Ruby language.',
    category: ['Backend', 'Ruby'],
    link: 'https://guides.rubyonrails.org/',
    image: 'https://cdn.worldvectorlogo.com/logos/rails.svg',
    shareLink: '#rails',
  },
  {
    name: 'Ruby',
    description: 'Programming language Ruby official documentation.',
    category: ['Programming Language'],
    link: 'https://www.ruby-lang.org/en/documentation/',
    image: 'https://cdn.worldvectorlogo.com/logos/ruby.svg',
    shareLink: '#ruby',
  },
  {
    name: 'CI/CD GitHub Actions',
    description: 'GitHub Actions documentation for workflows and automation.',
    category: ['CI/CD', 'DevOps'],
    link: 'https://docs.github.com/en/actions',
    image: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
    shareLink: '#github-actions',
  },
  {
    name: 'Vite',
    description: 'Next generation frontend tooling with instant server start.',
    category: ['Frontend', 'Tooling'],
    link: 'https://vitejs.dev/guide/',
    image: 'https://cdn.worldvectorlogo.com/logos/vitejs.svg',
    shareLink: '#vite',
  },
  {
    name: 'Astro',
    description: 'Astro documentation for building faster websites.',
    category: ['Frontend', 'Static Sites'],
    link: 'https://docs.astro.build/',
    image: 'https://cdn.worldvectorlogo.com/logos/astro.svg',
    shareLink: '#astro',
  },
  {
    name: 'Nuxt.js',
    description: 'The Intuitive Vue Framework documentation.',
    category: ['Frontend', 'Vue'],
    link: 'https://nuxt.com/docs',
    image: 'https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg',
    shareLink: '#nuxt',
  },
  {
    name: 'Three.js',
    description: 'JavaScript 3D library documentation.',
    category: ['Frontend', 'Graphics'],
    link: 'https://threejs.org/docs/',
    image: 'https://cdn.worldvectorlogo.com/logos/threejs-1.svg',
    shareLink: '#threejs',
  },
  {
    name: 'Svelte',
    description: 'Cybernetically enhanced web apps — Svelte documentation.',
    category: ['Frontend', 'JavaScript'],
    link: 'https://svelte.dev/docs',
    image: 'https://cdn.worldvectorlogo.com/logos/svelte-1.svg',
    shareLink: '#svelte',
  },
  {
    name: 'Zustand',
    description: 'Bear necessities for state management in React.',
    category: ['Frontend', 'State Management'],
    link: 'https://docs.pmnd.rs/zustand',
    image: 'https://avatars.githubusercontent.com/u/76003565?s=200&v=4',
    shareLink: '#zustand',
  },
  {
    name: 'Jira',
    description: 'Atlassian Jira software documentation and API references.',
    category: ['Project Management', 'Tools'],
    link: 'https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/',
    image: 'https://cdn.worldvectorlogo.com/logos/jira-3.svg',
    shareLink: '#jira',
  },
  {
    name: 'Netlify',
    description: 'Docs for building, deploying, and scaling with Netlify.',
    category: ['DevOps', 'Hosting'],
    link: 'https://docs.netlify.com/',
    image: 'https://cdn.worldvectorlogo.com/logos/netlify.svg',
    shareLink: '#netlify',
  },
  {
    name: 'Vercel',
    description: 'Vercel documentation for frontend deployments and functions.',
    category: ['Hosting', 'DevOps'],
    link: 'https://vercel.com/docs',
    image: 'https://cdn.worldvectorlogo.com/logos/vercel.svg',
    shareLink: '#vercel',
  },
  {
    name: 'Nginx',
    description: 'High performance web server and reverse proxy docs.',
    category: ['Server', 'DevOps'],
    link: 'https://nginx.org/en/docs/',
    image: 'https://cdn.worldvectorlogo.com/logos/nginx-1.svg',
    shareLink: '#nginx',
  },
  {
    name: 'RxJS',
    description: 'Reactive Extensions Library for JavaScript docs.',
    category: ['Frontend', 'JavaScript'],
    link: 'https://rxjs.dev/guide/overview',
    image: 'https://cdn.worldvectorlogo.com/logos/reactivex.svg',
    shareLink: '#rxjs',
  },
  {
    name: 'Vitest',
    description: 'Blazing fast unit testing powered by Vite.',
    category: ['Testing', 'Frontend'],
    link: 'https://vitest.dev/',
    image: 'https://vitest.dev/logo.svg',
    shareLink: '#vitest',
  },
  {
    name: 'Postman',
    description: 'API platform documentation for building and testing APIs.',
    category: ['API', 'Tools'],
    link: 'https://learning.postman.com/docs/getting-started/introduction/',
    image: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
    shareLink: '#postman',
  },
];

const StyledDocumentationCard = styled.div`
  position: relative;
  border: 1px solid rgb(182, 228, 250);
  background: linear-gradient(to right, rgba(15, 27, 53, 0.44), rgba(0, 43, 62, 0.43));
  border-radius: 0.75rem;
  overflow: hidden;
  width: 100%;
  max-width: 340px;
  margin: 0.75rem;
  padding: 1rem;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 20px rgba(0, 172, 255, 0.4);
  }

  .doc-icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 9999px;
    background: white;
    padding: 0.25rem;
    border: 1px solid #a1d5f5;
  }

  .share-btn {
    position: absolute;
    bottom: 0.75rem;
    right: 0.75rem;
    font-size: 0.8rem;
    border-radius: 9999px;
    padding: 0.25rem 0.5rem;
    background-color: rgba(0, 166, 251, 0.15);
    border: 1px solid #00a6fb;
    color: #ffffff;
    transition: background 0.3s;

    &:hover {
      background-color: rgba(0, 166, 251, 0.35);
    }
  }

  .doc-tags span {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
    border: 1px solid #00a6fb;
    border-radius: 999px;
    color: #cfefff;
    margin: 0.2rem;
    background-color: rgba(0, 43, 62, 0.4);
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

const DocumentationCardComponent = ({ name, description, category, link, image, shareLink }) => {
  return (
    <StyledDocumentationCard id={shareLink.substring(1)}>
      <div className="mb-3 flex items-start justify-between">
        <img
          src={image}
          alt={`${name} Icon`}
          className="doc-icon"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default.png';
          }}
        />

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium text-[#00a6fb] underline hover:text-white"
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
          Visit
        </a>
      </div>

      <h2 className="mb-1 text-lg font-semibold text-white">{name}</h2>
      <p className="mb-3 text-sm text-gray-400">{description}</p>

      <div className="doc-tags flex flex-wrap">
        {category.map((cat, idx) => (
          <span key={idx}>{cat}</span>
        ))}
      </div>

      <button
        onClick={() => shareContent(window.location.href.split('#')[0] + shareLink)}
        className="share-btn flex items-center gap-1"
      >
        <FontAwesomeIcon icon={faShareAlt} />
        Share
      </button>
    </StyledDocumentationCard>
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

const DevToolsListContainer = styled.div`
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

  input {
    padding: 0.75rem 1rem;
    border: 1px solid #00a6fb;
    border-radius: 9999px;
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

const DocumentationListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DocumentationList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categorySearchTerm, setCategorySearchTerm] = useState('');

  const filteredDocs = documentationData.filter((doc) => {
    const matchesName = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = doc.category.some((cat) => cat.toLowerCase().includes(categorySearchTerm.toLowerCase()));
    return matchesName && matchesCategory;
  });

  return (
    <>
      <FilterContainer>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by category..."
          value={categorySearchTerm}
          onChange={(e) => setCategorySearchTerm(e.target.value)}
        />
      </FilterContainer>

      <DocumentationListContainer>
        {filteredDocs.map((doc, idx) => (
          <DocumentationCardComponent key={idx} {...doc} />
        ))}
      </DocumentationListContainer>
    </>
  );
};

export default DocumentationList;
