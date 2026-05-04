import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  flex-direction: column;
  box-sizing: border-box;
`;

export const BodyContent = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;
