import React from 'react';

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this freelance opportunity!',
        text: 'I found this interesting freelance project that might interest you.',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

const FreelanceCard = () => {
  const cardUrl = 'https://www.devdisplay.org/Freelance#ProjectX';
  return (
    <div id="FreelanceCard" className="group relative mx-auto w-full max-w-[30rem]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2m3 0h-12a2 2 0 00-2 2v2h16V8a2 2 0 00-2-2zm0 4H3v6a2 2 0 002 2h14a2 2 0 002-2v-6z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-white">Build a Portfolio Website</h3>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Looking for a skilled web developer to create a responsive portfolio website for a creative agency.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              4 weeks
            </span>

            <span className="inline-flex items-center gap-1 rounded-lg bg-green-500/10 px-3 py-1 text-sm text-green-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              $500 - $1000
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Part-time
            </span>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-white">Required Skills:</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-400">
              <li>Proficiency in HTML, CSS, and JavaScript</li>
              <li>Experience with React or Vue.js</li>
              <li>Knowledge of responsive design principles</li>
              <li>Basic understanding of SEO</li>
            </ul>
          </div>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.devdisplay.org/Freelance#ProjectX"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  View Details
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
            <button
              onClick={() => shareContent(cardUrl)}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const FreelanceCard2 = () => {
//   const freelanceUrl = 'https://www.devdisplay.org/Freelance#FreelanceCard';

//   return (
//     <div id="FreelanceCard" className="group relative mx-auto w-full max-w-[30rem]">
//       <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
//         {/* Glow effects */}
//         <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/0 blur-2xl group-hover:scale-150 group-hover:opacity-70 transition-all duration-500" />
//         <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl group-hover:scale-150 group-hover:opacity-70 transition-all duration-500" />

//         {/* Card content */}
//         <div className="relative p-6">
//           <div className="flex items-start justify-between">
//             <div className="flex gap-4">
//               <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 relative">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300" />
//                 <img src="/assets/Icons/freelance.png" alt="Freelance" className="h-10 w-10" />
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-white">Freelance Web Developer</h3>
//                 <p className="text-sm text-slate-400 mt-1">Open for freelance web projects, brand design, and app UI/UX</p>
//               </div>
//             </div>
//             <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 transition-colors">
//               <svg className="h-5 w-5 text-slate-400 group-hover/save:text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
//               </svg>
//             </button>
//           </div>

//           {/* Skills */}
//           <div className="mt-6 flex flex-wrap gap-2">
//             {['React.js', 'TailwindCSS', 'Figma', 'Webflow', 'Framer'].map((skill, idx) => (
//               <span key={idx} className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
//                 <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 {skill}
//               </span>
//             ))}
//           </div>

//           {/* Highlights */}
//           <div className="mt-6 space-y-4">
//             <div className="flex items-start gap-3 text-slate-400 text-sm">
//               <div className="h-6 w-6 rounded-full bg-pink-500/10 flex items-center justify-center">
//                 <svg className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               3+ years of experience with 50+ deployed projects across web & mobile.
//             </div>
//             <div className="flex items-start gap-3 text-slate-400 text-sm">
//               <div className="h-6 w-6 rounded-full bg-pink-500/10 flex items-center justify-center">
//                 <svg className="h-4 w-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               Available for hourly or fixed-price freelance gigs — custom website builds or UI/UX revamps.
//             </div>
//           </div>

//           {/* CTA & Share */}
//           <div className="mt-8 flex gap-3">
//             <a
//               href="https://www.devdisplay.org/contact"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 p-px font-semibold text-white"
//             >
//               <div className="relative rounded-xl bg-slate-950 px-4 py-3 group-hover/btn:bg-opacity-0 transition-all duration-300">
//                 <span className="relative flex items-center justify-center gap-2">
//                   Hire Now
//                   <svg className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </span>
//               </div>
//             </a>
//             <button
//               onClick={() => shareContent(freelanceUrl)}
//               className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 text-white hover:bg-slate-800 transition-colors"
//             >
//               Share
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const FreelancingList = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 px-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* <FreelanceCard /> */}
      </div>
    </>
  );
};

export default FreelancingList;
