import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../services/api';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/auth/signup', { name, email, password });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <section className="page auth">
      <div className="container">
        <h2>Sign Up</h2>
        <div className="card" style={{ maxWidth: 480, margin: '16px 0', borderRadius: 14 }}>
          <div className="card-body">
            <form className="form" onSubmit={handleSubmit}>
              {error && <div className="alert alert-error">{error}</div>}
              <label>
                <span>Name</span>
                <input className="input" value={name} onChange={e => setName(e.target.value)} required />
              </label>
              <label>
                <span>Email</span>
                <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </label>
              <label>
                <span>Password</span>
                <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
              </label>
              <button className="btn-primary" type="submit">Create Account</button>
            </form>
          </div>
        </div>
        <p className="muted">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </section>
  );
}

export default Signup;


