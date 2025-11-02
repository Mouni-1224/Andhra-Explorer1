import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';

function DistrictDetail() {
  const { districtId } = useParams();
  const [district, setDistrict] = useState(null);
  const [attractions, setAttractions] = useState([]);
  const [sort, setSort] = useState('rating');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [dRes, aRes] = await Promise.all([
          api.get(`/districts/${districtId}`),
          api.get(`/attractions?district=${districtId}&sort=${sort}`)
        ]);
        if (mounted) {
          setDistrict(dRes.data);
          setAttractions(aRes.data);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [districtId, sort]);

  return (
    <section className="page">
      <div className="container">
        {!district ? (
          <div className="loading">Loading…</div>
        ) : (
          <>
            <div className="section-header">
              <h2>{district.name}</h2>
              <select className="input" value={sort} onChange={e => setSort(e.target.value)}>
                <option value="rating">Top Rated</option>
                <option value="budgetLow">Budget: Low to High</option>
                <option value="budgetHigh">Budget: High to Low</option>
              </select>
            </div>
            <p className="muted">{district.description}</p>
            {loading ? (
              <div className="grid">
                {Array.from({ length: 6 }).map((_, i) => (
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
                {attractions.map(a => (
                  <Link key={a._id} to={`/attractions/${a._id}`} className="card" aria-label={`${a.name} attraction`}>
                    <img src={a.imageUrl} alt={a.name} className="card-media" />
                    <div className="card-body">
                      <span className="badge">Top Spot</span>
                      <h3 style={{ margin: 0 }}>{a.name}</h3>
                      <p className="muted">Budget: ₹{a.budgetMin} - ₹{a.budgetMax}</p>
                      <p className="muted">Rating: {a.avgRating?.toFixed?.(1) ?? '—'}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default DistrictDetail;


