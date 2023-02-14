import { FriendListItem } from "./FriendListItem";
import styles from './FriendList.module.css';

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
