import { getHexColor } from 'utils/colorUtils';
import propTypes from './StatisticsPropTypes';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  const {
    statistics: statisticsClassName,
    title: titleClassName,
    'stat-list': statListClassName,
    item: itemClassName,
    label: labelClassName,
    percentage: percentageClassName,
  } = styles;

  return (
    <section className={statisticsClassName}>
      {title && <h2 className={titleClassName}>{title.toUpperCase()}</h2>}
      <ul className={statListClassName}>
        {stats.map((item, i) => (
          <li
            className={itemClassName}
            style={{
              backgroundColor: getHexColor(),
            }}
            key={i}
          >
            <span className={labelClassName}>{item.label}</span>
            <span className={percentageClassName}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = propTypes;
