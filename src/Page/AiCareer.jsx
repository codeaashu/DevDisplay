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

function AiCareer() {
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

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <LineChart className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
            <div className="mb-2 text-4xl font-bold text-gray-900">95%</div>
            <p className="text-gray-600">Career Match Accuracy</p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <Users className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
            <div className="mb-2 text-4xl font-bold text-gray-900">50K+</div>
            <p className="text-gray-600">Successful Career Transitions</p>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <Building2 className="mx-auto mb-4 h-12 w-12 text-indigo-600" />
            <div className="mb-2 text-4xl font-bold text-gray-900">1000+</div>
            <p className="text-gray-600">Partner Companies</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Choose AI Career Navigator?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Feature
            icon={<TrendingUp className="h-12 w-12" />}
            title="AI-Powered Analysis"
            description="Get precise career compatibility analysis using advanced machine learning algorithms"
          />
          <Feature
            icon={<Rocket className="h-12 w-12" />}
            title="Personalized Path"
            description="Receive customized learning paths and skill development recommendations"
          />
          <Feature
            icon={<Award className="h-12 w-12" />}
            title="Industry Insights"
            description="Access real-time industry trends and requirements from top companies"
          />
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
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Your Career Analysis</h2>

              {analysis && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between rounded-lg bg-indigo-50 p-4">
                    <div className="flex items-center">
                      <Percent className="mr-3 h-8 w-8 text-indigo-600" />
                      <div>
                        <p className="text-sm text-gray-600">Job Compatibility</p>
                        <p className="text-2xl font-bold text-indigo-600">{analysis.compatibility}%</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="flex items-center text-lg font-semibold text-gray-900">
                      <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                      Skills to Develop
                    </h3>
                    <ul className="list-disc space-y-2 pl-5">
                      {analysis.missingSkills.map((skill, index) => (
                        <li key={index} className="text-gray-600">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Recommended Path</h3>
                    <p className="text-gray-600">{analysis.recommendedPath}</p>
                  </div>

                  <button
                    onClick={() => setShowResults(false)}
                    className="mt-4 w-full rounded-lg bg-gray-100 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    Start New Analysis
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mx-auto max-w-7xl bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">Success Stories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Testimonial
            name="Sarah Johnson"
            role="Senior Software Engineer"
            company="Google"
            text="AI Career Navigator helped me identify the exact skills I needed to land my dream job at Google. The personalized roadmap was invaluable."
            imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
          />
          <Testimonial
            name="Michael Chen"
            role="Product Manager"
            company="Microsoft"
            text="The career compatibility analysis was spot-on. It helped me transition from engineering to product management seamlessly."
            imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
          />
          <Testimonial
            name="Emily Rodriguez"
            role="Data Scientist"
            company="Amazon"
            text="The AI-powered insights helped me focus on the most relevant skills for my field. I got three job offers within a month!"
            imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
              1
            </div>
            <h3 className="mb-2 text-xl font-semibold">Input Your Goals</h3>
            <p className="text-gray-600">Share your career aspirations and current skill set</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
              2
            </div>
            <h3 className="mb-2 text-xl font-semibold">AI Analysis</h3>
            <p className="text-gray-600">Our AI analyzes your profile against industry requirements</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
              3
            </div>
            <h3 className="mb-2 text-xl font-semibold">Get Insights</h3>
            <p className="text-gray-600">Receive detailed compatibility analysis and skill gaps</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl font-bold text-white">
              4
            </div>
            <h3 className="mb-2 text-xl font-semibold">Take Action</h3>
            <p className="text-gray-600">Follow your personalized development roadmap</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 text-lg font-semibold">AI Career Navigator</h4>
              <p className="text-gray-400">Empowering careers through AI-driven insights</p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Career Analysis</li>
                <li>Skill Gap Assessment</li>
                <li>Learning Paths</li>
                <li>Industry Insights</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Career Navigator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AiCareer;
