import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <div className="first-page-container">
      <div className="first-page-content">
        <h1>Welcome to URL Shortening Application</h1>
        <p>Click here to <Link to="/signup"></Link></p>
        <button><Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>Sign Up</Link></button>
      </div>
    </div>
  );
};

export default FirstPage;
