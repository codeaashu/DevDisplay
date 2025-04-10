import React, { useState } from 'react';
import {
  Brain,
  Target,
  Briefcase,
  Code,
  ChevronRight,
  Percent,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  LineChart,
  Rocket,
  Users,
  Building2,
  Award,
  ArrowRight,
  Loader2,
  Clock,
  BookOpen,
  Link,
} from 'lucide-react';
import { analyzeCareerPath } from '../api/skillAnalyzer.js';

const Testimonial = ({ name, role, company, text, imageUrl }) => (
  <div className="rounded-xl bg-white p-6 shadow-lg">
    <div className="mb-4 flex items-center">
      <img src={imageUrl} alt={name} className="mr-4 h-12 w-12 rounded-full object-cover" />
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">
          {role} at {company}
        </p>
      </div>
    </div>
    <p className="italic text-gray-700">&ldquo;{text}&rdquo;</p>
  </div>
);

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg">
    <div className="mb-4 text-indigo-600">{icon}</div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SkillCard = ({ title, skills, type }) => (
  <div className="rounded-lg bg-white p-6 shadow">
    <h3 className="mb-4 flex items-center text-lg font-semibold">
      {type === 'matched' ? (
        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
      ) : (
        <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
      )}
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`rounded-full px-3 py-1 text-sm ${
            type === 'matched' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
          }`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

function App() {
  const [jobGoal, setJobGoal] = useState('');
  const [currentSkills, setCurrentSkills] = useState('');
  const [targetCompany, setTargetCompany] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyzeCareerPathHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const skillsList = currentSkills.split(',').map((skill) => skill.trim());
      const result = await analyzeCareerPath(jobGoal, skillsList, targetCompany);
      setAnalysis(result);
      setShowResults(true);
    } catch (err) {
      setError('Failed to analyze career path. Please try again later.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <Brain className="mx-auto mb-8 h-20 w-20 animate-pulse" />
            <h1 className="mb-6 text-5xl font-bold">AI Career Navigator</h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-indigo-100">
              Navigate your career journey with precision using AI-powered insights. Get personalized recommendations
              and close your skill gaps effectively.
            </p>
            <a
              href="#get-started"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Analysis Form Section */}
      <div id="get-started" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {!showResults ? (
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h2 className="mb-8 text-center text-3xl font-bold">Start Your Career Analysis</h2>
              {error && <div className="mb-4 rounded-lg bg-red-50 p-4 text-red-700">{error}</div>}
              <form onSubmit={analyzeCareerPathHandler} className="space-y-6">
                <div>
                  <label className="mb-2 block flex items-center text-sm font-medium text-gray-700">
                    <Target className="mr-2 h-5 w-5 text-indigo-600" />
                    Career Goal
                  </label>
                  <input
                    type="text"
                    value={jobGoal}
                    onChange={(e) => setJobGoal(e.target.value)}
                    placeholder="e.g., Senior Software Engineer"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="mb-2 block flex items-center text-sm font-medium text-gray-700">
                    <Code className="mr-2 h-5 w-5 text-indigo-600" />
                    Current Skills (comma-separated)
                  </label>
                  <textarea
                    value={currentSkills}
                    onChange={(e) => setCurrentSkills(e.target.value)}
                    placeholder="e.g., JavaScript, React, Node.js"
                    className="h-32 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="mb-2 block flex items-center text-sm font-medium text-gray-700">
                    <Briefcase className="mr-2 h-5 w-5 text-indigo-600" />
                    Target Company
                  </label>
                  <input
                    type="text"
                    value={targetCompany}
                    onChange={(e) => setTargetCompany(e.target.value)}
                    placeholder="e.g., Google, Microsoft"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    required
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Analyze Career Path
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Results Header */}
              <div className="rounded-2xl bg-white p-8 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Career Analysis Results</h2>
                  <button onClick={() => setShowResults(false)} className="text-indigo-600 hover:text-indigo-700">
                    New Analysis
                  </button>
                </div>

                {analysis && (
                  <div className="space-y-8">
                    {/* Compatibility Score */}
                    <div className="flex items-center justify-center">
                      <div className="relative h-48 w-48">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600">{analysis.compatibility}%</div>
                            <div className="text-gray-600">Compatibility</div>
                          </div>
                        </div>
                        <svg className="h-48 w-48 -rotate-90 transform">
                          <circle
                            cx="96"
                            cy="96"
                            r="88"
                            stroke="currentColor"
                            strokeWidth="12"
                            fill="transparent"
                            className="text-gray-200"
                          />
                          <circle
                            cx="96"
                            cy="96"
                            r="88"
                            stroke="currentColor"
                            strokeWidth="12"
                            fill="transparent"
                            strokeDasharray={553}
                            strokeDashoffset={553 - (553 * analysis.compatibility) / 100}
                            className="text-indigo-600"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Skill Analysis */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <SkillCard title="Matched Skills" skills={analysis.matchedSkills} type="matched" />
                      <SkillCard title="Skills to Develop" skills={analysis.missingSkills} type="missing" />
                    </div>

                    {/* Company Insights */}
                    <div className="rounded-lg bg-white p-6 shadow">
                      <h3 className="mb-4 flex items-center text-lg font-semibold">
                        <Building2 className="mr-2 h-5 w-5 text-indigo-600" />
                        Company Insights
                      </h3>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div>
                          <h4 className="mb-2 font-medium text-gray-700">Culture</h4>
                          <p className="text-gray-600">{analysis.companyInsights.culture}</p>
                        </div>
                        <div>
                          <h4 className="mb-2 font-medium text-gray-700">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {analysis.companyInsights.techStack.map((tech, index) => (
                              <span key={index} className="rounded-full bg-blue-100 px-2 py-1 text-sm text-blue-800">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="mb-2 font-medium text-gray-700">Growth Areas</h4>
                          <div className="flex flex-wrap gap-2">
                            {analysis.companyInsights.growthAreas.map((area, index) => (
                              <span key={index} className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-800">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Career Path Steps */}
                    <div className="rounded-lg bg-white p-6 shadow">
                      <h3 className="mb-6 flex items-center text-lg font-semibold">
                        <TrendingUp className="mr-2 h-5 w-5 text-indigo-600" />
                        Development Roadmap
                      </h3>
                      <div className="space-y-6">
                        {analysis.careerPathSteps.map((step, index) => (
                          <div key={index} className="border-l-2 border-indigo-200 pb-6 pl-4">
                            <div className="mb-2 flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-indigo-600" />
                              <span className="text-sm font-medium text-indigo-600">{step.timeframe}</span>
                            </div>
                            <h4 className="mb-2 text-lg font-medium text-gray-900">{step.focus}</h4>
                            <ul className="space-y-2">
                              {step.resources.map((resource, rIndex) => (
                                <li key={rIndex} className="flex items-center text-gray-600">
                                  <BookOpen className="mr-2 h-4 w-4" />
                                  {resource}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Path */}
                    <div className="rounded-lg bg-white p-6 shadow">
                      <h3 className="mb-4 flex items-center text-lg font-semibold">
                        <Rocket className="mr-2 h-5 w-5 text-indigo-600" />
                        Recommended Next Steps
                      </h3>
                      <div className="prose max-w-none text-gray-600">
                        {analysis.recommendedPath.split('\n').map((line, index) => (
                          <p key={index} className="mb-2">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
