import styles from './Profile.module.css';
import propTypes from './ProfilePropTypes';

export default function Profile({ username, tag, location, avatar, stats }) {
  const {
    profile: profileClassName,
    description: descriptionClassName,
    avatar: avatarClassName,
    name: nameClassName,
    tag: tagClassName,
    location: locationClassName,
    stats: statsClassName,
    'stat-item': statItemClassName,
    label: labelClassName,
    quantity: quantityClassName,
  } = styles;
  const statsDictionary = [
    { key: `Followers`, value: stats.followers },
    { key: `Views`, value: stats.views },
    { key: `Likes`, value: stats.likes },
  ];

  return (
    <div className={profileClassName}>
      <div className={descriptionClassName}>
        <img className={avatarClassName} src={avatar} alt="User avatar" />
        <p className={nameClassName}>{username}</p>
        <p className={tagClassName}>@{tag}</p>
        <p className={locationClassName}>{location}</p>
      </div>
      <ul className={statsClassName}>
        {statsDictionary.map(x => (
          <li className={statItemClassName} key={x.key}>
            <span className={labelClassName}>{x.key}</span>
            <span className={quantityClassName}>{x.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Profile.propTypes = propTypes;
