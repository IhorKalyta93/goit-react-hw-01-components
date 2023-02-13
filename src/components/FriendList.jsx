import { FriendListItem } from "./FriendListItem";

export const FriendList = (props) => {
  
    const { friends } = props;
    return (
        <>
        <ul className="">
    {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id}/>
        
    ))}
  </ul>
        </>
    )
}
