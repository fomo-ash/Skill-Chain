import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// The main App component containing all the page's content and logic.
const App = () => {
    const navigate = useNavigate();


    return (
        <div className="main-container">
            <style jsx="true">{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

                .main-container {
                    font-family: 'Inter', sans-serif;
                    background: linear-gradient(135deg, #1f1f3a, #1a1a2e);
                    color: #e0e0e0;
                    min-height: 200vh;
                    padding-top: 0rem;
                }

                .glow-effect {
                    box-shadow: 0 0 15px rgba(100, 255, 218, 0.4), 0 0 20px rgba(100, 255, 218, 0.2);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border-radius: 0.75rem;
                }
                .glow-effect:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(100, 255, 218, 0.6), 0 0 30px rgba(100, 255, 218, 0.4);
                }

                .btn {
                    padding: 0.75rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                .btn:hover {
                    transform: scale(1.05);
                }

                /* Header Styles */
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 1rem 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 1000;
                    background: black;
                }
                .header .logo {
                    display: flex;
                    align-items: center;
                }
                .header .logo-svg {
                    height: 2rem;
                    width: 2rem;
                    color: #4a90e2;
                }
                .header .logo-text {
                    margin-left: 0.5rem;
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: white;
                }
                .header .nav {
                    display: none;
                    gap: 2rem;
                }
                .header .nav a {
                    color: #d1d5db;
                    /* Added padding and border-radius for a better look */
                    padding: 8px 16px;
                    border-radius: 6px;
                    text-decoration: none;
                    /* Updated transition to include background-color */
                    transition: color 0.3s ease, background-color 0.3s ease;
                }
                .header .nav a:hover {
                    /* Kept the color change and added a background color */
                    color: #ffffff;
                    background-color: #4a90e2;
                }
                .header .join-btn {
                    background-color: #4a90e2;
                    color: white;
                }
                .header .join-btn:hover {
                    background-color: #5a9ceb;
                }
                .header .menu-btn {
                    display: block;
                    color: white;
                    height: 1.5rem;
                    width: 1.5rem;
                }

                /* Main Content Styles */
                .main-content {
                    padding: 0 1rem;
                }
                @media (min-width: 768px) {
                    .main-content {
                        padding: 0 3rem;
                    }
                    .header .nav {
                        display: flex;
                    }
                    .header .join-btn {
                        display: block;
                    }
                    .header .menu-btn {
                        display: none;
                    }
                }
                @media (min-width: 1024px) {
                    .main-content {
                        padding: 0 4rem;
                    }
                }

                /* Hero Section Styles */
                .hero-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    min-height: 100vh;
                    padding-top: 1;
                }
                @media (min-width: 1024px) {
                    .hero-section {
                        flex-direction: row;
                    }
                }
                .hero-text-container {
                    padding: 1.5rem 2.5rem 2.5rem 2.5rem;
                }
                @media (min-width: 768px) {
                    .hero-text-container {
                        padding: 2.5rem;
                    }
                }
                @media (min-width: 1024px) {
                    .hero-text-container {
                        padding-right: 5rem;
                        width: 50%;
                    }
                }
                .hero-title {
                    font-size: 2.25rem;
                    font-weight: 800;
                    color: white;
                    line-height: 1.25;
                }
                @media (min-width: 768px) {
                    .hero-title {
                        font-size: 3.75rem;
                    }
                }
                .hero-subtitle {
                    margin-top: 1rem;
                    font-size: 1.125rem;
                    color: #d1d5db;
                }
                @media (min-width: 768px) {
                    .hero-subtitle {
                        font-size: 1.25rem;
                    }
                }
                .hero-buttons {
                    margin-top: 2rem;
                    display: flex;
                    gap: 1rem;
                }
                .hero-buttons .login-btn {
                    background-color: white;
                    color: #1f2937;
                }
                .hero-buttons .login-btn:hover {
                    background-color: #f3f4f6;
                }
                .hero-buttons .signup-btn {
                    background-color: transparent;
                    border: 2px solid white;
                    color: white;
                }
                .hero-buttons .signup-btn:hover {
                    background-color: white;
                    color: #1f2937;
                }
                .hero-image-container {
                    padding: 1.5rem;
                    margin-top: 2.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    animation: slideFromRight 1s ease-in-out;
                }
                @media (min-width: 1024px) {
                    .hero-image-container {
                        margin-top: 0;
                        width: 50%;
                    }
                }

                @keyframes slideFromRight {
                    from {
                        transform: translateX(200px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .hero-image-container .image-wrapper {
                    width: 100%;
                    max-width: 38rem;
                    background-color: #111827;
                    padding: 2rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .svg-flow-diagram {
                  max-width: 400px;
                  width: 100%;
                  height: auto;
                }

                /* How It Works Section */
                .how-it-works-section {
                    margin-top: 5rem;
                }
                .section-title {
                    font-size: 1.875rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 2.5rem;
                    color: white;
                }
                @media (min-width: 768px) {
                    .section-title {
                        font-size: 2.25rem;
                    }
                }
                .grid-container {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
                @media (min-width: 768px) {
                    .grid-container {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (min-width: 1024px) {
                    .grid-container {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                
                /* New animation for diagonal fade-in */
                @keyframes slideInDiagonal {
                    from {
                        transform: translate(-50px, 50px);
                        opacity: 0;
                    }
                    to {
                        transform: translate(0, 0);
                        opacity: 1;
                    }
                }

                .animated-card {
                    animation: slideInDiagonal 0.6s ease-out forwards;
                    opacity: 0;
                }

                .how-it-works-card-1 { animation-delay: 0.2s; }
                .how-it-works-card-2 { animation-delay: 0.4s; }
                .how-it-works-card-3 { animation-delay: 0.6s; }
                .how-it-works-card-4 { animation-delay: 0.8s; }

                .features-card-1 { animation-delay: 1s; }
                .features-card-2 { animation-delay: 1.2s; }
                .features-card-3 { animation-delay: 1.4s; }


                .card {
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    border: 1px solid #374151;
                    background-color: #2a2a4e;
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }
                .card-icon {
                    width: 2.5rem;
                    height: 2.5rem;
                    color: #64ffda;
                    flex-shrink: 0;
                }
                .card-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: white;
                }
                .card-text {
                    margin-top: 0.5rem;
                    color: #d1d5db;
                }
                .text-center-card {
                    padding: 2rem;
                    border-radius: 0.75rem;
                    border: 1px solid #374151;
                    background-color: #2a2a4e;
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .text-center-card .card-icon {
                    width: 4rem;
                    height: 4rem;
                    margin: 0 auto 1rem;
                    color: #64ffda;
                }
                .text-center-card .card-title {
                    font-size: 1.5rem;
                    color: white;
                }

                /* Call to Action Styles */
                .cta-container {
                    text-align: center;
                    margin-top: 3rem;
                }

                /* Footer Styles */
                .footer {
                    padding: 2rem;
                    border-top: 1px solid #374151;
                    background-color: #141426;
                    color: #9ca3af;
                }
                .footer-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                }
                @media (min-width: 768px) {
                    .footer-container {
                        flex-direction: row;
                    }
                }
                .footer-logo-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                @media (min-width: 768px) {
                    .footer-logo-container {
                        flex-direction: row;
                        margin-right: 1.5rem;
                    }
                }
                .footer-logo {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                @media (min-width: 768px) {
                    .footer-logo {
                        margin-bottom: 0;
                        margin-right: 1.5rem;
                    }
                }
                .footer-logo-svg {
                    height: 1.5rem;
                    width: 1.5rem;
                    color: #4a90e2;
                }
                .footer-logo-text {
                    margin-left: 0.5rem;
                    font-weight: 700;
                    color: white;
                }
                .footer-copyright {
                    font-size: 0.875rem;
                }
                .footer-social-links {
                    margin-top: 1.5rem;
                    display: flex;
                    gap: 1.5rem;
                }
                @media (min-width: 768px) {
                    .footer-social-links {
                        margin-top: 0;
                    }
                }
                .footer-social-links a {
                    color: #9ca3af;
                    transition: color 0.3s ease;
                }
                .footer-social-links a:hover {
                    color: #4a90e2;
                }
            `}</style>
            
            <header className="header">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo">
                        <svg className="logo-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.485 9.176 4.675 7.5 4.5 5.824 4.325 4.168 5.485 3 6.253M12 6.253c1.168-.768 2.824-1.801 4.5-1.75 1.676.051 3.332.617 4.5 1.75M12 6.253a6 6 0 00-4.5 1.75 6 6 0 00-1.5 4.5 6 6 0 006 6 6 6 0 006-6 6 6 0 00-1.5-4.5" />
                        </svg>
                        <span className="logo-text">SkillChain</span>
                    </div>
                </Link>
                <nav className="nav">
                    <Link to="/signup">Sign-Up</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    
                </nav>
                <button className="btn join-btn" onClick={() => navigate('/signup')}>Join Now</button>
                <button className="menu-btn">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </header>

            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-text-container">
                        <h1 className="hero-title">Your Skills, Verified Forever</h1>
                        <p className="hero-subtitle">A blockchain-powered skill passport that makes your achievements trusted, portable, and tamper-proof.</p>
                        <div className="hero-buttons">
                            <button className="btn login-btn" onClick={() => navigate('/login')}>Login</button>
                            <button className="btn signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
                        </div>
                    </div>
                    <div className="hero-image-container">
                        <div className="image-wrapper glow-effect">
                            <svg className="svg-flow-diagram" viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg">
                                {/* User Icon (left) */}
                                <g transform="translate(50, 75)">
                                    <circle cx="0" cy="0" r="30" fill="#4a90e2" />
                                    <path d="M0 30 L0 50 M-15 40 L15 40" stroke="white" strokeWidth="4" />
                                </g>
                                <text x="50" y="30" textAnchor="middle" fill="#64ffda" fontSize="16" fontWeight="bold">USER</text>

                                {/* Arrow 1 */}
                                <line x1="85" y1="75" x2="150" y2="75" stroke="#64ffda" strokeWidth="2" strokeDasharray="5 5" />
                                <path d="M145 70 L150 75 L145 80" fill="#64ffda" />

                                {/* Hackathon Icon (middle) */}
                                <g transform="translate(200, 75)">
                                    <rect x="-30" y="-30" width="60" height="40" fill="#2a2a4e" stroke="#64ffda" strokeWidth="2" />
                                    <line x1="-25" y1="-20" x2="25" y2="-20" stroke="#64ffda" strokeWidth="2" />
                                    <path d="M-15 -10 L-15 0 M-10 -10 L-10 0 M-5 -10 L-5 0" stroke="#64ffda" strokeWidth="2" />
                                    <text x="0" y="25" textAnchor="middle" fill="#64ffda" fontSize="10">HACKATHON</text>
                                </g>

                                {/* Arrow 2 */}
                                <line x1="235" y1="75" x2="300" y2="75" stroke="#64ffda" strokeWidth="2" strokeDasharray="5 5" />
                                <path d="M295 70 L300 75 L295 80" fill="#64ffda" />
                                
                                {/* NFT Card (right) */}
                                <g transform="translate(365, 75)">
                                    <rect x="-40" y="-45" width="80" height="90" fill="#2a2a4e" rx="5" ry="5" stroke="#4a90e2" strokeWidth="2" />
                                    <rect x="-30" y="-35" width="60" height="20" fill="url(#cardGradient)" rx="2" ry="2" />
                                    <text x="0" y="-15" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Name</text>
                                    <text x="0" y="5" textAnchor="middle" fill="#64ffda" fontSize="10" fontWeight="bold">ROLE</text>
                                    <text x="0" y="25" textAnchor="middle" fill="#d1d5db" fontSize="8">Contract: 0x123...</text>
                                </g>
                            </svg>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="how-it-works-section">
                    <h2 className="section-title">How It Works</h2>
                    <div className="grid-container">
                        <div className="card animated-card how-it-works-card-1">
                            <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <div>
                                <h3 className="card-title">Create Your Profile</h3>
                                <p className="card-text">Sign up and add skills/certificates to your secure digital passport.</p>
                            </div>
                        </div>
                        <div className="card animated-card how-it-works-card-2">
                            <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.956a11.955 11.955 0 01-9.618 9.028M9 12l2 2 4-4m-4.016-5.618a11.955 11.955 0 00-9.028 9.618A11.955 11.955 0 002.956 12a11.955 11.955 0 009.028 9.618" />
                            </svg>
                            <div>
                                <h3 className="card-title">Get Verified</h3>
                                <p className="card-text">Credentials are minted as tamper-proof tokens on the blockchain for permanent verification.</p>
                            </div>
                        </div>
                        <div className="card animated-card how-it-works-card-3">
                            <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8L11 20M9 3H5a2 2 0 00-2 2v4a2 2 0 002 2h4l-4 4 4 4v-4l4 4 4-4v-4z" />
                            </svg>
                            <div>
                                <h3 className="card-title">Share & Grow</h3>
                                <p className="card-text">Share your skills with employers and institutions instantly with a single link.</p>
                            </div>
                        </div>
                        <div className="card animated-card how-it-works-card-4">
                            <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            <div>
                                <h3 className="card-title">Expand Your Network</h3>
                                <p className="card-text">Connect with other professionals and explore new career opportunities with ease.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="how-it-works-section">
                    <h2 className="section-title">Key Features</h2>
                    <div className="grid-container">
                        {/* Card 1 */}
                        <div className="text-center-card glow-effect animated-card features-card-1">
                            <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.956a11.955 11.955 0 01-9.618 9.028" />
                            </svg>
                            <h3 className="card-title">Instant Verification</h3>
                            <p className="card-text">Employers and institutions can validate authenticity within seconds with a quick scan.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="text-center-card glow-effect animated-card features-card-2">
                            <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6-6h-2a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-6 0V6a4 4 0 014-4h.5a4 4 0 014 4v2m-6 0h6" />
                            </svg>
                            <h3 className="card-title">Tamper-Proof Credentials</h3>
                            <p className="card-text">All skills and certificates are secured on the blockchain, making them unalterable.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="text-center-card glow-effect animated-card features-card-3">
                            <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2L14 3m14 4H5m14 0v2m0 2H5m0-2a2 2 0 01-2-2V9a2 2 0 012-2h3m-3 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2H5z" />
                            </svg>
                            <h3 className="card-title">Portable Digital Resume</h3>
                            <p className="card-text">Your blockchain skill passport travels with you everywhere, accessible globally.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo-container">
                        <div className="footer-logo">
                            <svg className="footer-logo-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.485 9.176 4.675 7.5 4.5 5.824 4.325 4.168 5.485 3 6.253M12 6.253c1.168-.768 2.824-1.801 4.5-1.75 1.676.051 3.332.617 4.5 1.75M12 6.253a6 6 0 00-4.5 1.75 6 6 0 00-1.5 4.5 6 6 0 006 6 6 6 0 006-6 6 6 0 00-1.5-4.5" />
                            </svg>
                            <span className="footer-logo-text">SkillChain</span>
                        </div>
                        <p className="footer-copyright">© 2025 SkillChain. All rights reserved.</p>
                    </div>
                    <div className="footer-social-links">
                        <a href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.238 2.753 7.828 6.564 9.172.48.087.654-.208.654-.462 0-.228-.008-.834-.012-1.636-2.67.58-3.235-1.286-3.235-1.286-.437-1.11-.99-1.408-.99-1.408-.81-.555.06-.543.06-.543.896.063 1.365.92 1.365.92.796 1.36 2.086.967 2.6.74.08-.574.31-1.01.564-1.246-2.002-.224-4.104-1.002-4.104-4.464 0-.986.35-1.79.92-2.42-.092-.225-.398-1.14.088-2.37.74-.238 2.43 1.05 4.25 1.05 1.82 0 3.51-1.288 4.25-1.05.486 1.23.18 2.145.088 2.37.57.63.92 1.434.92 2.42 0 3.467-2.102 4.24-4.112 4.462.32.274.62.816.62 1.65 0 1.192-.01 2.156-.01 2.454 0 .254.174.55.658.463C19.247 19.828 22 16.238 22 12 22 6.477 17.523 2 12 2z"/></svg>
                        </a>
                        <a href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.34-1.6.58-2.46.69.88-.53 1.55-1.37 1.87-2.37-.82.49-1.74.84-2.7.92-.76.06-1.52.06-2.28 0-.96-.08-1.82-.32-2.7-.69-.88-.53-1.55-1.37-1.87-2.37.82-.49 1.74-.84 2.7-.92.76-.06 1.52-.06 2.28 0 .96.08 1.82.32 2.7.69.88.53 1.55 1.37 1.87 2.37-.82.49-1.74.84-2.7.92zM12 11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                        </a>
                        <a href="#">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.2 0H2.8C1.25 0 0 1.25 0 2.8v18.4C0 22.75 1.25 24 2.8 24h18.4c1.55 0 2.8-1.25 2.8-2.8V2.8C24 1.25 22.75 0 21.2 0zM7.2 20.8H3.2V8.8h4V20.8zM5.2 7.2c-1.28 0-2.3-1.02-2.3-2.3s1.02-2.3 2.3-2.3 2.3 1.02 2.3 2.3-1.02 2.3-2.3 2.3zM20.8 20.8h-4V14c0-1.28-1.02-2.3-2.3-2.3s-2.3 1.02-2.3 2.3v6.8H8.8V8.8h3.2v1.5c.57-.96 1.58-1.5 2.7-1.5 1.95 0 3.5 1.55 3.5 3.5v8.5z"/></svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
