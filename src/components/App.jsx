import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriedList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = ({ profile, statistic, friends, transactions }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route
          path="/profile"
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
          path="/statistics"
          element={
            <Statistics title={statistic.title} stats={statistic.stats} />
          }
        />
        <Route path="/friend-list" element={<FriendList friends={friends} />} />
        <Route
          path="/transaction-history"
          element={<TransactionHistory transactions={transactions} />}
        />
      </Routes>
    </Router>
  );
};
