import styles from './Profile.module.css';
import PropTypes from "prop-types";

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={styles.profileMainDiv}>
      <div className={styles.profileDiv}>
        <div>
          <img className={styles.profilePic} src={avatar} alt="User avatar" />
          <div className={styles.profileInfo}>
            <p className={styles.profileTitleText}>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
          </div>
        </div>

        <div>
          <ul className={styles.infoDiv}>
            <li className={styles.infoDivLi}>
              <span className={styles.profileText}>Followers:</span>
              <span className={styles.profileStat}>{stats.followers}</span>
            </li>
            <li className={styles.infoDivLi}>
              <span className={styles.profileText}>Views:</span>
              <span className={styles.profileStat}>{stats.views}</span>
            </li>
            <li className={styles.infoDivLi}>
              <span className={styles.profileText}>Likes:</span>
              <span className={styles.profileStat}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};