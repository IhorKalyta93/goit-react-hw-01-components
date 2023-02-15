import styles from './TransactionHistory.module.css';
import PropTypes from "prop-types";

export const TransactionHistory = props => {
  const { items } = props;
  return (
    <>
      <div className={styles.tableMainDiv}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody className={styles.tableTableBody}>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};