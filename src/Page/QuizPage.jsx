import React, { useState, useEffect } from 'react';

const questionsData = [
  {
    question: 'What is React?',
    options: ['A library for building UI', 'A database', 'A backend framework', 'A CSS preprocessor'],
    answer: 'A library for building UI',
  },
  {
    question: 'What is JSX?',
    options: ['A JavaScript syntax extension', 'A database query language', 'A CSS framework', 'A backend API'],
    answer: 'A JavaScript syntax extension',
  },
  {
    question: 'Which hook is used for side effects in React?',
    options: ['useState', 'useContext', 'useEffect', 'useRef'],
    answer: 'useEffect',
  },
  {
    question: 'Which of the following is a state management library for React?',
    options: ['Bootstrap', 'Redux', 'Express', 'MongoDB'],
    answer: 'Redux',
  },
  {
    question: 'What does useState return?',
    options: ['A function', 'An array with two values', 'A single object', 'A number'],
    answer: 'An array with two values',
  },
  {
    question: 'Which company developed React?',
    options: ['Google', 'Microsoft', 'Apple', 'Facebook'],
    answer: 'Facebook',
  },
  {
    question: 'What is the purpose of useRef?',
    options: [
      'To manage state',
      'To fetch data',
      'To define a function',
      'To store a mutable value that persists across renders',
    ],
    answer: 'To store a mutable value that persists across renders',
  },
  {
    question: 'Which method is used to update the state in a class component?',
    options: ['updateState', 'setState', 'changeState', 'modifyState'],
    answer: 'setState',
  },
  {
    question: 'What is the virtual DOM?',
    options: ['A JavaScript function', 'A lightweight copy of the real DOM', 'A new HTML version', 'A database model'],
    answer: 'A lightweight copy of the real DOM',
  },
  {
    question: 'What does useContext do?',
    options: ['Creates a new state variable', 'Fetches data', 'Adds CSS styling', 'Accesses the value of a context'],
    answer: 'Accesses the value of a context',
  },
];

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffledQuestions = [...questionsData]
      .map((q) => ({
        ...q,
        options: q.options.sort(() => Math.random() - 0.5),
      }))
      .sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setSelectedOptions({});
    setQuizCompleted(false);
    setScore(0);
  };

  const handleAnswerSubmit = () => {
    if (selectedOptions[currentQuestion] === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <header className="mb-6 w-full rounded-md bg-[#00a6fb] py-4 text-center">
        <h1 className="text-4xl font-bold">Quiz</h1>
        <p className="mt-2 text-sm">Test your coding knowledge with this quiz.</p>
      </header>
      {quizCompleted ? (
        <div className="mx-auto max-w-2xl rounded-lg bg-gray-800 p-6 shadow-lg">
          <h2 className="text-center text-2xl font-bold">Quiz Completed!</h2>
          <p className="mt-4 text-center text-lg">
            Your Score: {score}/{questions.length}
          </p>
          <div className="mt-6">
            {questions.map((q, index) => (
              <div key={index} className="mb-4 rounded-lg bg-gray-700 p-4">
                <h3 className="font-semibold">{q.question}</h3>
                {q.options.map((option, i) => (
                  <p
                    key={i}
                    className={`mt-1 rounded-md border p-2 ${
                      option === q.answer
                        ? 'bg-green-500 text-white'
                        : selectedOptions[index] === option
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-600'
                    }`}
                  >
                    {option}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <button
            onClick={shuffleQuestions}
            className="mt-6 w-full rounded-lg bg-[#00a6fb] py-2 text-white hover:bg-[#0096e6]"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl rounded-lg bg-gray-800 p-6 shadow-lg">
          <h2 className="text-xl font-semibold">{questions[currentQuestion]?.question}</h2>
          <div className="mt-4 space-y-3">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOptions({ ...selectedOptions, [currentQuestion]: option })}
                className={`w-full rounded-lg border border-gray-700 p-3 text-left transition-all duration-300 hover:bg-[#00a6fb] hover:text-white ${
                  selectedOptions[currentQuestion] === option ? 'bg-[#00a6fb] text-white' : 'bg-gray-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-500 disabled:bg-gray-700"
            >
              Previous
            </button>
            <button
              onClick={handleAnswerSubmit}
              disabled={!selectedOptions[currentQuestion]}
              className="rounded-lg bg-[#00a6fb] px-6 py-2 text-white hover:bg-[#0096e6] disabled:bg-gray-600"
            >
              {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
