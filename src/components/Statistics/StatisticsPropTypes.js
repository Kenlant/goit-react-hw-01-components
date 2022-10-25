import PropTypes from 'prop-types';

export default {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
