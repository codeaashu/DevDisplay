import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const navigateToGitHub = () => {
    window.location.href = 'https://github.com/codeaashu/DevDisplay';
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <section className="py-16 text-center">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-6xl font-bold">DevDisplay</h1>
              <p className="mt-4 text-xl">Connect ▸ Collab ▸ Code ▸ Create ▸ Conquer</p>
              <p className="mt-6 text-lg">
                DevDisplay is a global open-source tech community and organization that brings together all your tech
                needs in one place.
              </p>
              <p className="mt-8 text-lg font-semibold">
                <a href="https://www.devdisplay.org" className="underline">
                  www.devdisplay.org
                </a>
              </p>
            </div>
          </section>

          {/* Slide 1 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 1 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 1 goes here.</p>
          </section>

          {/* Slide 2 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 2 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 2 goes here.</p>
          </section>

          {/* Repeat for all 16 slides */}
          {/* Slide 3 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 3 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 3 goes here.</p>
          </section>

          {/* Slide 4 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 4 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 4 goes here.</p>
          </section>

          {/* Slide 5 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 5 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 5 goes here.</p>
          </section>

          {/* Slide 6 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 6 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 6 goes here.</p>
          </section>

          {/* Slide 7 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 7 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 7 goes here.</p>
          </section>

          {/* Slide 8 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 8 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 8 goes here.</p>
          </section>

          {/* Slide 9 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 9 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 9 goes here.</p>
          </section>

          {/* Slide 10 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 10 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 10 goes here.</p>
          </section>

          {/* Slide 11 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 11 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 11 goes here.</p>
          </section>

          {/* Slide 12 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 12 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 12 goes here.</p>
          </section>

          {/* Slide 13 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 13 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 13 goes here.</p>
          </section>

          {/* Slide 14 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 14 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 14 goes here.</p>
          </section>

          {/* Slide 15 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 15 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 15 goes here.</p>
          </section>

          {/* Slide 16 */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Slide 16 Title</h2>
            <p className="mt-4 text-lg text-gray-300">Content from slide 16 goes here.</p>
          </section>

          <section className="bg-gradient-to-r from-[#2e3b4e] via-[#1e2a42] to-[#141d2f] py-16 text-center">
            <h2 className="text-4xl font-bold text-[#00a6fb]">Join Our Community</h2>
            <p className="mt-4 text-lg text-gray-300">
              Ready to collaborate, innovate, and grow? Become a part of the DevDisplay community today.
            </p>
            <button
              onClick={navigateToGitHub}
              className="mt-8 rounded-lg bg-[#00a6fb] px-6 py-3 text-lg font-bold text-white hover:bg-[#008dc9]"
            >
              Get Started
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
