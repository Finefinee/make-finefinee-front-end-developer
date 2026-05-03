import styled from "styled-components";

export const Menubar = styled.div`
    display: flex;
    flex-direction: column;
    align-self: start;
    gap: 3vh;
    margin-top: 5vh;
    margin-left: 2vh;
    margin-right: 12vh;
`;

export const MenubarItem = styled.div`
    align-items: center;
    justify-content: start;
    display: flex;
    gap: 1.3vh;
    padding: 0 0 0 3vh;
`;

export const Container = styled.div`
    border-right: 1px solid #383A3B;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    height: auto;
`;