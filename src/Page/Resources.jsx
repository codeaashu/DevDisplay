import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Code, Bot, Rocket } from 'lucide-react';

const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];
const githubRepos = [
  'Programming Cheatsheets',
  'DSA Cheatsheets',
  'Web Development Resources',
  'Machine Learning Guides',
];
const aiCategories = ['Image Creation', 'Sales', 'Text Generation', 'Code Assistance'];

export default function TechResources() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedRepo, setSelectedRepo] = useState('');
  const [selectedAICategory, setSelectedAICategory] = useState('');
  const [selectedProjectLanguage, setSelectedProjectLanguage] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-[#141d2f] text-white">
      <header className="relative flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage:
              'linear-gradient(45deg, #141d2f 25%, #00a6fb 25%, #00a6fb 50%, #141d2f 50%, #141d2f 75%, #00a6fb 75%, #00a6fb 100%)',
            backgroundSize: '400% 400%',
          }}
        />
        <div className="relative z-10 text-center">
          <motion.h1
            className="mb-4 text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tech Resources
          </motion.h1>
          <motion.p
            className="text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hub of all tech resources
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </header>

      <main className="container mx-auto space-y-16 px-4 py-16">
        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="mb-6 flex items-center text-3xl font-bold">
            <Code className="mr-2" /> Programming Language Courses
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {programmingLanguages.map((lang) => (
              <motion.button
                key={lang}
                className="rounded-lg bg-[#00a6fb] p-4 text-white transition-colors hover:bg-[#0077b6]"
                onClick={() => setSelectedLanguage(lang === selectedLanguage ? '' : lang)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {lang}
              </motion.button>
            ))}
          </div>
          {selectedLanguage && (
            <motion.div
              className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="block rounded-lg bg-[#1e2a45] p-4 transition-colors hover:bg-[#2a3a5a]"
                  variants={itemVariants}
                >
                  {selectedLanguage} Course {i}
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.section>

        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="mb-6 flex items-center text-3xl font-bold">
            <Github className="mr-2" /> Top GitHub Repositories
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {githubRepos.map((repo) => (
              <motion.button
                key={repo}
                className="rounded-lg bg-[#00a6fb] p-4 text-white transition-colors hover:bg-[#0077b6]"
                onClick={() => setSelectedRepo(repo === selectedRepo ? '' : repo)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {repo}
              </motion.button>
            ))}
          </div>
          {selectedRepo && (
            <motion.div
              className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="block rounded-lg bg-[#1e2a45] p-4 transition-colors hover:bg-[#2a3a5a]"
                  variants={itemVariants}
                >
                  {selectedRepo} Link {i}
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.section>

        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="mb-6 flex items-center text-3xl font-bold">
            <Bot className="mr-2" /> Top AI Tools
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {aiCategories.map((category) => (
              <motion.button
                key={category}
                className="rounded-lg bg-[#00a6fb] p-4 text-white transition-colors hover:bg-[#0077b6]"
                onClick={() => setSelectedAICategory(category === selectedAICategory ? '' : category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          {selectedAICategory && (
            <motion.div
              className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="block rounded-lg bg-[#1e2a45] p-4 transition-colors hover:bg-[#2a3a5a]"
                  variants={itemVariants}
                >
                  {selectedAICategory} Tool {i}
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.section>

        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="mb-6 flex items-center text-3xl font-bold">
            <Rocket className="mr-2" /> Top Projects in Every Programming Language
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {programmingLanguages.map((lang) => (
              <motion.button
                key={lang}
                className="rounded-lg bg-[#00a6fb] p-4 text-white transition-colors hover:bg-[#0077b6]"
                onClick={() => setSelectedProjectLanguage(lang === selectedProjectLanguage ? '' : lang)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {lang}
              </motion.button>
            ))}
          </div>
          {selectedProjectLanguage && (
            <motion.div
              className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[1, 2, 3, 4].map((i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="block rounded-lg bg-[#1e2a45] p-4 transition-colors hover:bg-[#2a3a5a]"
                  variants={itemVariants}
                >
                  {selectedProjectLanguage} Project {i}
                </motion.a>
              ))}
            </motion.div>
          )}
        </motion.section>
      </main>

      <footer className="bg-[#0d1321] py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Tech Resources</h3>
              <p>Empowering developers with knowledge</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors hover:text-[#00a6fb]">
                About
              </a>
              <a href="#" className="transition-colors hover:text-[#00a6fb]">
                Contact
              </a>
              <a href="#" className="transition-colors hover:text-[#00a6fb]">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Tech Resources. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
