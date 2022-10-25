import PropTypes from 'prop-types';

const propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      type: PropTypes.oneOf([`Invoice`, `Withdrawal`, `Deposit`, `Payment`]),
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};

export default propTypes;
