import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistic from './Statistic/Statistic';
import data from './Statistic/data.json'
console.log(data)
export const App = () => {
  return (
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  );
};
