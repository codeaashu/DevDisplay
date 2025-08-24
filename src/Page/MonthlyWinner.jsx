import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MonthlyWinner = () => {
  const [winnerData, setWinnerData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchWinner = async () => {
      try {
        const res = await fetch('http://localhost:5000/devdisplay/v1/winners/latest');
        const data = await res.json();
        console.log('Fetched Winner Data:', data);
        setWinnerData(data);
      } catch (err) {
        console.log('Error fetching monthly winner:', err);
      }
    };
    fetchWinner();
  }, []);

  // If no winner yet
  if (!winnerData || !winnerData.ideaId) {
    return (
      <div className="m-5 rounded-md border p-5 text-gray-400">Winner will be announced at the end of the month.</div>
    );
  }

  const { _id, title, description, votes } = winnerData.ideaId;
  const openCollabPage = () => {
    window.open(`/collaboration/${_id}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={openCollabPage}
      target="blank"
      className="m-5 cursor-pointer rounded-md border-2 border-green-700 p-5 shadow-md shadow-green-900"
    >
      <h2 className="text-xl font-bold text-green-600">🏆 Monthly Winner</h2>
      <div className="mt-3">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-gray-500">{description}</div>
        <div className="text-sm text-gray-400">Votes: {votes}</div>
      </div>
    </div>
  );
};

export default MonthlyWinner;
