import FriendListItem from 'components/FriedListItem/FriedListItem';
import propTypes from './FriendListPropTypes';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  const { 'friend-list': friendListClassName } = styles;

  return (
    <ul className={friendListClassName}>
      {friends.map((item, i) => (
        <FriendListItem
          key={i}
          name={item.name}
          avatar={item.avatar}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = propTypes;
