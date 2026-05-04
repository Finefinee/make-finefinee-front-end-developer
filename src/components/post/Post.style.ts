import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
`;