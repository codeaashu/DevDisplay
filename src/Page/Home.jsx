import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '/components/ui/card';
import { Button } from '/components/ui/button';
import {
  Home,
  Users,
  Play,
  Shield,
  Clock,
  Star,
  Upload,
  Download,
  Trash,
  Edit,
  Plus,
  Minus,
  Check,
  X,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const supporters = [
  { name: 'Digital Ocean', logo: '/assets/SupportedBy/DigitalOcean.png' },
  { name: 'Git Book', logo: '/assets/SupportedBy/GitBookLight_1.png' },
  { name: 'Melt CD', logo: '/assets/SupportedBy/meltcd.png' },
  { name: 'Microsoft for Startups', logo: '/assets/SupportedBy/MicrosoftForStartups.png' },
  { name: 'MSME', logo: '/assets/SupportedBy/MSME.png' },
  { name: 'Notion', logo: '/assets/SupportedBy/Notion.png' },
  { name: 'Peerlist', logo: '/assets/SupportedBy/Peerlist.png' },
  { name: 'Product Hunt', logo: '/assets/SupportedBy/ProductHunt.png' },
  { name: 'Vercel', logo: '/assets/SupportedBy/Vercel.png' },
];

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <header className="bg-gray-900 py-6">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold">DevDisplay</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero-section mt-20 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="flex w-full flex-col items-center justify-center px-8 text-center">
          <p className="text-md mx-auto mb-10 w-fit rounded-full bg-[#ffffff1a] p-2 text-center">
            We're Open Source {'>'} Star Now🌟
          </p>
          <h1 className="my-4 text-4xl font-bold tracking-widest md:text-4xl">One Place for all your Tech Needs</h1>
          <h2 className="my-4 text-6xl font-bold">
            Dev <span className="text-[#00a6fb]">Display</span>
          </h2>
          <p className="text-md md:text-md mx-auto my-8 max-w-2xl">Global platform that fulfills all your tech needs</p>
        </div>
        <motion.div className="animate-globe relative -top-10 left-16 flex h-[400px] w-full max-w-[600px] items-center justify-center md:h-[500px] lg:h-[600px]">
          <div className="animate-spin-slow h-16 w-16 rounded-xl border-2 border-dashed bg-gray-200"></div>
        </motion.div>
      </section>

      <section className="tech-features-section max-w-[80%] bg-gray-900 px-4 py-16">
        <div className="mx-auto my-12 max-w-[80%] text-center">
          <h2 className="my-6 text-4xl font-bold text-[#00a6fb]">All Tech Features in One Place</h2>
          <p className="mx-auto my-12 mb-8 max-w-3xl text-xl">
            Discover a range of tools, resources, and opportunities to enhance your tech journey and skills.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
          <a
            href="/opportunities"
            className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-700"
          >
            <Card>
              <CardHeader>
                <CardTitle>Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore various career and learning opportunities in the tech industry.
                </CardDescription>
              </CardContent>
            </Card>
          </a>
          <a
            href="/resources"
            className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-700"
          >
            <Card>
              <CardHeader>
                <CardTitle>Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Access a wide range of tech resources and tutorials.</CardDescription>
              </CardContent>
            </Card>
          </a>
          <a
            href="/projects"
            className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-700"
          >
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Showcase and discover innovative tech projects.</CardDescription>
              </CardContent>
            </Card>
          </a>
          <a
            href="/discussions"
            className="feature-card block rounded-lg bg-gray-800 p-6 shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-700"
          >
            <Card>
              <CardHeader>
                <CardTitle>Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Join the community and engage in tech discussions.</CardDescription>
              </CardContent>
            </Card>
          </a>
        </div>
        <a
          href="https://github.com/codeaashu/DevDisplay"
          className="feature-card mt-6 block rounded-lg bg-gray-800 p-6 text-center shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-700"
        >
          <Card>
            <CardHeader>
              <CardTitle>
                Want to <span className="text-blue-400">Add New Features</span> ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Suggest new features you'd love to see and help shape the tech community.
              </CardDescription>
            </CardContent>
          </Card>
        </a>
      </section>

      <div className="my-10 bg-gray-900 py-10">
        <h2 className="my-10 text-center text-4xl font-bold text-[#00a6fb]">Supported By</h2>
        <div className="relative mx-auto flex max-w-[99vw] space-x-8 overflow-x-hidden">
          <div className="animate-marquee flex space-x-8">
            {supporters.map((sponsor, index) => (
              <div key={index} className="flex h-[100px] w-[200px] flex-shrink-0 items-center justify-center">
                <img src={sponsor.logo} alt={sponsor.name} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
          <div className="animate-marquee2 absolute top-0 flex space-x-8">
            {supporters.map((sponsor, index) => (
              <div
                key={index + supporters.length}
                className="flex h-[100px] w-[200px] flex-shrink-0 items-center justify-center"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="w-full bg-gray-800 py-8">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 text-center md:mb-0 md:text-left">
              <h4 className="text-xl font-bold text-[#00a6fb]">DevDisplay</h4>
              <p className="mt-2 text-sm">Empowering tech enthusiasts to connect, learn, and grow together.</p>
            </div>
            <div className="mb-6 flex space-x-6 md:mb-0">
              <a href="/about" className="text-sm hover:text-[#00a6fb]">
                About Us
              </a>
              <a href="/contact" className="text-sm hover:text-[#00a6fb]">
                Contact
              </a>
              <a href="/privacy" className="text-sm hover:text-[#00a6fb]">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm hover:text-[#00a6fb]">
                Terms of Service
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Home className="text-xl hover:text-[#00a6fb]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Users className="text-xl hover:text-[#00a6fb]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Play className="text-xl hover:text-[#00a6fb]" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Shield className="text-xl hover:text-[#00a6fb]" />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm">© 2024 DevDisplay. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
