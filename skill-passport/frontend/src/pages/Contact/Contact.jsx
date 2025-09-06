import React from 'react';


const Contact = () => {
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
          background: black
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

        /* Contact Section Styles */
        .contact-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 4rem 0;
            min-height: calc(100vh - 12rem);
        }
        .contact-container {
            width: 100%;
            max-width: 42rem;
            margin: 0 auto;
            background-color: #2a2a4e;
            padding: 2.5rem;
            border-radius: 0.75rem;
            border: 1px solid #374151;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .contact-intro {
            text-align: center;
            font-size: 1.125rem;
            color: #d1d5db;
            margin-bottom: 2rem;
        }
        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        .form-group {
            display: flex;
            flex-direction: column;
        }
        .form-group label {
            font-size: 0.875rem;
            font-weight: 500;
            color: #64ffda;
            margin-bottom: 0.5rem;
        }
        .form-group input, .form-group textarea {
            background-color: #1a1a2e;
            border: 1px solid #374151;
            color: #e0e0e0;
            padding: 0.75rem;
            border-radius: 0.5rem;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease;
        }
        .form-group input:focus, .form-group textarea:focus {
            border-color: #4a90e2;
        }
        .form-group textarea {
            resize: vertical;
            min-height: 8rem;
        }
        .contact-btn {
            align-self: flex-start;
            background-color: #4a90e2;
            color: white;
        }
        .contact-btn:hover {
            background-color: #5a9ceb;
        }
        .contact-info {
            margin-top: 2rem;
            text-align: center;
            font-size: 1rem;
            color: #d1d5db;
        }
        .contact-info a {
            color: #64ffda;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .contact-info a:hover {
            text-decoration: underline;
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
        {/* Contact Section */}
        <section className="contact-section">
            <h1 className="section-title">Get in Touch</h1>
            <div className="contact-container glow-effect">
                <p className="contact-intro">
                    We'd love to hear from you. Whether you have a question about our blockchain technology, a suggestion on how to improve the platform, or you're an employer looking to verify a skill passport, our team is ready to assist. Your feedback is crucial to our mission of building a transparent and secure future for professional credentials. Please fill out the form below, and we will get back to you promptly to address your query.
                </p>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="btn contact-btn">Send Message</button>
                </form>
                <div className="contact-info">
                    <p>Or you can email us directly at contact@skillchain.com</p>
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

export default Contact;
