//Result page
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result || '';

  const tips = [
    "Try reusing it in a creative way!",
    "Check if your local recycling center accepts it.",
    "Avoid single-use packaging next time.",
    "Compost if it’s biodegradable.",
    "Use it in DIY crafts or home projects."
  ];


  
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Result</h1>
      {result === 'Recycle' ? (
        <p style={styles.recyclable}>✅ The item is recyclable!</p>
      ) : result === 'Trash' ? (
        <>
          <p style={styles.nonRecyclable}>🚫 Not recyclable.</p>
          <h3 style={styles.tipHeader}>Tips:</h3>
          <ul style={styles.tipList}>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </>
      ) : (
        <p style={styles.error}>⚠ Something went wrong. Please try again.</p>
      )}
      <button style={styles.button} onClick={() => navigate('/capture')}>
        🔁 Try Another
      </button>
    </div>
  );
};

const styles = {
  page: {
    padding: '30px',
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    color: '#2e7d32',
    marginBottom: '20px',
  },
  recyclable: {
    fontSize: '20px',
    color: 'green',
    marginBottom: '20px',
  },
  nonRecyclable: {
    fontSize: '20px',
    color: 'red',
    marginBottom: '10px',
  },
  error: {
    fontSize: '18px',
    color: 'orange',
  },
  tipHeader: {
    fontSize: '18px',
    marginTop: '20px',
    color: '#333',
  },
  tipList: {
    listStyleType: 'disc',
    textAlign: 'left',
    maxWidth: '400px',
    margin: '0 auto',
    color: '#444',
  },
  button: {
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default ResultPage;