import PropTypes from 'prop-types';
import {
  ProfileCards,
  Avatar,
  AbautProfile,
  StatsList,
  ListItem,
} from './Profile.styled';
const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <ProfileCards>
      <div className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <AbautProfile className="name">{username}</AbautProfile>
        <AbautProfile className="tag">@{tag}</AbautProfile>
        <AbautProfile className="location">{location}</AbautProfile>
      </div>

      <StatsList className="stats">
        <ListItem>
          <span className="label">Followers </span>
          <span className="quantity">{followers}</span>
        </ListItem>
        <ListItem>
          <span className="label">Views </span>
          <span className="quantity">{views}</span>
        </ListItem>
        <ListItem>
          <span className="label">Likes </span>
          <span className="quantity">{likes}</span>
        </ListItem>
      </StatsList>
    </ProfileCards>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  )
};
export default Profile;
