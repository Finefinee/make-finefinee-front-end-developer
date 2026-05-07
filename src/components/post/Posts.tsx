import type Post from "../../data/post.ts";
import { getAll } from "../../api/postApi.ts";
import PostsItem from "./PostsItem.tsx";
import { useEffect, useState } from "react";
import * as S from "./Post.style.ts";
import { useWritingStore } from "../../zustand/useWritingStore.ts";
import { useReadingStore } from "../../zustand/useReadingStore.ts";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<"done" | "loading" | "error">("done");
  const isWriting = useWritingStore(state => state.isWriting);
  const isReading = useReadingStore(state => state.isReading);

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

  return (
    <S.PostsContainer>
      {status === "error" && <div>에러 발생</div>}
      {status === "loading" && <div>로딩 중...</div>}
      {status === "done" && posts.length === 0 && <div>글이 없습니다</div>}

      {status === "done" &&
        posts.map(
          post =>
            post.id && (
              <PostsItem
                key={post.id}
                post={post}
              />
            )
        )}
    </S.PostsContainer>
  );
};

export default Posts;
