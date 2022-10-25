import propTypes from './TransactionHistoryPropTypes';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  const { 'transaction-history': transactionHistoryClassName } = styles;

  return (
    <table className={transactionHistoryClassName}>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount.toFixed(2)}</td>
            <td>{item.currency.toUpperCase()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = propTypes;
