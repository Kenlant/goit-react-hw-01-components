import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default propTypes;
