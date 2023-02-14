import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statisctics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import data from "../data/user.json";
import stat from "../data/data.json";
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';







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
      <TransactionHistory items={transactions} />;
    </>
  );
};
    



