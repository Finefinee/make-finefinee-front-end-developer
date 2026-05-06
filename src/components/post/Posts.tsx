import type Post from "../../data/post.ts";
import { getAll } from "../../api/api.ts";
import PostsItem from "./PostsItem.tsx";
import { useEffect, useState } from "react";
import * as S from "./Post.style.ts";
import { useWritingStore } from "../../zustand/useWritingStore.ts";
import PostForm from "./PostForm.tsx";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<"done" | "loading" | "error">("done");
  const isWriting = useWritingStore(state => state.isWriting);

  useEffect(() => {
    if (isWriting) {
      return;
    }

    const fetchPosts = async () => {
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

    fetchPosts();
  }, [isWriting]);

  if (isWriting) {
    return (
      <S.PostsContainer>
        <PostForm></PostForm>
      </S.PostsContainer>
    );
  }

  return (
    <S.PostsContainer>
      {status === "error" && <div>에러 발생</div>}
      {status === "loading" && <div>로딩 중...</div>}
      {status === "done" && posts.length === 0 && <div>글이 없습니다</div>}

      {status === "done" && posts.map((post, index) => <PostsItem key={index} post={post} />)}
    </S.PostsContainer>
  );
};

export default Posts;
