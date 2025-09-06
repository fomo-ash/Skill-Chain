import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import all your page components
import LandingPage from './pages/Landing-Page/LandingPage';
import LoginPage from './pages/Home/LoginPage/LoginPage';
import SignUpPage from './pages/Home/SignUp/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import About from './pages/About/About'; // Re-added
import Contact from './pages/Contact/Contact'; // Re-added
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [user, setUser] = useState(null);

  // This function is passed to LoginPage and sets the user state upon successful API call
  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };
  
  return (
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication Routes */}
        <Route 
          path="/login" 
          // If a user is already logged in, redirect them from /login to the dashboard
          element={user ? <Navigate to="/dashboard" /> : <LoginPage handleLoginSuccess={handleLoginSuccess} />}
        />
        <Route 
          path="/signup" 
          // If a user is already logged in, redirect them from /signup to the dashboard
          element={user ? <Navigate to="/dashboard" /> : <SignUpPage />} 
        />

        {/* Protected Route */}
        <Route 
          path="/dashboard" 
          // If a user is not logged in, trying to access /dashboard will redirect them to /login
          element={user ? <DashboardPage user={user} /> : <Navigate to="/login" />} 
        />
        
        {/* Fallback Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
