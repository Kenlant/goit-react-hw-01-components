import PropTypes from 'prop-types';

export default {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      type: PropTypes.oneOf([`Invoice`, `Withdrawal`, `Deposit`, `Payment`]),
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
