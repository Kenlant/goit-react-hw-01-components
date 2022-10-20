import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import profileData from './data/user.json';
import statisticsData from './data/data.json';
import friendsData from './data/friends.json';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      profile={profileData}
      statistic={statisticsData}
      friends={friendsData}
    />
  </React.StrictMode>
);
