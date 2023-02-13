import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { FriendList } from "./FriendList";

import data from "../data/user.json"
import stat from "../data/data.json"
import friends from '../data/friends.json';

<FriendList friends={friends} />;





//task 1
export const App = () => {
  return (
    <>
      <Profile
  username={data.username}
  tag={data.tag}
  location={data.location}
  avatar={data.avatar}
  stats={data.stats}
      />
      <Statistics title="Upload stats" stats={stat} />
<FriendList friends={friends} />;
    </>
  );
};
    



