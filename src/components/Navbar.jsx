import React, { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetSelected = (menu) => {
    if (typeof selected === 'number' && typeof menu === 'number') {
      setDir(selected > menu ? 'r' : 'l');
    } else if (menu === null) {
      setDir(null);
    }
    setSelected(selected === menu ? null : menu);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-10xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/home">
            <img src="./DevDisplay ICON.png" alt="DevDisplay" className="h-10 w-10" />
          </a>
          <span className="text-lg font-bold">DevDisplay</span>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden items-center gap-4 pr-8 md:flex">
          <Tabs selected={selected} handleSetSelected={handleSetSelected} dir={dir} />
        </div>

        {/* Hamburger for Mobile */}
        <div className="flex items-center md:hidden">
          <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      </div>

      {/* Desktop Dropdown Content */}
      <AnimatePresence>{selected && <Content dir={dir} selected={selected} />}</AnimatePresence>

      {/* Mobile Fullscreen Menu with original content */}
      {/* Mobile Fullscreen Menu with original content and scroll fade-in */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 overflow-y-auto bg-black/90 p-6 backdrop-blur-sm"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute right-4 top-4 text-2xl font-bold text-white">
              ✕
            </button>
            <div className="mt-12 space-y-12">
              {TABS.map((tab) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <h2 className="mb-4 text-xl font-semibold">{tab.title}</h2>
                  <tab.Component />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

/* ---------------- Hamburger Animation ---------------- */
const Hamburger = ({ menuOpen, setMenuOpen }) => (
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="relative flex h-6 w-6 flex-col justify-between focus:outline-none"
  >
    <span
      className={`block h-0.5 w-full transform bg-white transition duration-300 ease-in-out ${
        menuOpen ? 'translate-y-2.5 rotate-45' : ''
      }`}
    />
    <span
      className={`block h-0.5 w-full transform bg-white transition duration-300 ease-in-out ${
        menuOpen ? 'opacity-0' : ''
      }`}
    />
    <span
      className={`block h-0.5 w-full transform bg-white transition duration-300 ease-in-out ${
        menuOpen ? '-translate-y-2.5 -rotate-45' : ''
      }`}
    />
  </button>
);

const Tabs = ({ selected, handleSetSelected, dir }) => (
  <div onMouseLeave={() => handleSetSelected(null)} className="relative flex gap-2">
    {TABS.map((t) => (
      <Tab key={t.id} selected={selected} handleSetSelected={handleSetSelected} tab={t.id}>
        {t.title}
      </Tab>
    ))}
  </div>
);

const Tab = ({ children, tab, handleSetSelected, selected }) => (
  <button
    id={`shift-tab-${tab}`}
    onMouseEnter={() => handleSetSelected(tab)}
    onClick={() => handleSetSelected(tab)}
    className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
      selected === tab ? 'bg-neutral-800 text-neutral-100' : 'text-neutral-400'
    }`}
  >
    <span>{children}</span>
    <FiChevronDown className={`transition-transform ${selected === tab ? 'rotate-180' : ''}`} />
  </button>
);

const Content = ({ selected, dir }) => (
  <motion.div
    id="overlay-content"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    className="absolute left-1/2 top-[calc(100%_+_24px)] w-96 -translate-x-1/2 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
  >
    <Bridge />
    <Nub selected={selected} />

    {TABS.map((t) => (
      <div className="overflow-hidden" key={t.id}>
        {selected === t.id && (
          <motion.div
            initial={{
              opacity: 0,
              x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <t.Component />
          </motion.div>
        )}
      </div>
    ))}
  </motion.div>
);

const Bridge = () => <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />;

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);
  useEffect(() => moveNub(), [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById('overlay-content');
      if (!hoveredTab || !overlayContent) return;
      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();
      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)' }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

/* ---------------- Original Tab Contents ---------------- */
const Developers = () => (
  <div>
    <div className="flex gap-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Resources</h3>
        <a href="https://www.devdisplay.org/notes" className="block text-sm text-neutral-400">
          Notes
        </a>
        <a href="https://www.devdisplay.org/courses" className="mb-1 block text-sm text-neutral-400">
          Courses
        </a>
        <a href="https://www.devdisplay.org/DevTools" className="block text-sm text-neutral-400">
          Dev Tools
        </a>
        <a href="https://www.devdisplay.org/Libraries" className="block text-sm text-neutral-400">
          Libraries
        </a>
        <a href="https://www.devdisplay.org/Roadmaps" className="block text-sm text-neutral-400">
          Roadmaps
        </a>
        <a href="https://www.devdisplay.org/Preparation" className="block text-sm text-neutral-400">
          Preparation
        </a>
        <a href="https://www.devdisplay.org/APIs" className="block text-sm text-neutral-400">
          Useful APIs
        </a>
        <a href="https://www.devdisplay.org/UsefulRepo" className="block text-sm text-neutral-400">
          Valuable Repo
        </a>
        <a href="https://www.devdisplay.org/ResearchPaper" className="block text-sm text-neutral-400">
          Research Paper
        </a>
        <a href="https://www.devdisplay.org/Documentation" className="mb-1 block text-sm text-neutral-400">
          Documentation
        </a>
        <a href="https://www.devdisplay.org/BestColleges" className="block text-sm text-neutral-400">
          Best Colleges
        </a>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Opportunities</h3>
        <a href="https://www.devdisplay.org/Jobs" className="mb-1 block text-sm text-neutral-400">
          Jobs
        </a>
        <a href="https://www.devdisplay.org/Internships" className="block text-sm text-neutral-400">
          Internships
        </a>
        <a href="https://www.devdisplay.org/Freelancing" className="block text-sm text-neutral-400">
          Freelancing
        </a>
        <a href="https://www.devdisplay.org/Hackathons" className="block text-sm text-neutral-400">
          Hackathons
        </a>
        <a href="https://www.devdisplay.org/Competitions" className="block text-sm text-neutral-400">
          Competitions
        </a>
        <a href="https://www.devdisplay.org/Events" className="block text-sm text-neutral-400">
          Tech Events
        </a>
        <a href="https://www.devdisplay.org/Bootcamps" className="block text-sm text-neutral-400">
          Bootcamps
        </a>
        <a href="https://www.devdisplay.org/Certifications" className="block text-sm text-neutral-400">
          Certifications
        </a>
        <a href="https://www.devdisplay.org/OpenSource" className="block text-sm text-neutral-400">
          OpenSource
        </a>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Evolution</h3>
        <a href="https://www.devdisplay.org/ProjectShowcase" className="mb-1 block text-sm text-neutral-400">
          Project Hub
        </a>
        <a href="https://www.devdisplay.org/PortfolioIdeas" className="mb-1 block text-sm text-neutral-400">
          Portfolio Hub
        </a>
        <a href="https://www.devdisplay.org/IndustryTrends" className="block text-sm text-neutral-400">
          Tech Trends
        </a>
        <a href="https://www.devdisplay.org/AiCareer" className="block text-sm text-neutral-400">
          AI Career Guide
        </a>
        <a href="https://www.devdisplay.org/ResumeBuilder" className="block text-sm text-neutral-400">
          Resume Building
        </a>
      </div>
    </div>
  </div>
);

const Connect = () => (
  <div>
    <div className="flex gap-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Social Links</h3>
        <a href="https://www.devdisplay.org/Connect" className="mb-1 block text-sm text-neutral-400">
          All Connect Links
        </a>
        <a href="https://www.linkedin.com/company/devdisplay/" className="block text-sm text-neutral-400">
          LinkedIn
        </a>
        <a href="https://twitter.com/devdisplay_" className="block text-sm text-neutral-400">
          Twitter
        </a>
        <a href="https://instagram.com/devdisplay" className="block text-sm text-neutral-400">
          Instagram
        </a>
        <a href="https://discord.com/invite/chyt2UgTv5" className="block text-sm text-neutral-400">
          Discord
        </a>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Development</h3>
        <a href="https://github.com/codeaashu/DevDisplay" className="mb-1 block text-sm text-neutral-400">
          GitHub Repo
        </a>
        <a href="https://github.com/DevDisplay" className="block text-sm text-neutral-400">
          GitHub Org
        </a>
        <a href="https://youtube.com/@devdisplay" className="block text-sm text-neutral-400">
          YouTube
        </a>
        <a href="https://t.me/devdisplay" className="block text-sm text-neutral-400">
          Telegram
        </a>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Contact</h3>
        <a href="mailto:team@devdisplay.org" className="mb-1 block text-sm text-neutral-400">
          Email Team
        </a>
        <a href="https://github.com/codeaashu/DevDisplay" className="block text-sm text-neutral-400">
          Contact Founder
        </a>
      </div>
    </div>
  </div>
);

const Explore = () => (
  <div>
    <div className="grid grid-cols-2 gap-2">
      <a href="https://www.devdisplay.tech/" target="_blank" rel="noopener noreferrer">
        <img className="mb-2 h-14 w-full rounded object-cover" src="/DCommunity.png" alt="DevDisplay Community" />
        <h4 className="mb-0.5 text-sm font-medium">DevDisplay Community</h4>
        <p className="text-xs text-neutral-400">
          A global developer community that brings the powerful impact of innovation from the ground up in universities,
          colleges, and cities.
        </p>
      </a>
      <a href="https://dedisplaystudio.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img className="mb-2 h-14 w-full rounded object-cover" src="/DStudio.png" alt="DevDisplay Studio" />
        <h4 className="mb-0.5 text-sm font-medium">DevDisplay Studio</h4>
        <p className="text-xs text-neutral-400">
          DevDisplay Studio empowers startups, enterprises, and agencies with premium and powerful software solutions by
          OG DevDisplay Developers.
        </p>
      </a>
    </div>
  </div>
);

const TABS = [
  { title: 'Developers', Component: Developers },
  { title: 'Connect', Component: Connect },
  { title: 'Explore', Component: Explore },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default Navbar;
