import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/Home/LoginPage/LoginPage';
import SignUpPage from './pages/Home/SignUp/SignUpPage'; // Import the new page
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ email: 'test@user.com' });
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route 
          path="/login" 
          element={user ? <Navigate to="/dashboard" /> : <LoginPage handleLogin={handleLogin} />}
        />
        
        <Route path="/signup" element={<SignUpPage />} />

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
