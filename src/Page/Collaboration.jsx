import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RoleAssignment from '../components/RoleAssignment';

const API_BASE = 'http://localhost:5000/devdisplay/v1';
const Collaboration = () => {
  const { id } = useParams();
  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/idea-submissions/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || 'Failed to load idea');
        if (mounted) setIdea(data);
      } catch (error) {
        if (mounted) setErr(error.message || 'Error loading idea');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 p-6 text-gray-100">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-1/3 rounded bg-gray-800" />
          <div className="h-5 w-2/3 rounded bg-gray-800" />
          <div className="h-64 w-full rounded bg-gray-900" />
        </div>
      </div>
    );
  }

  if (err || !idea) {
    return (
      <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
        <div className="rounded-xl border border-red-700 bg-gray-900 p-5 text-red-300">{err || 'Idea not found.'}</div>
        <Link to="/" className="mt-6 inline-block text-blue-400 underline">
          Go back
        </Link>
      </div>
    );
  }

  const tags = Array.isArray(idea.tags) ? idea.tags : [];
  const created = idea.createdAt ? new Date(idea.createdAt).toLocaleDateString() : '';
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="w-1/2 rounded-full border border-gray-200 p-5 text-2xl text-[#0088cc] lg:w-1/3">
          Brightest Idea to work on{' '}
        </h1>
        <div className="flex gap-3">
          <Link to="/ideasubmission" className="rounded-lg border border-gray-700 px-4 py-2 text-sm hover:bg-gray-800">
            ← Back
          </Link>
          <button
            onClick={() => window.close()}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700"
          >
            Close Tab
          </button>
        </div>
      </div>
      {/* Header */}
      <div className="mb-6 grid grid-cols-1 gap-2 p-5">
        <h2 className="text-3xl font-bold text-green-500">{idea.title}</h2>
        <p className="mt-2 max-w-3xl text-gray-300">{idea.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span key={i} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Created: {created} • Votes: {idea.votes ?? 0}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Task Board */}
        <div className="col-span-2 rounded-2xl bg-gray-800 p-5 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">📋 Task Board</h2>
          <div className="grid grid-cols-3 gap-4">
            {['To Do', 'In Progress', 'Done'].map((col) => (
              <div key={col} className="rounded-xl bg-gray-700 p-3">
                <h3 className="mb-2 font-medium text-green-400">{col}</h3>
                <div className="space-y-2">
                  <div className="rounded-md bg-gray-600 p-2">Design Wireframe</div>
                  <div className="rounded-md bg-gray-600 p-2">API Integration</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roles Section */}
        <div className="rounded-2xl bg-gray-800 p-5 shadow-lg">
          <RoleAssignment />
        </div>

        {/* Chatroom */}
        <div className="col-span-2 rounded-2xl bg-gray-800 p-5 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">💬 Community Chat</h2>
          <div className="h-40 space-y-2 overflow-y-auto rounded-md bg-gray-700 p-3 text-sm">
            <div>
              <span className="text-green-400">Rupali:</span> Let’s start with UI.
            </div>
            <div>
              <span className="text-blue-400">Dev1:</span> Sure! I’ll handle backend setup.
            </div>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="mt-3 w-full rounded-md bg-gray-600 p-2 text-gray-200 focus:outline-none"
          />
        </div>

        {/* Progress Tracker */}
        <div className="rounded-2xl bg-gray-800 p-5 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">📊 Progress Tracker</h2>
          <div className="h-3 w-full rounded-full bg-gray-700">
            <div className="h-3 rounded-full bg-green-500" style={{ width: '45%' }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-400">45% Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
