import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriedList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = ({ profile, statistic, friends, transactions }) => {
  const baseURL = process.env.PUBLIC_URL;

  return (
    <Router>
      <Routes>
        <Route path={`${baseURL}`} element={<Navigation baseUrl={baseURL} />} />
        <Route
          path={`${baseURL}/profile`}
          element={
            <Profile
              username={profile.username}
              tag={profile.tag}
              location={profile.location}
              avatar={profile.avatar}
              stats={profile.stats}
            />
          }
        />
        <Route
          path={`${baseURL}/statistics`}
          element={
            <Statistics title={statistic.title} stats={statistic.stats} />
          }
        />
        <Route
          path={`${baseURL}/friend-list`}
          element={<FriendList friends={friends} />}
        />
        <Route
          path={`${baseURL}/transaction-history`}
          element={<TransactionHistory transactions={transactions} />}
        />
      </Routes>
    </Router>
  );
};
