import './FriedListItem.css';

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className="friend-list-item">
      <span
        className={`status status--${isOnline ? 'online' : 'offline'}`}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" />
      <p className="name">{name}</p>
    </li>
  );
}
