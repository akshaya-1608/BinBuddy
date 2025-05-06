// Home.js

// Importing necessary modules from React and React Router
import React from 'react';
import { Link } from 'react-router-dom';

// Home Component (First page of the app)
const Home = () => {
  return (
    <div style={styles.page}>
      
      {/* This is the white card-like box in the center */}
      <div style={styles.card}>

        {/* Trash bin icon at the top */}
        <img
          src="https://img.icons8.com/ios-filled/100/4CAF50/trash.png"
          alt="Bin Icon"
          style={styles.icon}
        />

        {/* Main title of the app */}
        <h1 style={styles.title}>BinBuddy</h1>

        {/* Short description of the app */}
        {/* <p style={styles.subtitle}>
          Your AI-powered waste sorting buddy –<br />
          snap, sort, and learn sustainability in seconds.
        </p> */}

        <p style={styles.subtitle}>
          Point your camera at any piece of waste<br />
          and get instant eco‑sorting guidance and learn sustainability in seconds.
        </p>


        {/* Button to go to next page (capture page) */}
        <Link to="/capture">
          <button style={styles.button}>Get Started</button>
        </Link>

        {/* List of simple features / benefits */}
        <div style={styles.features}>
          <p>✅ Snap a photo of waste</p>
          <p>♻ Get instant recycle/trash result</p>
        </div>

        {/* Inspirational quote at the bottom */}
        <p style={styles.quote}>
          “Small actions, big impact. Let’s recycle right.”
        </p>

        {/* Small animated image (leaf gif) to make UI look more lively */}
        <img
          src="https://i.gifer.com/7efs.gif" // animated leaf gif
          alt="Leaf animation"
          style={styles.gif}
        />
      </div>
    </div>
  );
};

// Styling for the component using plain JavaScript object
const styles = {
  // Full page style (green gradient background)
  page: {
    height: '100vh', // full screen height
    background: 'linear-gradient(to bottom right, #e8f5e9, #ffffff)', // smooth green to white
    display: 'flex',
    justifyContent: 'center', // center horizontally
    alignItems: 'center',     // center vertically
    fontFamily: "'Poppins', sans-serif", // clean modern font
  },

  // The centered white card box
  card: {
    backgroundColor: '#fff', // white background
    borderRadius: '16px',    // rounded corners
    padding: '40px 30px',    // inner spacing
    textAlign: 'center',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', // soft shadow
    maxWidth: '350px',
    width: '100%',
  },

  // Bin icon style
  icon: {
    width: 60,
    marginBottom: 10,
  },

  // Title: "BinBuddy"
  title: {
    fontSize: '30px',
    fontWeight: '600',
    color: '#2e7d32', // dark green
    margin: '10px 0',
  },

  // Subtitle text under the title
  subtitle: {
    fontSize: '15px',
    color: '#555',
    marginBottom: '30px',
  },

  // Green "Get Started" button
  button: {
    padding: '12px 30px',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease', // smooth hover animation
  },

  // Feature list
  features: {
    marginTop: '30px',
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.6',
  },

  // Motivational quote style
  quote: {
    fontStyle: 'italic',
    color: '#2e7d32',
    marginTop: '20px',
    fontSize: '13px',
  },

  // Animated leaf image style
  gif: {
    width: '60px',
    marginTop: '20px',
  },
};

// Exporting the component so it can be used in the app
export default Home;