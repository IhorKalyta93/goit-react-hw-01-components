import styles from './FriendListItem.module.css';
import PropTypes from "prop-types";

export const FriendListItem = (props) => {
    const { friend } = props;
    return (
        <>
        <li className={styles.FrLi}>
                <span className={friend.isOnline? styles.online : styles.offline}></span>
  <img src={friend.avatar} alt="User avatar" width="48" />
  <p >{friend.name}</p>
</li>
        </>
    )
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};