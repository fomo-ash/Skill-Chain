import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <Link to="/login" className="button">
          Return to Login Page
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;