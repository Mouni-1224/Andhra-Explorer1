import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="page home">
      <div className="container">
        <div className="hero">
          <h1>Andhra Explorer</h1>
          <p className="muted">Discover Andhra Pradesh across 13 districts. Plan trips with budgets, maps, and curated attractions. Save favorites and track where you've been.</p>
          <div className="cta-group">
            <Link to="/signup" className="btn-primary">Get Started</Link>
            <Link to="/login" className="btn-secondary">Login</Link>
          </div>
        </div>

        <div className="grid" style={{ marginTop: 24 }}>
          <div className="card">
            <div className="card-body">
              <span className="badge">Curation</span>
              <h3 style={{ margin: 0 }}>Top Attractions</h3>
              <p className="muted">Explore landmarks, temples, beaches, and hidden gems—updated dynamically from our database.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="badge">Planning</span>
              <h3 style={{ margin: 0 }}>Budgets & Maps</h3>
              <p className="muted">See budget ranges and open Google Maps locations to navigate effortlessly.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="badge">Personalization</span>
              <h3 style={{ margin: 0 }}>Favorites & Visited</h3>
              <p className="muted">Save favorites, mark visited, and build your personalized travel journal.</p>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: 24 }}>
          <div className="card-body">
            <h3 style={{ marginTop: 0 }}>Start your journey</h3>
            <p className="muted">Create your account to unlock districts, interactive maps, and personalized features.</p>
            <div className="cta-group">
              <Link to="/signup" className="btn-primary">Create Account</Link>
              <Link to="/login" className="btn-outline">I already have an account</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;


