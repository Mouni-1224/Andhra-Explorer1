import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';

function AttractionDetail() {
  const { attractionId } = useParams();
  const [attraction, setAttraction] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisited, setIsVisited] = useState(false);

  useEffect(() => {
    api.get(`/attractions/${attractionId}`).then(res => setAttraction(res.data));
    api.get(`/favorites/${attractionId}`).then(res => setIsFavorite(res.data?.favorite === true)).catch(() => {});
    api.get(`/visited/${attractionId}`).then(res => setIsVisited(res.data?.visited === true)).catch(() => {});
  }, [attractionId]);

  const toggleFavorite = async () => {
    const res = await api.post(`/favorites/${attractionId}/toggle`);
    setIsFavorite(res.data.favorite);
  };
  const toggleVisited = async () => {
    const res = await api.post(`/visited/${attractionId}/toggle`);
    setIsVisited(res.data.visited);
  };

  if (!attraction) return <section className="page"><div className="container"><div className="loading">Loading…</div></div></section>;

  return (
    <section className="page">
      <div className="container">
        <div className="detail">
          <img className="detail-media" src={attraction.imageUrl} alt={attraction.name} />
          <div className="detail-body">
            <span className="badge">{attraction.district?.name || 'Attraction'}</span>
            <h2 style={{ margin: 0 }}>{attraction.name}</h2>
            <p className="muted">{attraction.description}</p>
            <p className="muted">Budget: ₹{attraction.budgetMin} - ₹{attraction.budgetMax}</p>
            <div className="actions">
              <button className="btn-primary" onClick={toggleFavorite}>{isFavorite ? 'Unfavorite' : 'Add to Favorites'}</button>
              <button className="btn-secondary" onClick={toggleVisited}>{isVisited ? 'Mark Unvisited' : 'Mark Visited'}</button>
              {attraction.mapUrl && (
                <a className="btn-outline" href={attraction.mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttractionDetail;


