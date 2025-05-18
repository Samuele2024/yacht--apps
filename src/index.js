import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Include your global styles.
import App from './App'; // Import your main App component.
import reportWebVitals from './reportWebVitals'; // Optional: Performance measurement.

// Render the App.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Report web vitals.
reportWebVitals();
