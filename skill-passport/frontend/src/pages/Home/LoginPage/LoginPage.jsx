import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ handleLogin }) => {
  return (
    // <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
    //   <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
    //     <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
    //     <form onSubmit={handleLogin}>
    //       <div className="mb-4">
    //         <label className="block text-gray-400 mb-2" htmlFor="email">Email Address</label>
    //         <input 
    //           type="email" 
    //           id="email"
    //           className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //           placeholder="you@example.com"
    //           defaultValue="test@user.com" 
    //           required
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
    //         <input 
    //           type="password" 
    //           id="password"
    //           className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //           placeholder="••••••••"
    //           defaultValue="password"
    //           required
    //         />
    //       </div>
    //       <button 
    //         type="submit"
    //         className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-lg"
    //       >
    //         Log In
    //       </button>
    //     </form>
    //     <p className="text-center text-gray-400 mt-6">
    //       Don't have an account? <Link to="/signup" className="text-indigo-400 hover:underline">Sign Up</Link>
    //     </p>
    //   </div>
    // </div>

    <div className='sign-up'>
      <div className="right-side">
        <h1>Welcome Back</h1>
        <p>Login and continue growing!</p>
        <div className="inputs">
          <input className='input' type='text' placeholder='Email'/>
          <input className='input' type='text' placeholder='Password'/>
        </div>
        <div className="signup-btn">
        <button>Login</button>
        </div>
        <div className="login">
          <p>Already have an account ?</p>
          <Link 
            to="/login" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white no-underline font-bold py-2 px-4 rounded-md transition-colors text-sm sm:text-base" 
          >
            Log In
          </Link>

        </div>
      </div>
      <div className="left-side">
        <img src='/Frame 120.png'></img>
        <h1>Welcome to the Future</h1>
        <p>The future begins with you. Join us today to unlock your vision.</p>
      </div>
    </div>
  );
};
export default LoginPage;