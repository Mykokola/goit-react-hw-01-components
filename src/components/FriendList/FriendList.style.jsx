import styled from '@emotion/styled';

export const FrinedList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  margin-top: 45px;
  flex-direction: column;
  align-items: center;
  gap:10px;
`;
export const FriendListItem = styled.li`
  display: flex;
  background: #e4b8b8;
  padding: 14px;
  width: 243px;
  border: 3px solid #ecd0d0;
  align-items: center;
  gap:9px;
`;
export const FriendsItemImg = styled.img`
  width: 75px;
`;
export const FriendsItemName = styled.h2`
margin:0;
`;
export const FriendsItemIndicatorOnline = styled.span`
width: 30px; 
height: 30px;
border-radius: 50%;
`;
