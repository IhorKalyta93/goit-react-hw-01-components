import styles from './Statistics.module.css';
import PropTypes from "prop-types";
function getRandomHexColor() {
  return `#${ Math.floor(Math.random() * 16777215).toString(16) }`;
}

export const Statistics = props => {
  const { title, stats } = props;
  return (

    <>
      
      <section>
        <div className={styles.statMainDiv}>
          {title.length > 0 && <h2 className={styles.statTitle}>{title}</h2>}
          <div className={styles.statDiv}>
            <ul className={styles.statUl}>
              {stats.map(stat => (
                <li style={{backgroundColor:getRandomHexColor()}} className={styles.statLi} key={stat.id}>
                  {stat.label}<br></br>
                  <span className={styles.statLiSpan}>{stat.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};