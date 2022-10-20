import './Profile.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img className="avatar" src={avatar} alt="User avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="stat-item">
          <span className="label">Followes</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="stat-item">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="stat-item">
          <span className="label">Likes</span>
          <span className="quantity">{stats.followers}</span>
        </li>
      </ul>
    </div>
  );
}
