import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex">
        <div className="logo">
          <Link to="/">MyBlog</Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
