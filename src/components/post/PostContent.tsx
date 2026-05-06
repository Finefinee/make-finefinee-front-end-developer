import { useEffect, useState } from "react";
import { getOne } from "../../api/postApi.ts";
import * as S from "./Post.style.ts";
import type Post from "../../data/post.ts";

interface PostContentProps {
  id: number;
}

const PostContent = ({ id }: PostContentProps) => {
  const [post, setPost] = useState<Post | null>(null);
  const [status, setStatus] = useState<"done" | "loading" | "error">("done");

  useEffect(() => {
    const fetchPost = async () => {
      setStatus("loading");
      try {
        const data: Post = await getOne(id);
        setPost(data);
        setStatus("done");
      } catch (e: unknown) {
        console.error(e);
        setStatus("error");
      }
    };

    fetchPost();
  }, []);

  return (
    <S.OnePostContainer>
      {status === "error" && <div>에러 발생</div>}
      {status === "loading" && <div>로딩 중...</div>}
      <S.OnePostTitle>{post ? post.title : ""}</S.OnePostTitle>
      <S.OnePostContent>{post ? post.content : ""}</S.OnePostContent>
    </S.OnePostContainer>
  );
};

export default PostContent;
