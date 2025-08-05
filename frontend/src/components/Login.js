import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/login`, { email, password });
    alert('Login successful!');
    
    localStorage.setItem('userEmail', email);

    navigate('/dashboard');
  } catch (err) {
    alert('Login failed: ' + err.response?.data?.message);
  }
};


  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
        <p onClick={() => navigate('/signup')} className="link">Don't have an account? Sign up</p>
      </form>
    </div>
  );
}

export default Login;
