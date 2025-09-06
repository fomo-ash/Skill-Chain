import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/Landing-Page/LandingPage';
import LoginPage from './pages/Home/LoginPage/LoginPage';
import SignUpPage from './pages/Home/SignUp/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';


function App() {
  const [user, setUser] = useState(null);

  // This function is passed to LoginPage and sets the user state upon successful API call
  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };
  
  return (

    <>
    
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/contact" element={<Contact />} />
        
        <Route path="/about" element={<About />} /> 
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

       
          <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-pink-500">
     
    </div>
    </>
   
  );
}

export default App;
