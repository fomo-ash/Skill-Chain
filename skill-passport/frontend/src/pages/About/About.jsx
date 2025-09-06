import React from 'react';
import { Link } from 'react-router-dom';

// About component for the SkillChain website.
const About = () => {
  return (
    <div className="main-container">
      <style jsx="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .main-container {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #1f1f3a, #1a1a2e);
          color: #e0e0e0;
          min-height: 100vh;
          padding-top: 5rem;
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
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 50;
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
          transition: color 0.3s ease;
        }
        .header .nav a:hover {
          color: #4a90e2;
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
            padding: 0 2rem;
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
        .card {
            padding: 1.5rem;
            border-radius: 0.5rem;
            border: 1px solid #374151;
            background-color: #2a2a4e;
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }

        /* Hero Section */
        .about-hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-direction: column;
        }
        .about-hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }
        .about-hero-subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          max-width: 45rem;
        }
        
        /* Our Story Section */
        .story-section {
          padding: 1rem 0;
        }
        .story-text-container {
          max-width: 50rem;
          margin: 0 auto;
          text-align: center;
        }
        .story-paragraph {
          font-size: 1.125rem;
          line-height: 1.75rem;
          color: #d1d5db;
          margin-bottom: 1.5rem;
        }

        /* Mission Section */
        .mission-section {
          padding: 4rem 0;
          background-color: #141426;
        }
        .mission-content {
          max-width: 45rem;
          margin: 0 auto;
          text-align: center;
        }
        .mission-quote {
          font-style: italic;
          font-size: 1.5rem;
          line-height: 2rem;
          color: #ffffff;
          font-weight: bold;
        }

        /* Team Section */
        .team-section {
          padding: 4rem 0;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
          max-width: 60rem;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .team-member-card {
          text-align: center;
          padding: 2rem;
        }
        .team-member-image {
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          object-fit: cover;
          margin: 0 auto 1rem;
          border: 3px solid #64ffda;
        }
        .team-member-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
        }
        .team-member-role {
          font-size: 1rem;
          color: #4a90e2;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        .team-member-bio {
          font-size: 0.875rem;
          color: #d1d5db;
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
      
      {/* Header */}
      <header className="header">
        <div className="logo">
          <svg className="logo-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.485 9.176 4.675 7.5 4.5 5.824 4.325 4.168 5.485 3 6.253M12 6.253c1.168-.768 2.824-1.801 4.5-1.75 1.676.051 3.332.617 4.5 1.75M12 6.253a6 6 0 00-4.5 1.75 6 6 0 00-1.5 4.5 6 6 0 006 6 6 6 0 006-6 6 6 0 00-1.5-4.5" />
          </svg>
          <span className="logo-text">SkillChain</span>
        </div>
        <nav className="nav">
          <a href="#">Product</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <button className="btn join-btn">Join Now</button>
        <button className="menu-btn">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      <main className="main-content">
        {/* About Hero Section */}
        <section className="about-hero">
          <h1 className="about-hero-title">About SkillChain</h1>
          <p className="about-hero-subtitle">
            We're building the future of professional identity with blockchain technology.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="story-section">
          <div className="story-text-container">
            <h2 className="section-title">Our Story</h2>
            <p className="story-paragraph">
              SkillChain was born from a simple yet powerful idea: that your skills and achievements should be
              owned by you, and them should be as verifiable as a digital currency. Our founders saw how
              traditional resumes and certificates were prone to fraud and difficult to verify, creating
              unnecessary barriers for both talented individuals and employers. We embarked on a mission to
              create a transparent and **tamper-proof** system for professional credentials.
            </p>
            <p className="story-paragraph">
              By leveraging blockchain, we've created the **Skill Passport**, a secure, decentralized record of your
              professional journey. This allows you to carry your verified skills with you anywhere,
              proving your worth in a single click. We believe this technology will not only
              streamline hiring but also empower individuals to take full ownership of their careers.
            </p>
          </div>
        </section>
        
        <hr />

        {/* Our Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-quote">
              "To make professional skills verifiable, portable, and eternally yours."
            </p>
          </div>
        </section>
        
        <hr />

        {/* Meet the Team Section */}
        <section className="team-section">
          <h2 className="section-title">Meet the Team</h2>
          <div className="team-grid">
            {/* Team Member 1 */}
            <div className="team-member-card">
              
              <h3 className="team-member-name">Ashutosh Badapanda</h3>
              <p className="team-member-role">Full- Stack Developer</p>
              <p className="team-member-bio">A visionary leader with a background in decentralized systems, strategic vision and commitment to user empowerment.</p>
            </div>
            {/* Team Member 2 */}
            <div className="team-member-card">
              
              <h3 className="team-member-name">Sailen Sahoo</h3>
              <p className="team-member-role">Full-Stack Developer</p>
              <p className="team-member-bio">A brilliant mind in cryptography and smart contract development, Sailen leads the technical team, ensuring the platform is secure and scalable.</p>
            </div>
            {/* Team Member 3 */}
            <div className="team-member-card">
              
              <h3 className="team-member-name">Nipuna Mahakur</h3>
              <p className="team-member-role">Frontend Developer</p>
              <p className="team-member-bio">Nipuna crafts the seamless user experience, making the complex world of blockchain simple and intuitive for all users.</p>
            </div>

            <div className="team-member-card">
              
              <h3 className="team-member-name">Arpita Mahapatra</h3>
              <p className="team-member-role">Designer</p>
              <p className="team-member-bio">  A talented product designer, Alex specializes in user research, wireframing, and creating beautiful, user-centric interfaces. </p>
            </div>

            <div className="team-member-card">
              
              <h3 className="team-member-name">Sneha Tripathy</h3>
              <p className="team-member-role">Frontend Developer</p>
              <p className="team-member-bio"> As a seasoned frontend developer, Maya focuses on building robust and responsive applications that bring the design vision to life.</p>
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

export default About;
