import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [user, setUser] = useState(null);

  // This function is passed to LoginPage and sets the user state upon successful API call
  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" /> : <LoginPage handleLoginSuccess={handleLoginSuccess} />}
        />
        
        <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <SignUpPage />} />

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
