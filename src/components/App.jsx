import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriedList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = ({ profile, statistic, friends, transactions }) => {
  return (
    <>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <Statistics title={statistic.title} stats={statistic.stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
