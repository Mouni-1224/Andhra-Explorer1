import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isAuthed = Boolean(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <header className="navbar" role="banner">
      <div className="nav-inner container">
        <Link to="/" className="brand" aria-label="Andhra Explorer Home">Andhra Explorer</Link>
        {isAuthed ? (
          <>
            <nav className="links" aria-label="Primary">
              <Link className={location.pathname.startsWith('/districts') ? 'active' : ''} to="/districts">Districts</Link>
              <Link className={location.pathname === '/favorites' ? 'active' : ''} to="/favorites">Favorites</Link>
              <Link className={location.pathname === '/visited' ? 'active' : ''} to="/visited">Visited</Link>
              <Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About</Link>
            </nav>
            <div className="auth-actions">
              <button className="btn-secondary" onClick={handleLogout} aria-label="Logout">Logout</button>
            </div>
          </>
        ) : (
          <div className="auth-actions">
            <div className="auth-links">
              <Link to="/login" aria-label="Login">Login</Link>
              <Link to="/signup" className="btn-primary" aria-label="Sign Up">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;


