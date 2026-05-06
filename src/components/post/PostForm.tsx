import * as S from "./Post.style.ts";
import { useState } from "react";
import * as React from "react";

const PostForm = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const contentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, content);
  };

  return (
    <S.PostFormContainer>
      <S.PostForm onSubmit={submitForm}>
        <S.PostFormTitle
          type="text"
          placeholder={"제목 입력하기.."}
          onChange={titleChange}
          required={true}
        />
        <S.PostFormContent
          placeholder={"글 입력하기.."}
          onChange={contentChange}
          required={true}
        ></S.PostFormContent>
        <S.PostFormSubmitButton>작성</S.PostFormSubmitButton>
      </S.PostForm>
    </S.PostFormContainer>
  );
};

export default PostForm;