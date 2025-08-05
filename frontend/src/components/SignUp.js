import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", formData);
      alert('Signup successful!');
      navigate('/');
    } catch (err) {
      alert('Signup failed: ' + err.response?.data?.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-box" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required />
        <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="Email" required />
        <input type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} placeholder="Password" required />
        <button type="submit">Register</button>
        <p onClick={() => navigate('/')} className="link">Already have an account? Login</p>
      </form>
    </div>
  );
}

export default Signup;
