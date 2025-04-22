

// import { useState } from 'react';

// function DarkLight() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div
//       style={{
//         height: '100vh',
//         backgroundColor: darkMode ? '#000' : '#fff',
//         color: darkMode ? '#ffffff' : '#000000',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         transition: 'all 0.3s ease-in-out'
//       }}
//     >
//       <h1>{darkMode ? "Dark Mode ON" : "Light Mode ON"}</h1>
//       <button
//         onClick={toggleMode}
//         style={{
//           padding: '10px 20px',
//           fontSize: '16px',
//           backgroundColor: darkMode ? '#ffffff' : '#000000',
//           color: darkMode ? '#000000' : '#ffffff',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           marginTop: '20px'
//         }}
//       >
//         {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//       </button>
//     </div>
//   );
// }

// export default DarkLight;

// import { useState } from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';

// function DarkLight() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div
//       style={{
//         height: '100vh',
//         backgroundColor: darkMode ? '#121212' : '#f0f0f0',
//         color: darkMode ? '#fff' : '#000',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         transition: 'all 0.4s ease-in-out',
//       }}
//     >
//       <h1 style={{ marginBottom: '20px' }}>
//         {darkMode ? "Dark Mode ON 🌑" : "Light Mode ON ☀️"}
//       </h1>

//       <button
//         onClick={toggleMode}
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '10px',
//           padding: '12px 24px',
//           fontSize: '18px',
//           fontWeight: 'bold',
//           border: 'none',
//           borderRadius: '30px',
//           backgroundColor: darkMode ? '#ffffff' : '#333333',
//           color: darkMode ? '#000000' : '#ffffff',
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
//           cursor: 'pointer',
//           transition: 'all 0.3s ease-in-out',
//         }}
//       >
//         {darkMode ? <FaSun /> : <FaMoon />}
//         {darkMode ? "Light Mode" : "Dark Mode"}
//       </button>
//     </div>
//   );
// }

// export default DarkLight;


import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function DarkLight() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

    return (
        <div
          style={{
            height: '100vh',
            backgroundColor: darkMode ? '#0d1117' : '#f0f0f0',
            color: darkMode ? '#f0f6fc' : '#1c1c1c',
            transition: 'all 0.5s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>
            {darkMode ? 'Dark Mode ON' : 'Light Mode ON'}
          </h1>
    
          {/* Toggle Switch */}
          <div
            onClick={toggleMode}
            style={{
              width: '80px',
              height: '40px',
              borderRadius: '25px',
              backgroundColor: darkMode ? '#f0f6fc' : '#222',
              display: 'flex',
              alignItems: 'center',
              padding: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.4s ease',
              position: 'relative',
            }}
          >
            {/* Circle button */}
            <div
              style={{
                height: '30px',
                width: '30px',
                borderRadius: '50%',
                backgroundColor: darkMode ? '#0d1117' : '#fff',
                transform: darkMode ? 'translateX(40px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: darkMode ? '#f0f6fc' : '#000',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
              }}
            >
              {darkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
            </div>
          </div>
    
          {/* Optional Note */}
          <p style={{ marginTop: '30px', fontSize: '1rem', opacity: 0.7 }}>
            Click the toggle to switch theme
          </p>
        </div>
      );
}   

export default DarkLight;




  

  

