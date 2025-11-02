import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

function Visited() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get('/visited')
      .then(res => setItems(res.data || []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="page">
      <div className="container">
        <div className="section-header">
          <h2>Visited</h2>
        </div>
        {loading ? (
          <div className="grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card">
                <div className="card-media shimmer" />
                <div className="card-body">
                  <div className="shimmer" style={{ height: 18, borderRadius: 8 }} />
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <p className="muted">No visited attractions yet.</p>
        ) : (
          <div className="grid">
            {items.map(a => (
              <Link key={a._id} to={`/attractions/${a._id}`} className="card">
                <img src={a.imageUrl} alt={a.name} className="card-media" />
                <div className="card-body">
                  <span className="badge">{a.district?.name}</span>
                  <h3>{a.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Visited;


