import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

export const App = ({ profileData, statisticData }) => {
  return (
    <>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
      <Statistics title={statisticData.title} stats={statisticData.stats} />
    </>
  );
};
