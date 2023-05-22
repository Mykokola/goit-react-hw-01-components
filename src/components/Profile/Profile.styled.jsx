import styled from '@emotion/styled';
export const ProfileCards = styled.div`
  width: 350px;
  margin: 0 auto;
  border: 3px solid #fbd1d1;
  background-color: #fbfafc;
  border-radius: 20px;
  margin-top: 50px;
`;
export const Avatar = styled.img`
  width: 230px;
  height: 215px;
  display: block;
  margin: 40px auto;
  border-radius: 50%;
`;
export const AbautProfile = styled.p`
  margin: 0;
  color: #b79d9d;
  text-align: center;
  margin-top: 10px;
`;
export const StatsList = styled.ul`
  height: 50px;
  background-color: #caa2a2;
  margin: 0 auto;
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style-type: none;
  padding: 0;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid gray;
  flex: 1;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;
