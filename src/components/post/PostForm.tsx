import * as S from "./Post.style.ts";
import { useEffect, useState } from "react";
import * as React from "react";
import type Post from "../../data/post.ts";
import { uploadPost } from "../../api/api.ts";

const PostForm = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"done" | "loading" | "error">("done");
  const [showDoneMessage, setShowDoneMessage] = useState<boolean>(false);

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const contentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimTitle: string = title.trim();
    const trimContent: string = content.trim();

    if (trimTitle.length <= 0 || trimTitle.length <= 0) {
      return;
    }

    const post: Post = {
      title: trimTitle,
      content: trimContent,
    };

    const fetchPost = async () => {
      try {
        setStatus("loading");
        await new Promise(res => setTimeout(res, 1000));
        const data: Post = await uploadPost(post);
        setStatus("done");
        setShowDoneMessage(true);
      } catch (e: unknown) {
        console.error(e);
        setStatus("error");
      }
    }

    fetchPost();
  };

  useEffect(() => {
    setTimeout(() => {
      setShowDoneMessage(false);
    }, 2000);
  }, [showDoneMessage]);

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
      {status === "error" && <div>에러 발생</div>}
      {status === "loading" && <div>작성 중...</div>}
      {showDoneMessage === true && <div color={"white"}>작성 완료!</div>}
    </S.PostFormContainer>
  );
};

export default PostForm;