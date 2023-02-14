import styles from './FriendListItem.module.css';

export const FriendListItem = (props) => {
  
    const { friend } = props;
    return (
        <>
        <li className={styles.FrLi}>
                <span >{ friend.isOnline}</span>
  <img src={friend.avatar} alt="User avatar" width="48" />
  <p >{friend.name}</p>
</li>
        </>
    )
}
