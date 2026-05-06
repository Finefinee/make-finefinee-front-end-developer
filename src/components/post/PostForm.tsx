import * as S from "./Post.style.ts";
import * as React from "react";
import { useState } from "react";
import type Post from "../../data/post.ts";
import { uploadPost } from "../../api/postApi.ts";
import { useWritingStore } from "../../zustand/useWritingStore.ts";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"done" | "loading" | "error" | "blank">("done");
  const [showDoneMessage, setShowDoneMessage] = useState<boolean>(false);
  const toggleWriting = useWritingStore(state => state.toggleWriting);

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const contentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimTitle: string = title.trim();
    const trimContent: string = content.trim();

    if (trimTitle.length <= 0 || trimTitle.length <= 0) {
      setStatus("blank");
      return;
    }

    const post: Post = {
      title: trimTitle,
      content: trimContent,
    };

    const fetchPost = async () => {
      try {
        setStatus("loading");
        await uploadPost(post);
        setStatus("done");
        setShowDoneMessage(true);
      } catch (e: unknown) {
        console.error(e);
        setStatus("error");
      }
    };

    fetchPost();

    const formHtml = e.currentTarget;
    const titleInputHtml = formHtml.elements.namedItem("title") as HTMLInputElement;
    const contentInputHtml = formHtml.elements.namedItem("content") as HTMLTextAreaElement;
    titleInputHtml.value = "";
    contentInputHtml.value = "";

    setTimeout(() => {
      setShowDoneMessage(false);
      toggleWriting();
    }, 1800);
  };

  return (
    <S.PostFormContainer>
      <S.PostForm onSubmit={submitForm}>
        <S.PostFormTitle
          name={"title"}
          type="text"
          placeholder={"제목 입력하기.."}
          onChange={titleChange}
        />
        <S.PostFormContent
          name={"content"}
          placeholder={"글 입력하기.."}
          onChange={contentChange}
        ></S.PostFormContent>
        <S.PostFormSubmitButton>작성</S.PostFormSubmitButton>
      </S.PostForm>
      {status === "error" && <div>에러 발생</div>}
      {status === "blank" && <div>제목 혹은 본문이 비었습니다!</div>}
      {status === "loading" && <div>업로드 중...</div>}
      {showDoneMessage === true && <div>업로드 완료!</div>}
    </S.PostFormContainer>
  );
};

export default PostForm;
