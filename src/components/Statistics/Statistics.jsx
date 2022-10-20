import { getHexColor } from 'utils/colorUtils';
import './Statistics.css';

export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title.toUpperCase()}</h2>}
      <ul className="stat-list">
        {stats.map((item, i) => (
          <li
            className="item"
            style={{
              backgroundColor: getHexColor(),
            }}
            key={i}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
