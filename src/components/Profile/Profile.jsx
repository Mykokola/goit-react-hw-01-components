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
      <div class="description">
        <Avatar src={avatar} alt="User avatar" class="avatar" />
        <AbautProfile class="name">{username}</AbautProfile>
        <AbautProfile class="tag">@{tag}</AbautProfile>
        <AbautProfile class="location">{location}</AbautProfile>
      </div>

      <StatsList class="stats">
        <ListItem>
          <span class="label">Followers </span>
          <span class="quantity">{followers}</span>
        </ListItem>
        <ListItem>
          <span class="label">Views </span>
          <span class="quantity">{views}</span>
        </ListItem>
        <ListItem>
          <span class="label">Likes </span>
          <span class="quantity">{likes}</span>
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
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default Profile;
