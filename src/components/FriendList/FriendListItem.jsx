import styles from './FriendListItem.module.css';

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
