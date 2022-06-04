import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import './Assets/CSS/reset.css'
import './Assets/CSS/Style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
