import { Profile } from "./Profile";
import data from "../data/user.json"
import stat from "../data/data.json"


export const AppStat = () => {
  return (
    <>
      <Statistics title="Upload stats" stats={stat} />
<Statistics stats={stat} />

    </>
  );
};



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
    </>
  );
};
    



