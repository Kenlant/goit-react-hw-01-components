import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import profileData from './data/user.json';
import avatar from './data/user.png';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App profileData={{ ...profileData, avatar }} />
  </React.StrictMode>
);
