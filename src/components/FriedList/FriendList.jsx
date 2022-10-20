import FriendListItem from 'components/FriedListItem/FriedListItem';
import './FriendList.css';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
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
