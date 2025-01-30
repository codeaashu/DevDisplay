import React from 'react';

const Contribution = () => {
  return (
    <div className="background-wrapper1 min-h-screen bg-gray-900 p-6 text-center text-white">
      <header className="mb-6 w-full rounded-md bg-[#00a6fb] py-4 text-center">
        <h1 className="text-4xl font-bold">DevDisplay Contribution Guidelines</h1>
      </header>

      <div className="container mx-auto text-left">
        <section className="mb-8">
          <h2 className="text-2xl font-bold">Welcome to DevDisplay!</h2>
          <p className="mt-4">
            A global open-source tech community and organization where innovation thrives! We’re excited to have you on
            board as we Connect ▸ Collab ▸ Code ▸ Create ▸ Conquer together. We're on a mission to unite all your tech
            needs under one platform and establish DevDisplay as the Tech Enthusiast and Developer's First Platform.
            Whether you're a seasoned developer or just starting your open-source journey, your contributions matter! To
            help you make a meaningful impact, we've put together a structured guide on how to contribute effectively.
          </p>
        </section>

        <section>
          <a
            href="https://swift-sheet-b33.notion.site/DevDisplay-Contribution-Guidelines-18a7d1f1565b80569377e5a610155ccc"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded bg-[#00a6fb] px-4 py-2 text-center text-white hover:bg-[#008dc9]"
          >
            You can also checkout the contribution guidelines by clicking here!
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">📌 Prerequisites for Contributors</h2>
          <ul className="mt-4 list-inside list-disc">
            <li>
              ☑️ <strong>Familiarity with Git & GitHub</strong> – You should be comfortable with{' '}
              <strong>forking repositories, making commits, and submitting pull requests (PRs).</strong>
            </li>
            <li>
              ☑️ <strong>First Contribution Priority:</strong> Add your profile to DevDisplay via{' '}
              <strong>GitHub PR</strong> <em>(This is the first step to joining the community.)</em>
            </li>
            <li>
              ☑️ <strong>Understanding of Open Source Development</strong> – DevDisplay is an open-source platform, so
              contributions should follow best practices in collaboration, documentation, and coding standards.
            </li>
            <li>
              ☑️ <strong>Basic Knowledge of Web Technologies</strong> – Familiarity with JavaScript, React.js, Node.js,
              or other web development frameworks is a plus, depending on your contribution area.
            </li>
            <li>
              ☑️ <strong>Communication & Engagement</strong> – Contributors should actively discuss ideas, ask for
              feedback, and collaborate with the community via GitHub Discussions or DevDisplay’s community channels.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">📝 How to Structure a Good Proposal</h2>
          <p className="mt-4">
            A strong proposal ensures that your contribution is well-planned, impactful, and aligns with DevDisplay’s
            mission. Follow this structure when submitting your proposal:
          </p>
          <ol className="mt-4 list-inside list-decimal">
            <li>
              <strong>Title</strong> – A <strong>clear and concise title</strong> that describes your contribution idea.
              Example: <em>"Integrating AI-Powered Career Navigator in DevDisplay"</em>
            </li>
            <li>
              <strong>Summary</strong> – A <strong>brief explanation</strong> of what your contribution does and why
              it’s valuable. Example:{' '}
              <em>
                "This feature will help users identify career paths based on their skills, providing a roadmap for
                growth."
              </em>
            </li>
            <li>
              <strong>Problem Statement</strong> – Clearly define <strong>what problem exists</strong> and why this
              feature or enhancement is necessary. Example:{' '}
              <em>
                "Many tech professionals struggle to find structured career guidance, leading to confusion in
                skill-building."
              </em>
            </li>
            <li>
              <strong>Proposed Solution</strong> – Explain <strong>how your feature or contribution</strong> addresses
              the problem. Include key functionalities and user benefits.
            </li>
            <li>
              <strong>Technical Details</strong> – Mention the <strong>tools, frameworks, or APIs</strong> you plan to
              use. Example:{' '}
              <em>"Utilizing GPT-4 AI models to analyze user skills and suggest personalized career paths."</em>
            </li>
            <li>
              <strong>Implementation Plan</strong> – <strong>Step-by-step breakdown</strong> of how you will execute
              your contribution. Example:
              <ul className="mt-2 list-inside list-disc">
                <li>
                  <strong>Week 1:</strong> Research & UI wireframing
                </li>
                <li>
                  <strong>Week 2:</strong> Backend API integration
                </li>
                <li>
                  <strong>Week 3:</strong> Frontend implementation & testing
                </li>
                <li>
                  <strong>Week 4:</strong> Final review and community feedback
                </li>
              </ul>
            </li>
            <li>
              <strong>Expected Outcomes</strong> – Explain the <strong>value addition</strong> for DevDisplay users.
              Example:{' '}
              <em>
                "Users will have a structured career path with actionable steps and recommended learning resources."
              </em>
            </li>
            <li>
              <strong>Potential Challenges & Solutions</strong> – Identify <strong>possible roadblocks</strong> and how
              you plan to tackle them.
            </li>
            <li>
              <strong>Community Collaboration</strong> – Mention <strong>how other contributors</strong> can assist in
              refining and expanding your feature. Example:{' '}
              <em>"Frontend developers can enhance UI/UX, while backend contributors can optimize API responses."</em>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">🚀 Contribution Categories</h2>
          <ul className="mt-4 list-inside list-disc">
            <li>
              <strong>Dev Enhancer</strong> – Improve or refine existing features.{' '}
              <em>(Submit a meaningful Pull Request that enhances the platform.)</em>
            </li>
            <li>
              <strong>Dev Innovator</strong> – Propose and add innovative, creative features.{' '}
              <em>(Lead with creativity by implementing new ideas in DevDisplay.)</em>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">💡 The Best Way to Reach Out & Get Started</h2>
          <ol className="mt-4 list-inside list-decimal">
            <li>
              <strong>Join the DevDisplay Community:</strong> Visit{' '}
              <a href="https://github.com/codeaashu/DevDisplay/" className="text-[#00a6fb] underline">
                DevDisplay GitHub Repository
              </a>{' '}
              and read the contribution guidelines.
            </li>
            <li>
              <strong>Pick a Contribution Area:</strong> Browse the <strong>open issues</strong> or propose a new
              feature.
            </li>
            <li>
              <strong>Discuss Your Idea:</strong> Start a discussion in <strong>GitHub Discussions</strong> or{' '}
              <strong>DevDisplay Community Forum</strong>.
            </li>
            <li>
              <strong>Submit a Pull Request (PR):</strong> Once approved, fork the repository, implement changes, and
              submit a <strong>well-documented PR</strong>.
            </li>
            <li>
              <strong>Engage in Feedback Loops:</strong> Be responsive to{' '}
              <strong>review comments and improve your submission</strong> accordingly.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">🎯 Why Contribute to DevDisplay?</h2>
          <ul className="mt-4 list-inside list-disc">
            <li>
              ✔ <strong>Showcase Your Work</strong> – Get recognized in the open-source community.
            </li>
            <li>
              ✔ <strong>Work with Experts</strong> – Collaborate with top developers and tech leaders.
            </li>
            <li>
              ✔ <strong>Grow Your Network</strong> – Connect with like-minded innovators.
            </li>
            <li>
              ✔ <strong>Earn Recognition</strong> – Gain community appreciation, badges, and exclusive opportunities.
            </li>
            <li>
              ✔ <strong>Be Part of a Global Movement</strong> – Help shape DevDisplay into the ultimate tech hub.
            </li>
          </ul>
          <p className="mt-4">
            🔗 <strong>Start contributing today & make an impact!</strong> 🚀
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Step to Add Your Profile on DevDisplay:</h2>
          <p className="mt-4">
            <a
              href="https://github.com/codeaashu/DevDisplay/blob/main/CONTRIBUTING.md#-add-your-profile-on-devdisplay-"
              className="text-[#00a6fb] underline"
            >
              Click here
            </a>
          </p>
          <ul className="mt-4 list-inside list-disc">
            <li>After creating the PR, wait some hours - Project maintainers will review and merge your profile.</li>
            <li>
              <strong>
                Once your profile data is merged, you completed the Label 1 - Dev Pioneer 🎉 Your profile will be
                displayed on the DevDisplay and you will receive a 🎖️ Contribution Badge via email 💌
              </strong>
            </li>
          </ul>
          <p className="mt-4">
            Celebrate your contribution by sharing this badge on your social media profiles –{' '}
            <strong>LinkedIn, Twitter, Instagram</strong> – and inspire others to become part of our vibrant community!
            🌟
          </p>
          <p className="mt-4">
            <strong>Tag & Mention</strong> <strong>DevDisplay</strong> in your posts and show the world you’re
            empowering tech innovation through collaboration! Together, we’re building a global hub for developers to
            connect, create, and grow. 💻🌍
          </p>
          <ul className="mt-4 list-inside list-disc">
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a href="https://www.linkedin.com/company/devdisplay" className="text-[#00a6fb] underline">
                https://www.linkedin.com/company/devdisplay
              </a>
            </li>
            <li>
              <strong>Twitter:</strong>{' '}
              <a href="https://twitter.com/devdisplay_" className="text-[#00a6fb] underline">
                https://twitter.com/devdisplay_
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{' '}
              <a href="https://instagram.com/devdisplay" className="text-[#00a6fb] underline">
                https://instagram.com/devdisplay
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">
            Now the time to become a Dev Pioneer to Dev Enhancer and Dev Innovator.
          </h2>
          <p className="mt-4">It’s depend on contributor to decide their path:</p>
          <h3 className="mt-4 text-xl font-bold">Dev Enhancer:</h3>
          <p className="mt-4">
            Refine and elevate key features of DevDisplay by enhancing its UI with modern, responsive design, optimizing
            performance through faster load times and efficient resource management, and fine-tuning functionalities
            such as project showcases, user interactivity, and search capabilities. Transform DevDisplay into a seamless
            and engaging platform with intuitive navigation, collaborative tools, and personalized experiences, ensuring
            an exceptional user experience for all.
          </p>
          <ul className="mt-4 list-inside list-disc">
            <li>
              <strong>Modern, Responsive Design:</strong> Enhance the UI with a sleek, modern look that adapts
              seamlessly to all devices and screen sizes.
            </li>
            <li>
              <strong>Optimized Performance:</strong> Improve load times and resource management to deliver a faster and
              smoother browsing experience.
            </li>
            <li>
              <strong>Enhanced Functionalities:</strong> Fine-tune project showcase features for better visibility and
              engagement. Improve user interactivity for a more dynamic and engaging platform. Upgrade search
              capabilities for more accurate and efficient results.
            </li>
            <li>
              <strong>Intuitive Navigation:</strong> Redesign the navigation system to make it simpler and more
              user-friendly.
            </li>
            <li>
              <strong>Collaborative Tools:</strong> Introduce and enhance tools that facilitate collaboration among
              users and contributors.
            </li>
            <li>
              <strong>Personalized Experiences:</strong> Add features to tailor the platform experience based on user
              preferences and needs.
            </li>
            <li>
              <strong>Exceptional User Experience:</strong> Focus on creating a seamless, engaging, and satisfying
              journey for all users.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-bold">Dev Innovator:</h3>
          <p className="mt-4">
            Step into the spotlight as a creative force by introducing{' '}
            <strong>new and groundbreaking tech features</strong> to DevDisplay. This path isn’t just about coding—it’s
            about envisioning a future where DevDisplay evolves into a <strong>global tech hub</strong> that fulfills
            all tech needs for developers, contributors, and innovators alike.
          </p>
          <ul className="mt-4 list-inside list-disc">
            <li>
              <strong>Create Tech Solutions:</strong> Add features that address challenges faced by developers, such as
              interactive tools, tech roadmaps, or resource aggregators.
            </li>
            <li>
              <strong>Enrich the Ecosystem:</strong> Contribute to making DevDisplay a one-stop destination for
              collaboration, learning, and innovation in the tech community.
            </li>
            <li>
              <strong>Think Global:</strong> Develop tools that cater to a diverse audience, ensuring DevDisplay serves
              as a universal platform for tech enthusiasts worldwide.
            </li>
            <li>
              <strong>Be a Visionary:</strong> Your creativity will not only shape DevDisplay but also position you as a
              leader in transforming it into a globally recognized platform for technology and innovation.
            </li>
          </ul>
          <p className="mt-4">
            With every feature added, Dev Innovators play a pivotal role in crafting a future where{' '}
            <strong>DevDisplay becomes the ultimate tech hub</strong>, fulfilling the needs of developers and
            communities across the globe. You’ll leave a legacy of innovation that advances the open-source community.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">
            So, Let’s Unlock the Next Level of Open Source & Be a Part of global vision with DevDisplay!
          </h2>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Thanks!</h2>
          <h3 className="text-xl font-bold">Don’t Slide Now - It’s Optional To Read!</h3>
          <h3 className="text-xl font-bold">But Guaranteed to Ignite Your Fire!</h3>
          <p className="mt-4">
            🔥 This is your WAKE-UP CALL. The world isn’t waiting for you. Your future isn’t going to build itself.
            Every second you waste is a second someone else is turning their dreams into reality. This is your moment to
            break every limit, shatter every doubt, and build what the world has never seen.
          </p>
          <p className="mt-4">
            ⚡ GSoC isn’t just an open source program—it’s a movement. A global platform where your ideas can take
            flight, where collaboration can create breakthroughs, and where YOU can prove you’re unstoppable.
          </p>
          <p className="mt-4">
            🚨 Get out of bed. Stop making excuses. Your dreams won’t wait, and neither will success. The time is NOW.
            This is YOUR chance to show the world what you’re made of. Don’t just watch greatness happen—BECOME IT.
          </p>
          <p className="mt-4">
            🌍 DevDisplay is destined to be a GLOBAL TECH HUB, and it starts with YOU. Work harder than you ever thought
            possible. Build, collaborate, and bring your ideas to life. Because if you’re late, the opportunity will be
            gone—and regret doesn’t build empires. 💥
          </p>
          <p className="mt-4">
            🚀 Stand up. Start now. ✨ Together, let’s turn every impossible idea into reality. This is our time. This
            is your future. Let’s make it unforgettable. Let’s make history together. 🌟
          </p>
          <p className="mt-4">
            <strong>Your ideas matter. Your code matters. You matter.</strong>
          </p>
          <p className="mt-4">
            <strong>So, wake up, show up, and own this moment.</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contribution;
