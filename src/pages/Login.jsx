import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { api } from '../services/api';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      const dest = location.state?.from?.pathname || '/districts';
      navigate(dest, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <section className="page auth">
      <div className="container">
        <h2>Login</h2>
        <div className="card" style={{ maxWidth: 480, margin: '16px 0', borderRadius: 14 }}>
          <div className="card-body">
            <form className="form" onSubmit={handleSubmit}>
              {error && <div className="alert alert-error">{error}</div>}
              <label>
                <span>Email</span>
                <input className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </label>
              <label>
                <span>Password</span>
                <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
              </label>
              <button className="btn-primary" type="submit">Login</button>
            </form>
          </div>
        </div>
        <p className="muted">No account? <Link to="/signup">Sign up</Link></p>
      </div>
    </section>
  );
}

export default Login;


