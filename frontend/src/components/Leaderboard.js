import React from 'react';
import {useNavigate} from 'react-router-dom';

function Leaderboard() {
  const dummyLeaderboard = [
    { name: "Varshitha", amount: 5200 },
    { name: "Rahul", amount: 4700 },
    { name: "Anjali", amount: 4500 },
  ];
  const navigate = useNavigate()
const handleLeaderboardClick = () => {
    navigate('/dashboard');
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🏆 Top Donors Leaderboard</h2>
      <div style={styles.card}>
        <ol style={styles.list}>
          {dummyLeaderboard.map((entry, index) => (
            <li key={index} style={styles.listItem}>
              <span style={styles.rank}>#{index + 1}</span>
              <span style={styles.name}>{entry.name}</span>
              <span style={styles.amount}>₹{entry.amount}</span>
            </li>
          ))}
        </ol>
      </div>
       <button style={styles.button} onClick={handleLeaderboardClick}>
            Go to dashboard
          </button>
    </div>
  );
}

const styles = {
  button: {
  marginTop: '30px',
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#4caf50',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  width: 'fit-content',          // 👈 Keeps it tight around the content
  marginLeft: 'auto',            // 👇 Center the button horizontally
  marginRight: 'auto',
  display: 'block'
}
,
  container: {
    padding: '40px',
    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    padding: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px',
    borderBottom: '1px solid #eee',
    fontSize: '1.2rem',
  },
  rank: {
    fontWeight: 'bold',
    color: '#555',
  },
  name: {
    flex: 1,
    textAlign: 'left',
    marginLeft: '20px',
  },
  amount: {
    fontWeight: 'bold',
    color: '#4caf50',
  },
  

};


export default Leaderboard;
