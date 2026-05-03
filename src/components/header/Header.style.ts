import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #383A3B;
`;

export const Padding = styled.div`
    padding: 0 3vh 0 3vh;
`;

export const HeaderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    &.header-right {
        display: flex;
        gap: 5vh;
    }
`;

export const Profile = styled.div`
  display: flex;
  gap: 2vh;
`;

export const ProfileInfo = styled.div`
  text-align: left;
`;

export const Name = styled.p`
  font-weight: bolder;
  color: white;
`;

export const Username = styled.p`
  font-size: 2vh;
`;