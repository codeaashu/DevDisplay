import React, { useState, useEffect } from 'react';
import questionsData from '../DB/questionsData.json';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('Basic');

  useEffect(() => {
    filterQuestionsByDifficulty();
  }, [difficulty]);

  const filterQuestionsByDifficulty = () => {
    const filteredQuestions = questionsData.filter((q) => q.difficulty === difficulty);
    // Shuffle questions and select first 10
    const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setSelectedOptions({});
    setQuizCompleted(false);
    setScore(0);
  };

  // Keep the rest of the code the same as before
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

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <header className="mb-6 w-full rounded-md bg-[#00a6fb] py-4 text-center">
        <h1 className="text-4xl font-bold">Quiz</h1>
        <p className="mt-2 text-sm">Test your coding knowledge with this quiz.</p>
      </header>

      <div className="mb-6 flex justify-center">
        <select value={difficulty} onChange={handleDifficultyChange} className="rounded-md bg-gray-700 p-2 text-white">
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

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
            onClick={filterQuestionsByDifficulty}
            className="mt-6 w-full rounded-lg bg-[#00a6fb] py-2 text-white hover:bg-[#0096e6]"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl rounded-lg bg-gray-800 p-6 shadow-lg">
          <div className="ml-[85%] text-lg md:ml-[85%]">
            {currentQuestion + 1} / {questions.length}
          </div>
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
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-500 disabled:bg-gray-700"
              >
                Previous
              </button>
            )}

            <button
              onClick={handleAnswerSubmit}
              disabled={!selectedOptions[currentQuestion]}
              className="ml-auto rounded-lg bg-[#00a6fb] px-6 py-2 text-white hover:bg-[#0096e6] disabled:bg-gray-600"
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
