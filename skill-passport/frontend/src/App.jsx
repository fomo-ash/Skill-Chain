import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'; // Import the new page
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // This state simulates if a user is logged in.
  // In a real app, this would be determined by a token from a server.
  const [user, setUser] = useState(null);

  // This function simulates a successful login.
  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you would verify credentials with a backend.
    // For now, we'll just create a dummy user object.
    setUser({ email: 'test@user.com' });
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* If the user is logged in, /login redirects to dashboard. Otherwise, show login page. */}
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" /> : <LoginPage handleLogin={handleLogin} />}
        />
        
        {/* Show sign-up page */}
        <Route path="/signup" element={<SignUpPage />} />

        {/* This is a protected route. If no user, redirect to login. */}
        <Route 
          path="/dashboard" 
          element={user ? <DashboardPage user={user} /> : <Navigate to="/login" />} 
        />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
