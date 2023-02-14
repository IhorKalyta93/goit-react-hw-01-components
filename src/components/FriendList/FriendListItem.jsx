export const FriendListItem = ( props ) => {
  
    const { friend } = props;
    return (
        <>
        <li className="item">
                <span className="status">{ friend.isOnline}</span>
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
  <p className="name">{friend.name}</p>
</li>
        </>
    )
}
