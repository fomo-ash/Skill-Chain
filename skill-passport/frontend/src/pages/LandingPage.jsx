import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-sans">
      <header className="p-4 sm:p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
          <span role="img" aria-label="passport">🪪</span> Skill Passport
        </h1>
        <nav className="flex items-center space-x-2 sm:space-x-4">
          <Link 
            to="/login" 
            className="bg-transparent hover:bg-gray-800 text-indigo-400 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded-md transition-colors text-sm sm:text-base"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-colors text-sm sm:text-base"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            The Future of Verifiable Skills
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Stop letting your hackathon projects disappear. Turn your contributions into permanent, verifiable credentials on the blockchain that recruiters and universities can trust.
          </p>
          <div className="animate-fade-in-up animation-delay-300">
            <Link 
              to="/login" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
            >
              Create Your Passport
            </Link>
          </div>
        </div>
      </main>

      <footer className="p-4 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Skill Passport. Built for the future of work.</p>
      </footer>
    </div>
  );
};

export default LandingPage;