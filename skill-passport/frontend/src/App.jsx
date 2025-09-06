import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/Landing-Page/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/Home/SignUpPage'; // Import the new page
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ email: 'test@user.com' });
  };
  
  return (

    <>
    
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
       
          <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-pink-500">
     
    </div>
    </>
   
  );
}

export default App;
