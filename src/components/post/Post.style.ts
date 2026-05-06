import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const PostFormContainer = styled.div`
  align-items: center;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
`;

export const PostFormTitle = styled.input`
  font-size: 20px;
  padding: 0.5rem 0.5rem;
  border: 2px solid #383a3b;
  border-radius: 0.5rem;
  &::placeholder {
    font-weight: bold;
  }
  width: 100%;
  line-height: 118%;
  letter-spacing: -0.24px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
`;

export const PostFormContent = styled.textarea`
  font-size: 20px;
  padding: 0.5rem 0.5rem;
  resize: none;
  border: 2px solid #383a3b;
  border-radius: 0.5rem;
  height: 20rem;
  &::placeholder {
    font-weight: bold;
  }
  width: 100%;

  line-height: 118%;
  letter-spacing: -0.24px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
`;

export const PostFormSubmitButton = styled.button`
  padding: 0.5rem 0.5rem;
  width: 15%;
  height: 10%;
  border: 2px solid rgb(35, 134, 54);
  border-radius: 0.5rem;
  background-color: rgb(35, 134, 54);
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  line-height: 118%;
  letter-spacing: -0.24px;
  @media (max-width: 1024px) {
    font-size: 15px;
    width: calc(15% + 1rem);
  }
  font-family: var(--heading);
  font-weight: 700;
  color: var(--text-h);
`;