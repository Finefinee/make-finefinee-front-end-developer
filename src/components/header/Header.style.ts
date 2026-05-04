import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 4.5rem;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const Padding = styled.div`
  padding: 0 3vh 0 3vh;
  border-bottom: 1px solid #383a3b;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &.header-right {
    display: flex;
    gap: 2.5rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProfileInfo = styled.div`
  text-align: left;
`;

export const Name = styled.p`
  font-weight: bolder;
  color: white;
`;

export const Username = styled.p`
  font-size: 1rem;
`;
