import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const opportunities = [
  { title: 'Jobs', items: ['Software Engineer at TechCorp', 'Data Scientist at DataInc', 'UX Designer at DesignHub'] },
  { title: 'Internships', items: ['Summer Internship at Google', 'Fall Internship at Microsoft', 'Remote Internship at Amazon'] },
  { title: 'Hackathons', items: ['Global AI Hackathon', 'Blockchain Innovation Challenge', 'Green Tech Hackathon'] },
  { title: 'Tech Events', items: ['TechCrunch Disrupt', 'Web Summit', 'Google I/O'] },
  { title: 'BootCamps', items: ['Full Stack Web Development', 'Data Science Immersive', 'UX/UI Design Bootcamp'] },
  { title: 'Tech Webinars', items: ['AI in Healthcare', 'Cybersecurity Best Practices', 'Cloud Computing Trends'] },
  { title: 'Devfest', items: ['Google DevFest 2024', 'Apple WWDC', 'Microsoft Build'] },
]

export default function Opportunities() {
  return (
    <div className="min-h-screen bg-[#141d2f] text-white text-center">
      <header className="p-4 bg-[#00a6fb]">
        <h1 className="text-2xl font-bold">Opportunities Hub</h1>
      </header>

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
            backgroundImage: 'linear-gradient(45deg, #141d2f 25%, #00a6fb 25%, #00a6fb 50%, #141d2f 50%, #141d2f 75%, #00a6fb 75%, #00a6fb 100%)',
            backgroundSize: '400% 400%',
          }}
        />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Opportunities In Tech Fields</h2>
          <p className="text-xl">
             Explore the hub of all the latest & upcoming Opportunities in one place
            <br />
            (jobs, internships, hackathons, events, bootcamps, webinars, devfests)
          </p>
        </div>
      </section>

      <main className="container mx-auto p-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((category) => (
          <div key={category.title} className="bg-[#1e2a42] rounded-lg p-4 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-[#00a6fb]">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4 text-[#00a6fb]" />
                  <a href="#" className="hover:text-[#00a6fb] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>

      <footer className="bg-[#00a6fb] p-8 mt-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Join the Tech Revolution</h3>
          <p className="mb-4">Stay updated with the latest opportunities and events in the tech world.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-[#141d2f] w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#141d2f] text-white rounded-lg hover:bg-[#1e2a42] transition-colors w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  )
}