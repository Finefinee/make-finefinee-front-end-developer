import styled from "styled-components";

export const Menubar = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  gap: 1.5rem;
  margin-top: 1.75rem;
  margin-left: 1rem;
  margin-right: 5rem;
`;

export const MenubarItem = styled.div`
  align-items: center;
  justify-content: start;
  display: flex;
  gap: 0.6rem;
  padding: 0 0 0 1.5rem;
`;

export const Container = styled.div`
  border-right: 1px solid #383a3b;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  height: auto;
`;

export const MenuName = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
`;
