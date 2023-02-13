export const TransactionHistory = ( props ) => {
  
    const { items } = props;
    return (
        <>
            
           
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

                <tbody>
                     {items.map(item => (
        <tr key={item.type}>{item.amount}<span>{item.currency}</span></tr>
        
    
        
    ))}
    
  </tbody>
</table>
        </>
    )
}