import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/Landing-Page/LandingPage';
import LoginPage from './pages/Home/LoginPage/LoginPage';
import SignUpPage from './pages/Home/SignUp/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import About from './pages/About/About'; 
import Contact from './pages/Contact/Contact'; 
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };
  
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" /> : <LoginPage handleLoginSuccess={handleLoginSuccess} />}
        />
        <Route 
          path="/signup" 
          element={user ? <Navigate to="/dashboard" /> : <SignUpPage />} 
        />

        <Route 
          path="/dashboard" 
          element={user ? <DashboardPage user={user} /> : <Navigate to="/login" />} 
        />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
