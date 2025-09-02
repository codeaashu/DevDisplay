import React, { useEffect, useState } from 'react';
import { FaCalendar, FaLightbulb, FaThumbsUp, FaUser } from 'react-icons/fa';
import { FiThumbsUp, FiTrendingUp } from 'react-icons/fi';
import IdeaSubmissionForm from '../components/IdeaSubmissionForm';
import MonthlyWinner from './MonthlyWinner';

const IdeaSubmissionPage = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isFirstWeek, setIsFirstWeek] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [ideas, setIdeas] = useState([]);

  const handleVote = async (ideaId) => {
    try {
      const res = await fetch(`http://localhost:5000/devdisplay/v1/idea-submissions/${ideaId}/vote`, {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to vote');

      setIdeas((prevIdeas) => prevIdeas.map((idea) => (idea._id === ideaId ? { ...idea, votes: data.votes } : idea)));
    } catch (err) {
      alert(err.message);
    }
  };

  // Fetch existing ideas from backend
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await fetch('http://localhost:5000/devdisplay/v1/idea-submissions/');
        const data = await res.json();
        setIdeas(data);
      } catch (err) {
        console.log('Error fetching ideas:', err);
      }
    };
    fetchIdeas();
  }, []);

  // Timer logic
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const dayOfMonth = now.getDate();
      const inFirstWeek = dayOfMonth <= 7;
      setIsFirstWeek(inFirstWeek);

      let deadline;
      if (inFirstWeek) {
        deadline = new Date(now.getFullYear(), now.getMonth(), 7, 23, 59, 59);
      } else {
        deadline = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      }

      const diff = deadline - now;
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      {/* Navbar */}
      <nav className="pb-5">
        <div className="text-lg font-medium">Idea Submission</div>
      </nav>
      <hr className="border-[#0072ad]" />

      <MonthlyWinner />

      {/* Submission Section */}
      {isFirstWeek && (
        <div className="m-5 grid grid-cols-1 justify-center gap-3 rounded-md border-2 border-gray-800 p-5 text-center shadow-md shadow-blue-950">
          <div className="text-xl font-bold">Time Left for Submissions</div>
          <div className="text-gray-300">Submissions for this month close at the end of the first week!</div>
          <div className="m-4 flex w-full justify-center gap-5">
            {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
              <div key={unit} className="rounded-md border-2 border-[#0198e8] bg-gray-800 p-6">
                <div className="text-3xl font-bold text-[#0198e8]">{time[unit]}</div>
                <div className="text-sm text-gray-300">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <div
              className="flex w-1/3 cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-gray-500 bg-blue-600 p-3 text-sm"
              onClick={() => setShowForm(true)}
            >
              <FaLightbulb color="black" />
              <div className="text-blue-950">Submit your idea</div>
            </div>
          </div>
          {showForm && (
            <IdeaSubmissionForm
              onClose={() => setShowForm(false)}
              onSubmitSuccess={(newIdea) => setIdeas([newIdea, ...ideas])}
            />
          )}
        </div>
      )}

      {/* Voting Timer Section */}
      {!isFirstWeek && (
        <div className="m-5 grid grid-cols-1 justify-center gap-3 rounded-md border-2 border-[#0072ad] p-5 text-center">
          <div className="text-2xl font-bold">Voting Closes In!</div>
          <div className="text-gray-300">
            Vote for your favorite ideas before the month ends. The next submission round starts next month.
          </div>
          <div className="m-4 flex w-full justify-center gap-5">
            {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
              <div key={unit} className="rounded-md border-2 border-[#0198e8] bg-gray-800 p-6">
                <div className="text-3xl font-bold text-[#0198e8]">{time[unit]}</div>
                <div className="text-sm text-gray-300">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <br />

      <div className="grid items-start gap-4 lg:grid-cols-2">
        {/* Trending Now Section */}
        <div className="m-5 grid grid-cols-1 justify-center gap-3 rounded-md border-2 border-gray-800 p-5 shadow-md shadow-blue-950">
          <div className="flex items-center gap-3">
            <FiTrendingUp />
            <div className="text-lg font-bold">Trending Now</div>
          </div>

          {ideas
            .slice()
            .sort((a, b) => b.votes - a.votes)
            .slice(0, 5)
            .map((idea, index) => (
              <div key={idea._id} className="flex gap-3">
                <div className="text-lg text-blue-600">{index + 1}.</div>
                <div>
                  <div className="font-medium">{idea.title}</div>
                  <div className="flex items-center gap-2 text-center">
                    <FiThumbsUp color="gray" />
                    <div className="text-xs text-gray-400">{idea.votes} votes</div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Ideas Section */}
        <div className="m-5 grid grid-cols-1 justify-center gap-3 rounded-md border-2 border-gray-800 p-5 shadow-md shadow-blue-950">
          <div className="mb-3 text-lg font-bold">Ideas</div>

          <div className="grid grid-cols-1 gap-4">
            {ideas.map((idea) => (
              <div
                key={idea._id}
                className="m-5 grid grid-cols-1 justify-center gap-3 rounded-md border-2 border-gray-800 p-5 shadow-md shadow-blue-950"
              >
                {/* <div className="flex items-center gap-3">
                  <div className="m-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-600 text-xs">
                    <FaUser color="gray" />
                  </div>
                  <div>
                    <div>{idea.title || 'Anonymous'}</div>
                    <div className="text-xs text-gray-400">{new Date(idea.createdAt).toLocaleString()}</div>
                  </div>
                </div> */}
                <div className="text-lg font-bold">{idea.title}</div>
                <div className="text-gray-400">{idea.Description}</div>
                <div className="flex flex-wrap gap-2">
                  {idea.tags?.map((tag, idx) => (
                    <span key={idx} className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex justify-between">
                  <div className="flex items-center gap-3 p-1">
                    <FaCalendar color="gray" size="15" />
                    <div className="text-xs text-gray-500">{new Date(idea.createdAt).toLocaleDateString()}</div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaThumbsUp onClick={() => handleVote(idea._id)} color="gray" className="cursor-pointer" />
                    <div className="text-xs text-gray-500">{idea.votes || 0}</div>
                  </div>
                </div>
              </div>
            ))}
            {ideas.length === 0 && <div className="p-5 text-center text-gray-400">No ideas submitted yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaSubmissionPage;
