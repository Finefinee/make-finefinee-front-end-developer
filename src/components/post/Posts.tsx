import type Post from "../../data/post.ts";
import { deletePost, getAll } from "../../api/postApi.ts";
import PostsItem from "./PostsItem.tsx";
import { useEffect, useState } from "react";
import * as S from "./Post.style.ts";
import { useWritingStore } from "../../zustand/useWritingStore.ts";
import PostForm from "./PostForm.tsx";
import { useReadingStore } from "../../zustand/useReadingStore.ts";
import PostContent from "./PostContent.tsx";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<"done" | "loading" | "error">("done");
  const [readingPostId, setReadingPostId] = useState<number>(0);
  const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);
  const isWriting = useWritingStore(state => state.isWriting);
  const isReading = useReadingStore(state => state.isReading);
  const toggleIsReading = useReadingStore(state => state.toggleReading);

  const handleBack = () => {
    toggleIsReading();
    setDeleteSuccess(false);
  };

  const fetchDeletePost = async () => {
    setStatus("loading");
    try {
      await deletePost(readingPostId);
      setStatus("done");
      setDeleteSuccess(true);
    } catch (e: unknown) {
      console.error(e);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (isWriting) {
      return;
    }

    const fetchGetAllPosts = async () => {
      setStatus("loading");
      try {
        const data = await getAll();
        setPosts(data);
        setStatus("done");
      } catch (e: unknown) {
        console.error(e);
        setStatus("error");
      }
    };

    fetchGetAllPosts();
  }, [isWriting, isReading]);

  if (isWriting) {
    return (
      <S.PostsContainer>
        <PostForm></PostForm>
      </S.PostsContainer>
    );
  }

  if (isReading) {
    return (
      <S.PostsContainer>
        <PostContent id={readingPostId}></PostContent>
        <S.OnePostButtonContainer>
          <S.GreenButton onClick={handleBack}>뒤로 가기</S.GreenButton>
          <S.RedButton onClick={fetchDeletePost}>삭제</S.RedButton>
        </S.OnePostButtonContainer>
        {status === "done" && deleteSuccess === true && <div>삭제 성공!</div>}
        {status === "error" && <div>에러 발생</div>}
        {status === "loading" && <div>로딩 중...</div>}
      </S.PostsContainer>
    );
  }

  return (
    <S.PostsContainer>
      {status === "error" && <div>에러 발생</div>}
      {status === "loading" && <div>로딩 중...</div>}
      {status === "done" && posts.length === 0 && <div>글이 없습니다</div>}

      {status === "done" &&
        posts.map(post => (
          <PostsItem
            key={post.id}
            post={post}
            id={post.id}
            setReadingPostId={function (id?: number): void {
              if (id === undefined) {
                return;
              }
              setReadingPostId(id);
            }}
          />
        ))}
    </S.PostsContainer>
  );
};

export default Posts;
