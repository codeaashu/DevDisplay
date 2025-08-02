import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this internship opportunity!',
        text: 'I found this internship that might interest you.',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

const Internship1 = () => {
  const cardUrl = 'https://www.devdisplay.org/Internship#WOODESY-Mobile-App-Development';
  return (
    <div id="WOODESY-Mobile-App-Development" className="group relative mx-auto w-full max-w-[30rem]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-teal-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                <img src="/assets/LocalCompany/WOODESY.png" alt="Custom Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mobile App Development</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-slate-400">WOODESY</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
                  {/* <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-400">4.9</span>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
              </svg>
              {/* <span className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500">
                🔥
              </span> */}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-emerald-500" />
              Ends on 6 May
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Remote
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              3 Months
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
              ₹ 3,500 /month
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Are you a tech-savvy individual with a passion for mobile app development? Join our team at WOODSEY as a
                Mobile App Development Intern and gain hands-on experience in creating cutting-edge mobile applications.
                We are looking for someone skilled in Flutter, REST API, iOS, Android, and Firebase to help us build
                innovative solutions for our clients.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href="https://internshala.com/internship/detail/work-from-home-mobile-app-development-internship-at-woodesy1743918991?utm_source=cp_link&referral=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
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

const Internship2 = () => {
  const cardUrl = 'https://www.devdisplay.org/Internship#Vijetha-Softwares-Front-End-Developer';
  return (
    <div id="Vijetha-Softwares-Front-End-Developer" className="group relative mx-auto w-full max-w-[30rem]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-teal-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                <img src="/assets/LocalCompany/Vijetha Softwares Pvt.Ltd.jpg" alt="Custom Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Front End Developer Internship</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-slate-400">Vijetha Softwares Pvt.Ltd</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
                  {/* <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-400">4.9</span>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
              </svg>
              {/* <span className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500">
                🔥
              </span> */}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-emerald-500" />
              Ends on 20 April
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Onsite
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Full-time
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Proficiency in HTML, CSS, JavaScript, React.js and TailwindCSS.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Excellent communication and collaboration skills.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">Experience with responsive design principles.</p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href="https://unstop.com/internships/front-end-developer-internship-vijetha-softwares-pvtltd-1442249?lb=fAzXUaUr&utm_medium=Share&utm_source=shortUrl"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
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

const Internship3 = () => {
  const cardUrl = 'https://www.devdisplay.org/Internship#Webfuture-Front-End-Development';
  return (
    <div id="Webfuture-Front-End-Development" className="group relative mx-auto w-full max-w-[30rem]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-teal-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                <img src="/assets/LocalCompany/Webfuture.jpg" alt="Custom Icon" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Front End Development Internship</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-slate-400">Webfuture</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
                  {/* <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-400">4.9</span>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
              </svg>
              {/* <span className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500">
                🔥
              </span> */}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-emerald-500" />
              Ends on 23 April
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Onsite
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Full-time
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">Proficiency in HTML, CSS, and JavaScript.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Experience with front-end frameworks such as React, Angular, or Vue.js - preferred.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Job Offer upon successful completion of the internship.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href="https://unstop.com/internships/front-end-development-internship-webfuturein-1449077?lb=fAzXUaUr&utm_medium=Share&utm_source=shortUrl"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
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

const InternshipList = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 px-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Internship1 />
        <Internship2 />
        <Internship3 />
      </div>
    </>
  );
};

export default InternshipList;
