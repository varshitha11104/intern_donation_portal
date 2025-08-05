import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Dashboard.css'; 


function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
  const userEmail = localStorage.getItem('userEmail');

  axios.post('http://localhost:5000/api/dashboard', { email: userEmail })
    .then(res => setData(res.data))
    .catch(err => console.error(err));
}, []);
    const handleLeaderboardClick = () => {
    navigate('/leaderboard');
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">🎓 Intern Dashboard</h2>

      {data ? (
        <div className="dashboard-card">
          <div className="dashboard-info">
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Referral Code:</strong> {data.referralCode}</p>
            <p><strong>Total Donations:</strong> ₹{data.totalDonations}</p>
          </div>

          <div className="dashboard-rewards">
            <h3>🏆 Rewards / Unlockables</h3>
            <ul>
              <li>🥉 Bronze Badge - ₹1000</li>
              <li>🥈 Silver Badge - ₹3000</li>
              <li>🥇 Gold Badge - ₹5000</li>
            </ul>
          </div>
          <button className="leaderboard-button" onClick={handleLeaderboardClick}>
            View Leaderboard
          </button>
        </div>
      ) : (
        <p className="dashboard-loading">Loading data...</p>
      )}

      
    </div>
  );
}

export default Dashboard;
