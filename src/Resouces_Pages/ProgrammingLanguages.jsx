import React from 'react';
import Navbar from './commonComponents/Navbar';
import Footer from './commonComponents/Footer';

const courses = [
  {
    title: 'JavaScript Basics',
    provider: 'freeCodeCamp',
    description: 'Learn the fundamentals of JavaScript, the programming language that powers the web.',
    url: 'https://www.freecodecamp.org/learn/javascript',
  },
  {
    title: 'Python for Everybody',
    provider: 'Coursera',
    description: 'An introductory Python course by Dr. Charles Severance, covering basic concepts and data structures.',
    url: 'https://www.coursera.org/specializations/python',
  },
  {
    title: 'Java Programming and Software Engineering Fundamentals',
    provider: 'Coursera',
    description: 'Master Java programming and software engineering skills with this Duke University course.',
    url: 'https://www.coursera.org/specializations/java-programming',
  },
  {
    title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    provider: 'Udemy',
    description: 'Comprehensive JavaScript course covering fundamentals, ES6+, and advanced topics.',
    url: 'https://www.udemy.com/course/the-complete-javascript-course/',
  },
  {
    title: 'Introduction to C++',
    provider: 'edX',
    description: 'Beginner-friendly course on C++ programming, ideal for aspiring software developers.',
    url: 'https://www.edx.org/course/introduction-to-cplusplus',
  },
  {
    title: 'Rust Programming For Beginners',
    provider: 'Udemy',
    description: 'Learn the basics of the Rust programming language with practical examples.',
    url: 'https://www.udemy.com/course/rust-programming-for-beginners/',
  },
  {
    title: 'SQL for Data Science',
    provider: 'Coursera',
    description: 'Master SQL, the standard language for relational database management systems.',
    url: 'https://www.coursera.org/learn/sql-for-data-science',
  },
  {
    title: 'Machine Learning',
    provider: 'Coursera',
    description: 'Learn machine learning concepts and algorithms from Stanford University professors.',
    url: 'https://www.coursera.org/learn/machine-learning',
  },
  {
    title: 'Web Development Bootcamp',
    provider: 'Udemy',
    description: 'Comprehensive course on web development covering HTML, CSS, JavaScript, and more.',
    url: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
  },
  {
    title: 'Data Structures and Algorithms',
    provider: 'edX',
    description: 'Learn the fundamentals of data structures and algorithms to solve complex problems.',
    url: 'https://www.edx.org/course/data-structures-and-algorithms',
  },
  {
    title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
    provider: 'Udemy',
    description: 'Master React and its ecosystem with this comprehensive course covering Next.js and Redux.',
    url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
  }
];

const ProgrammingLanguages = () => {
  return (
    <div className="background-wrapper min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="min-h-[70vh] p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#00a6fb]">Programming Language Courses</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="transform rounded-lg bg-gray-800 p-6 shadow-lg transition hover:scale-105 hover:bg-gray-700"
            >
              <h2 className="mb-4 text-xl font-semibold text-[#00a6fb]">{course.title}</h2>
              <p className="mb-4 text-sm text-gray-300">{course.description}</p>
              <a href={course.url} target="_blank" rel="noopener noreferrer" className="text-[#00a6fb] hover:underline">
                Visit {course.provider}
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer contact="Contact Support for Courses" />
    </div>
  );
};

export default ProgrammingLanguages;
