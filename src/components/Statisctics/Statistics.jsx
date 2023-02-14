export const Statistics = ( props ) => {
  
    const { title, stats } = props;
    return (
        <>
        <section className="statistics">
 
{title.length > 0 && (
     <h2>{title}</h2>
      )}
  <ul className="stat-list">
    {stats.map(stat => (
        <li key={stat.id}>{stat.label}<span>{stat.percentage}</span></li>
        
    ))}
  </ul>
</section>
        </>
    )
}
