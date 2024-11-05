import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between p-6">
        <div className="text-2xl font-bold">DevDisplay</div>
        <nav className="flex gap-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Contests
          </a>
          <a href="#" className="hover:underline">
            Blogs
          </a>
          <a href="#" className="hover:underline">
            Leaderboard
          </a>
        </nav>
        <button className="rounded bg-blue-600 px-4 py-2 text-white">Login</button>
      </header>

      {/* Main Section */}
      <main className="p-8 text-center">
        <h1 className="mt-8 text-5xl font-bold">
          One place for all your <span className="text-blue-500">coding platforms</span> needs
        </h1>
        <p className="mt-4 text-lg">Elevate your coding and development journey with DevDisplay</p>
        <button className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-white">Register Now</button>

        {/* Supported By Section */}
        <div className="mt-10 flex justify-center gap-8">
          {/* Replace with logos as needed */}
          <img src="logo1.png" alt="DigitalOcean" className="w-24" />
          <img src="logo2.png" alt="Microsoft for Startups" className="w-24" />
          <img src="logo3.png" alt="GitBook" className="w-24" />
          <img src="logo4.png" alt="MELTCD" className="w-24" />
        </div>

        {/* Profile Section */}
        <section className="mt-12 rounded-lg bg-blue-800 p-8 text-left">
          <h2 className="mb-4 text-3xl font-bold">
            Build your <span className="text-blue-300">Dynamic</span> Profile
          </h2>
          <p className="mb-4 text-lg">
            Showcase your ratings, GitHub stats, personal info, skills, education, and more. Climb the leaderboard while
            enjoying friendly competition within the coding community.
          </p>
          <button className="rounded-lg bg-blue-500 px-4 py-2">Create Now</button>
        </section>

        {/* Features Section */}
        <section className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-blue-900 p-6 text-center">
            <h3 className="text-2xl font-bold">Leetcode</h3>
            <p className="mt-2">Platform for honing coding skills through a variety of algorithmic challenges.</p>
            <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2">Check out</button>
          </div>
          <div className="rounded-lg bg-blue-900 p-6 text-center">
            <h3 className="text-2xl font-bold">Atcoder</h3>
            <p className="mt-2">Competitive programming platform that hosts contests and offers practice problems.</p>
            <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2">Check out</button>
          </div>
          <div className="rounded-lg bg-blue-900 p-6 text-center">
            <h3 className="text-2xl font-bold">Codeforces</h3>
            <p className="mt-2">Online competitive programming platform that hosts contests and regular challenges.</p>
            <button className="mt-4 rounded-lg bg-blue-500 px-4 py-2">Check out</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-gray-800 p-8 text-center">
        <p className="text-white">&copy; 2024 DevDisplay. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-8">
          <a href="#" className="text-white">
            Feedback
          </a>
          <a href="#" className="text-white">
            Contact Us
          </a>
          <a href="#" className="text-white">
            About DevDisplay
          </a>
          <a href="#" className="text-white">
            Join our Discord
          </a>
        </div>
        <div className="mt-4 flex justify-center gap-8">
          {/* Social Icons */}
          <a href="#" className="text-white">
            LinkedIn
          </a>
          <a href="#" className="text-white">
            Twitter
          </a>
          <a href="#" className="text-white">
            GitHub
          </a>
          <a href="#" className="text-white">
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
