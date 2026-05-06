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
  gap: 1rem;
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
  cursor: pointer;
  margin: 0;
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  font-weight: 500;
  color: white;
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
  font-weight: 500;
  color: white;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  width: 15%;
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
  font-weight: 700;
  color: white;
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
  font-weight: 500;
  color: white;
`;

export const GreenButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  width: 10%;
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
  font-weight: 700;
  color: white;
`;

export const RedButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  width: 10%;
  border: 2px solid rgb(255, 50, 54);
  border-radius: 0.5rem;
  background-color: rgb(255, 50, 54);
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
  font-weight: 700;
  color: white;
`;

export const OnePostContainer = styled.div`
  align-items: center;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const OnePostTitle = styled.h2`
  text-align: start;
  font-size: 20px;
  padding: 0.5rem 0.5rem;
  border: 2px solid #383a3b;
  border-radius: 0.5rem;
  &::placeholder {
    font-weight: bold;
  }
  width: 60%;
  line-height: 118%;
  letter-spacing: -0.24px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  font-weight: 500;
  color: white;
`;

export const OnePostContent = styled.p`
  text-align: start;
  font-size: 20px;
  padding: 0.5rem 0.5rem;
  resize: none;
  border: 2px solid #383a3b;
  border-radius: 0.5rem;
  min-height: 20rem;
  &::placeholder {
    font-weight: bold;
  }
  width: 60%;

  line-height: 118%;
  letter-spacing: -0.24px;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  font-weight: 500;
  color: white;
`;

export const OnePostButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;