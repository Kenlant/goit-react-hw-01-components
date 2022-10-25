import { Link } from 'react-router-dom';
import propTypes from './NavigationPropTypes';
import styles from './Navigation.module.css';

export default function Navigation({ baseUrl }) {
  const { 'link-list': linkListClassName, link: linkClassName } = styles;

  return (
    <ul className={linkListClassName}>
      <li>
        <Link className={linkClassName} to={`${baseUrl}/profile`}>
          Profile
        </Link>
      </li>
      <li>
        <Link className={linkClassName} to={`${baseUrl}/statistics`}>
          Statistics
        </Link>
      </li>
      <li>
        <Link className={linkClassName} to={`${baseUrl}/friend-list`}>
          Friend list
        </Link>
      </li>
      <li>
        <Link className={linkClassName} to={`${baseUrl}/transaction-history`}>
          Transaction History
        </Link>
      </li>
    </ul>
  );
}

Navigation.propTypes = propTypes;
