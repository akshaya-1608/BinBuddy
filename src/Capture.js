// // CapturePage.js
// import React, { useRef, useState } from 'react';
// import Webcam from 'react-webcam';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CapturePage = () => {
//   const webcamRef = useRef(null);
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const capture = () => {
//     const screenshot = webcamRef.current.getScreenshot();
//     setImage(screenshot);
//     sendToBackend(screenshot);
//   };

//   const handleUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//         sendToBackend(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const sendToBackend = async (base64Image) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/classify', {
//         image: base64Image,
//       });

//       const result = response.data.result;
//       navigate('/result', { state: { result } }); // Go to result page
//     } catch (error) {
//       console.error('Error sending image:', error);
//       navigate('/result', { state: { result: 'Error. Try again.' } });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.page}>
//       {/* Header */}
//       <div style={styles.header}>
//         <h1 style={styles.title}>Bin Buddy</h1>
//         <p style={styles.tagline}>Snap it. Sort it. Save the Planet 🌍</p>
//       </div>

//       {/* Content */}
//       <div style={styles.content}>
//         {!image ? (
//           <>
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               videoConstraints={{ facingMode: "environment" }}
//               style={styles.webcam}
//             />

//             <button style={styles.button} onClick={capture}>
//               📷 Take a Picture
//             </button>

//             <label style={styles.uploadLabel}>
//               📁 Upload from Gallery
//               <input
//                 type="file"
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 onChange={handleUpload}
//               />
//             </label>
//           </>
//         ) : (
//           <>
//             <img src={image} alt="Captured" style={styles.captured} />
//             <button
//               style={styles.retakeButton}
//               onClick={() => setImage(null)}
//             >
//               🔁 Retake / Choose Another
//             </button>
//           </>
//         )}

//         {/* Loading Spinner or Text */}
//         {loading && <p style={styles.loading}>⏳ Verifying your image...</p>}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   page: {
//     height: '100vh',
//     fontFamily: "'Poppins', sans-serif",
//     display: 'flex',
//     flexDirection: 'column',
//     backgroundColor: '#f4fdf4',
//   },
//   header: {
//     height: '35vh',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     borderBottomLeftRadius: '20px',
//     borderBottomRightRadius: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: '30px',
//     fontWeight: '600',
//     marginBottom: '10px',
//   },
//   tagline: {
//     fontSize: '14px',
//     fontWeight: '300',
//   },
//   content: {
//     flex: 1,
//     marginTop: '-30px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     paddingBottom: '30px',
//   },
//   webcam: {
//     width: '90%',
//     maxWidth: '400px',
//     borderRadius: '15px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//     marginTop: '30px',
//   },
//   button: {
//     marginTop: '20px',
//     padding: '12px 25px',
//     backgroundColor: '#388e3c',
//     color: 'white',
//     border: 'none',
//     borderRadius: '12px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
//   uploadLabel: {
//     marginTop: '15px',
//     padding: '10px 22px',
//     backgroundColor: '#66bb6a',
//     color: 'white',
//     borderRadius: '10px',
//     fontSize: '15px',
//     cursor: 'pointer',
//   },
//   retakeButton: {
//     marginTop: '20px',
//     padding: '10px 22px',
//     backgroundColor: '#00796b',
//     color: 'white',
//     border: 'none',
//     borderRadius: '10px',
//     fontSize: '15px',
//     cursor: 'pointer',
//   },
//   captured: {
//     marginTop: '20px',
//     width: '90%',
//     maxWidth: '400px',
//     borderRadius: '15px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//   },
//   loading: {
//     marginTop: '20px',
//     fontSize: '16px',
//     color: '#555',
//   },
// };

// export default CapturePage;


// CapturePage.js
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CapturePage = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const capture = () => {
    const screenshot = webcamRef.current.getScreenshot();
    setImage(screenshot);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveAndProceed = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/classify', {
        image,
      });
      const result = response.data.result;
      navigate('/result', { state: { result } });
    } catch (error) {
      console.error('Error sending image:', error);
      navigate('/result', { state: { result: 'Error. Try again.' } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>BinBuddy</h1>
        <p style={styles.tagline}>Snap it. Sort it. Save the Planet 🌍</p>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {!image ? (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: 'environment' }}
              style={styles.webcam}
            />

            <button style={styles.button} onClick={capture}>
              📷 Take a Picture
            </button>

            <label style={{ ...styles.button, ...styles.uploadLabel }}>
              📁 Upload from Gallery
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleUpload}
              />
            </label>
          </>
        ) : (
          <>
            <img src={image} alt="Captured" style={styles.captured} />
            <p style={styles.caption}>Here's what you captured 👆</p>

            {/* Two new buttons */}
            <button style={styles.button} onClick={saveAndProceed}>
              ✅ Save & Proceed
            </button>

            <button
              style={styles.retakeButton}
              onClick={() => setImage(null)}
            >
              🔁 Retake / Choose Another
            </button>
          </>
        )}

        {loading && <p style={styles.loading}>⏳ Verifying your image...</p>}
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: '100vh',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(#f0fdf4, #ffffff)',
  },
  header: {
    height: '25vh',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '5px',
  },
  tagline: {
    fontSize: '17px',
    fontWeight: '300',
  },
  content: {
    flex: 1,
    marginTop: '-20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '30px',
  },
  webcam: {
    width: '90%',
    maxWidth: '400px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    marginTop: '30px',
  },
  button: {
    marginTop: '20px',
    padding: '12px 25px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  uploadLabel: {},
  retakeButton: {
    marginTop: '10px',
    padding: '10px 22px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    cursor: 'pointer',
  },
  captured: {
    marginTop: '20px',
    width: '90%',
    maxWidth: '400px',
    borderRadius: '15px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  caption: {
    marginTop: '10px',
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#444',
  },
  loading: {
    marginTop: '20px',
    fontSize: '16px',
    color: '#555',
  },
};

export default CapturePage;