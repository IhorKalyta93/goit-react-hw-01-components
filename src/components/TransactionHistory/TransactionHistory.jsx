import styles from './TransactionHistory.module.css';

export const TransactionHistory = props => {
  const { items } = props;
  return (
    <>
      <div className={styles.tableMainDiv}>
      <table >
        <thead className={styles.tableHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.type}>
              {item.amount}
              <span>{item.currency}</span>
            </tr>
          ))}
        </tbody>
      </table></div>
    </>
  );
};
