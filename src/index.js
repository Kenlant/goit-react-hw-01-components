import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import profileData from './data/user.json';
import statisticsData from './data/data.json';

import avatar from './data/user.png';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      profileData={{ ...profileData, avatar }}
      statisticData={statisticsData}
    />
  </React.StrictMode>
);
