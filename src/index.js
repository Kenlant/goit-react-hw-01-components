import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import profileData from './data/user.json';
import statisticsData from './data/data.json';
import friendsData from './data/friends.json';
import transactionsData from './data/transactions.json';

import userAvatar from './data/images/user-avatar.png';
import friendAvatar from './data/images/friend-avatar.png';

import './index.css';

const profile = { ...profileData, avatar: userAvatar };
const friends = [...friendsData].map(item => {
  item.avatar = friendAvatar;
  return item;
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      profile={profile}
      statistic={statisticsData}
      friends={friends}
      transactions={transactionsData}
    />
  </React.StrictMode>
);
