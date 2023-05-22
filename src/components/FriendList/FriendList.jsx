import PropTypes from 'prop-types';
import {
  FrinedList,
  FriendListItem,
  FriendsItemImg,
  FriendsItemName,
  FriendsItemIndicatorOnline,
  
} from './FriendList.style';
const FriendList = ({ friends }) => {
  return (
    <FrinedList className="friend-list">
      {friends.map(e => (
        <FriendListItem key={e.id}>
          <FriendsItemIndicatorOnline style={{background:e.isOnline?'green':'red'}}></FriendsItemIndicatorOnline>
          <FriendsItemImg src={e.avatar} alt="" />
          <FriendsItemName>{e.name}</FriendsItemName>
        </FriendListItem>
      ))}
    </FrinedList>

  );
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired
}
export default FriendList;
