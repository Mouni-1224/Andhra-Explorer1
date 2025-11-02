import React, { useEffect } from 'react';

function About() {
  useEffect(() => { document.title = 'About • Andhra Explorer'; }, []);
  return (
    <section className="page">
      <div className="container">
        <div className="section-header">
          <h2>About Andhra Explorer</h2>
        </div>
        <div className="card" style={{ marginBottom: 16 }}>
          <div className="card-body">
            <p className="muted">Andhra Explorer is a modern MERN application that promotes tourism across Andhra Pradesh by providing a rich, interactive guide to all 13 districts. Our mission is to make trip planning delightful and accessible.</p>
          </div>
        </div>
        <div className="grid">
          <div className="card">
            <div className="card-body">
              <span className="badge">Vision</span>
              <h3>Celebrate Culture</h3>
              <p className="muted">Showcase heritage, cuisine, festivals, and natural beauty through curated attractions and stories.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="badge">Technology</span>
              <h3>Seamless Experience</h3>
              <p className="muted">Built on React, Node, and MongoDB with secure authentication and real-time updates.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <span className="badge">Community</span>
              <h3>Local Insights</h3>
              <p className="muted">Highlight local favorites and encourage exploration beyond the usual routes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


