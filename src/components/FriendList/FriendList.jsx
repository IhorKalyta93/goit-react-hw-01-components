import { FriendListItem } from "./FriendListItem";
import styles from './FriendList.module.css';
import PropTypes from "prop-types";

export const FriendList = (props) => {
  
    const { friends } = props;
    return (
        <>
        <ul className={styles.FrUl}>
    {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id}/>
        
    ))}
  </ul>
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