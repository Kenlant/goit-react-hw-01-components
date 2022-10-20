import Profile from './Profile/Profile';

export const App = ({ profileData }) => {
  return (
    <>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
    </>
  );
};
