import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

function Districts() {
  const [districts, setDistricts] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get('/districts')
      .then(res => setDistricts(res.data))
      .catch(() => setDistricts([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = districts.filter(d => d.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="page">
      <div className="container">
        <div className="section-header">
          <h2>Districts</h2>
          <input className="input" placeholder="Search districts..." value={query} onChange={e => setQuery(e.target.value)} />
        </div>
        {loading ? (
          <div className="grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="card">
                <div className="card-media shimmer" />
                <div className="card-body">
                  <div className="shimmer" style={{ height: 18, borderRadius: 8 }} />
                  <div className="shimmer" style={{ height: 12, marginTop: 8, borderRadius: 8 }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid">
            {filtered.map(d => (
              <Link key={d._id} to={`/districts/${d._id}`} className="card" aria-label={`${d.name} district`}>
                {d.coverImageUrl ? (
                  <img className="card-media" src={d.coverImageUrl} alt={`${d.name} cover`} />
                ) : (
                  <div className="card-media" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.12))' }} />
                )}
                <div className="card-body">
                  <span className="badge">District</span>
                  <h3 style={{ margin: 0 }}>{d.name}</h3>
                  <p className="muted">{d.description?.slice(0, 120)}{d.description && d.description.length > 120 ? '…' : ''}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Districts;


