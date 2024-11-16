import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/404-error-with-man-thinking_24908-77772.jpg?t=st=1731744528~exp=1731748128~hmac=45deb8996535d67e7b7e02a75f5eeff8388ef4d4a955f7288900dba090980121&w=740')`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div className="space-y-8 text-center">
        <h1 className="animate__animated animate__fadeInUp text-6xl font-extrabold text-white drop-shadow-2xl">
          Oops! Page Not Found
        </h1>

        <button
          onClick={handleHomeClick}
          className="transform rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-8 py-4 text-xl font-semibold text-white shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
