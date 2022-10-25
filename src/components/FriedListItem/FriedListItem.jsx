import styles from './FriedListItem.module.css';
import propTypes from './FriendListPropTypes';

export default function FriendListItem({ name, avatar, isOnline }) {
  const {
    status: statusClassName,
    name: nameClassName,
    avatar: avatarClassName,
    'friend-list-item': friendListItemClassName,
    'status--offline': statusOfflineClassName,
    'status--online': statusOnlineClassName,
  } = styles;

  const fullStatusClassName = `${statusClassName} ${
    isOnline ? statusOnlineClassName : statusOfflineClassName
  }`;

  return (
    <li className={friendListItemClassName}>
      <span className={fullStatusClassName}></span>
      <img className={avatarClassName} src={avatar} alt="User avatar" />
      <p className={nameClassName}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = propTypes;
