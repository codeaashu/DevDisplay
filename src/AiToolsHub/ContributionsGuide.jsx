import React from 'react';
import Navbar from './commonComponents/Navbar';
import { Footer } from '../components/Footer/Footer';

const ContributionsGuide = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="min-h-[70vh] p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#00a6fb]">How to Contribute</h1>
        <div className="space-y-8">
          <p className="text-lg text-gray-300">
            Contributing to open-source projects is a rewarding way to learn, teach, and build experience. It can
            enhance your skills, build your network, and make a difference in the tech community. Here's how you can get
            started!
          </p>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">1. Fork the Repository</h2>
          <p className="text-lg text-gray-300">
            The first step to contributing is to fork the repository. Forking allows you to create a personal copy of
            the project where you can make changes without affecting the original repository.
          </p>
          <pre className="rounded-md bg-gray-800 p-4 text-sm text-gray-400">
            <code>git clone https://github.com/your-username/project-name.git</code>
          </pre>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">2. Create a New Branch</h2>
          <p className="text-lg text-gray-300">
            Always create a new branch to work on. This ensures that your changes are isolated, making it easier to test
            and review.
          </p>
          <pre className="rounded-md bg-gray-800 p-4 text-sm text-gray-400">
            <code>git checkout -b feature-branch-name</code>
          </pre>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">3. Make Your Changes</h2>
          <p className="text-lg text-gray-300">
            After you've created your branch, make the necessary changes to the codebase. It could be a bug fix, feature
            addition, or documentation update.
          </p>
          <p className="text-lg text-gray-300">For example, to add a new function:</p>
          <pre className="rounded-md bg-gray-800 p-4 text-sm text-gray-400">
            <code>
              // New function to calculate square of a number function square(number) {'{'}
              return number * number;
              {'}'}
            </code>
          </pre>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">4. Commit Your Changes</h2>
          <p className="text-lg text-gray-300">
            Once you've made your changes, you need to commit them. Be sure to write a meaningful commit message
            explaining the changes you’ve made.
          </p>
          <pre className="rounded-md bg-gray-800 p-4 text-sm text-gray-400">
            <code>git add .</code>
            <code>git commit -m "Add square function"</code>
          </pre>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">5. Push Your Changes</h2>
          <p className="text-lg text-gray-300">
            After committing your changes, push them to your forked repository on GitHub.
          </p>
          <pre className="rounded-md bg-gray-800 p-4 text-sm text-gray-400">
            <code>git push origin feature-branch-name</code>
          </pre>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">6. Create a Pull Request (PR)</h2>
          <p className="text-lg text-gray-300">
            Once your changes are pushed, go to the original repository and open a pull request (PR). The project
            maintainers will review your changes and either merge them or provide feedback.
          </p>
          <p className="text-lg text-gray-300">
            Make sure to add a description of what your PR does, why it is needed, and any additional context that will
            help the maintainers understand your work.
          </p>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">7. Stay Engaged</h2>
          <p className="text-lg text-gray-300">
            After submitting your pull request, stay engaged with the maintainers. Be open to feedback, and if
            necessary, make additional changes based on the review.
          </p>

          <h2 className="text-2xl font-semibold text-[#00a6fb]">Best Practices for Contributing</h2>
          <ul className="ml-8 list-disc text-lg text-gray-300">
            <li>Write clear and descriptive commit messages.</li>
            <li>Follow the project's coding style and guidelines.</li>
            <li>Always test your code before submitting.</li>
            <li>Keep your contributions small and focused on one task.</li>
            <li>Be respectful and patient when interacting with other contributors.</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContributionsGuide;
