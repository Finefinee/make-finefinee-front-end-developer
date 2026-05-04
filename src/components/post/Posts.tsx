import type Post from "../../data/post.ts";
import { getAll } from "../../api/api.ts";
import PostsItem from "./PostsItem.tsx";
import { useEffect, useState } from "react";
import * as S from "./Post.style.ts";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        await new Promise((res) => setTimeout(res, 1000));
        const data = await getAll();
        setPosts(data);
      } catch (e: unknown) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>에러 발생</div>;
  }

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (posts.length === 0) {
    return <div>글이 없습니다</div>;
  }

  return (
    <S.PostsContainer>
      {posts.map((post, index) => (
        <PostsItem key={index} post={post} />
      ))}
    </S.PostsContainer>
  );
};

export default Posts;
