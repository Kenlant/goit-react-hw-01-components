import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  const { 'link-list': linkListClassName, link: linkClassName } = styles;

  return (
    <ul className={linkListClassName}>
      <li>
        <Link className={linkClassName} to="/profile">
          Profile
        </Link>
      </li>
      <li>
        <Link className={linkClassName} to="/statistics">
          Statistics
        </Link>
      </li>
      <li>
        <Link className={linkClassName} to="/friend-list">
          Friend list
        </Link>
      </li>
      <li>
        <Link className={linkClassName} to="/transaction-history">
          Transaction History
        </Link>
      </li>
    </ul>
  );
}
