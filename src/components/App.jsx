import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistic from './Statistic/Statistic';
import data from './Statistic/data.json'
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/transactions.json'
export const App = () => {
  return (
    <div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
/>  
<Statistic title='Upload stats' stats={data}/>
<FriendList friends={friends}/>
<TransactionHistory items={transactions} />
  </div>
  );
};
